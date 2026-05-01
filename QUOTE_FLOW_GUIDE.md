# Willship Vehicle Quote — Developer Guide

This document explains how the vehicle shipping quote flow works end-to-end across the Willship stack and how to make safe edits to the customer-facing copy. It exists because the quote rendering is split across two codebases and one of them lives on a different subdomain — that surprise has caused several "I edited the file, why didn't it change?" incidents.

If you only need to change the price-block notes (PLEASE NOTE / IMPORTANT bunker surcharge), jump to **Updating the route × vehicle copy matrix**.

---

## 1. The two codebases

The vehicle quote feature spans two repositories. Both must agree for the page to render correctly.

### Next.js frontend
- **Path on disk**: `willshipintl-willship-04-28-2026/`
- **Live URL**: `https://willship.com.au`
- **Owns**: every customer-facing page, including the quote results page at `/import-vehicle/quote?id=<quoteId>`.
- **Source of truth for**: layout, copy overrides, vehicle-class branching for the PLEASE NOTE / IMPORTANT blocks, button placement.

### WordPress plugin
- **Plugin name**: `quote-form` (Willship internal plugin)
- **Path on host**: `/public_html/wp-content/plugins/quote-form/`
- **Hosting**: SiteGround shared cPanel (`c66782.sgvps.net`), accessible via FTP as `dante@willship.com.au`. Read-only inspection is fine via curl/wget — do **not** issue `STOR`/`DELE`.
- **Lives on**: `admin.willship.com.au` is the active install. Other subdomains (`latest`, `dev2023`, `staging6.admin`) are staging/dev mirrors. `willship.com.au/staging/` is also active. Top-level `willship.com.au/public_html/wp-content/` is a stale Jan 2022 snapshot — ignore it.
- **Owns**: the form HTML, AJAX submission, DB writes, REST API, per-route JSON template files, transactional emails, PDF generation.

### Why this matters
The Next.js page **fetches data from WordPress** at request time:

```ts
// components/Automotive/AutoQuoteData.tsx:44
const url = `https://admin.willship.com.au/wp-json/automotive/v1/get/${id}`;
```

If you edit copy in the Next.js code, you redeploy Next.js. If you edit copy in the per-route WordPress JSON, you update the WP filesystem on `admin.willship.com.au`. Neither one alone covers everything — and the precedence rules are non-obvious (see below).

---

## 2. End-to-end submission flow

What happens when a customer clicks "Get Instant Quote":

1. **Shortcode renders the form**
   `[quote_form]` shortcode → `quote-form/quote-form.php:136` → `quote-form/public/partials/quote-form-public-display.php` → `partials/form.php` (HTML) + `partials/formjs.php` (jQuery, hooked to `wp_footer`).

2. **Browser submits via admin-ajax**
   `formjs.php` collects form fields and POSTs to `admin-ajax.php`. For non-common vehicles (Large/Boat/Caravan/Motorhome) it first calls `getCubicPrice` AJAX to compute volumetric pricing; for Small/Medium/Motorcycle it uses `getThreeRowPrice`.

3. **REST API submit handler runs**
   `quote-form/api.php` → `submitQuote()` (route `automotive/v1/submit`).
   - Branches by vehicle: `$commonVehicles = [1, 2, 4]` (SMALL, MEDIUM, MOTORCYCLE) → `getThreeRowPrice()`; everything else → `getCubicPrice()` with port-specific deductions (SYD=300, BRI=525, MEL=550, ADE=500).
   - Writes the quote into `wp_quotes` via `insertQuotes()` (`class/autoload/class-quote-form-api.php:148`) with `quoteData` JSON containing `routeTemplate` (path to a JSON config file), `block_*_is_hidden` flags, prices, transit times, closest port, etc.
   - Sends customer + admin emails via `qsendEmail()` (Sendinblue/Brevo) and generates a PDF via TCPDF.

4. **Browser redirects to results page**
   `formjs.php` redirects to `/import-vehicle/quote?id=<newQuoteId>` — i.e. the **Next.js** project takes over rendering.

---

## 3. End-to-end retrieval & render flow

The results page is React, fed by a single REST call.

1. **Next.js page mount**
   `pages/import-vehicle/quote.tsx:76` mounts `<AutoQuoteData />`.

2. **Fetch quote data**
   `components/Automotive/AutoQuoteData.tsx:44` calls `https://admin.willship.com.au/wp-json/automotive/v1/get/{id}`.

3. **WordPress assembles the response**
   `quote-form/api.php` → `getQuote()` → `class/autoload/class-quote-form-api.php:298`:
   - Reads the quote row from `wp_quotes`.
   - Loads the per-route JSON template by HTTP, **not** filesystem:
     ```php
     $url = "https://admin.willship.com.au/wp-content/plugins/quote-form/public/partials/config";
     $template = file_get_contents($url . "/" . $routeTemplate);
     $quoteData[0]['routeTemplateData'] = json_decode($template, true);
     ```
     This is a hardcoded URL pointing back at the same admin subdomain. If admin.willship.com.au is down, retrieval breaks even on local dev.
   - Loads the corresponding checklist HTML similarly.
   - Returns `{ status, data: [...] }` JSON.

4. **Next.js merges placeholder values**
   `AutoQuoteData.tsx` runs replacements on the JSON template fields:
   - `##TRANSITTIME_RORO##`, `##TRANSITTIME_CONTAINER##`, `##DEPARTURE##`, `##DESTINATION##`, `##CLOSESTPORT##`, `##VEHICLETYPE##`.
   - Computes `formattedPrice` (currency + price, or "PRICE ON APPLICATION" passthrough).
   - Builds three blocks (RORO / 20FT / Shared 40FT), each with `visible`, `data`, `price`, `accordionStart`.

5. **Render**
   Passes everything to `<ROROquoteInfo />` (`components/Automotive/ROROquoteInfo.tsx`). That component decides what `custom_text` to show via `getCustomTextContent()` — see next section.

---

## 4. Updating the route × vehicle copy matrix

The PLEASE NOTE / IMPORTANT blocks shown beneath each price tile come from `ROROquoteInfo.tsx`, not from the WordPress JSON. The function `getCustomTextContent()` (around line 91) overrides `block.data.custom_text` for specific AU→NZ RORO routes. For everything else, it falls through to the JSON value.

### Current matrix (as of the last edit)

| Departure | Destination | Vehicle class | Output |
|---|---|---|---|
| MEL / Sydney (= Port Kembla) / BRI | AKL / WLG / LYT | Small / Motorcycle | PLEASE NOTE (AUD 200 Toyofuji) **+** IMPORTANT (AUD125 / AUD235) |
| MEL / Sydney / BRI | AKL / WLG / LYT | Medium | PLEASE NOTE (AUD 200 Toyofuji) **+** IMPORTANT (AUD150 / AUD310) |
| MEL / Sydney / BRI | AKL / WLG / LYT | Large / Caravan / Boat / Motorhome | PLEASE NOTE (AUD 20/m³ Toyofuji) **+** IMPORTANT (AUD7/m3 / AUD17/m3) |
| MEL / Sydney / BRI | **Nelson** | Small / Motorcycle | IMPORTANT only (AUD125 / AUD235) — no preamble |
| MEL / Sydney / BRI | **Nelson** | Medium | IMPORTANT only (AUD150 / AUD310) |
| MEL / Sydney / BRI | **Nelson** | Large / Caravan / Boat / Motorhome | IMPORTANT only (AUD7/m3 / AUD17/m3) |
| Fremantle / Adelaide | AKL / WLG / NLS / LYT | Small / Motorcycle | IMPORTANT only (AUD125) |
| Fremantle / Adelaide | AKL / WLG / NLS / LYT | Medium | IMPORTANT only (AUD150) |
| Fremantle / Adelaide | AKL / WLG / NLS / LYT | Large / Caravan / Boat / Motorhome | IMPORTANT only (AUD7/m3) |
| Anything else | — | — | `block.data.custom_text` from the per-route WordPress JSON |

### Vocabulary mapping (form value ↔ business name)

| Form dropdown value | Business meaning |
|---|---|
| `Sydney, Australia` | Port Kembla (the actual RORO port) |
| `Brisbane, Australia` | Brisbane |
| `Melbourne, Australia` | Melbourne |
| `Adelaide, Australia` | Adelaide |
| `Fremantle, Australia` | Fremantle (Perth area) |
| `Auckland, New Zealand` | Auckland |
| `Wellington, New Zealand` | Wellington |
| `Lyttelton, New Zealand` | Lyttelton (Christchurch area) |
| `Nelson, New Zealand` | Nelson |

When the spec says "Port Kembla", the code matches `"Sydney, Australia"` because that's what the form submits. Confirm exact strings against the WP `departures` table if you ever add a new port.

### Vehicle ID mapping

Defined in `quote-form/config.php`:

| Constant | ID | Form text |
|---|---|---|
| `SMALL_VEHICLE` | 1 | `Small Vehicle` |
| `MEDIUM_VEHICLE` | 2 | `Medium Vehicle` |
| `LARGE_VEHICLE` | 3 | `Large Vehicle` |
| `MOTORCYLCE` | 4 | `Motorcycle` (note: **constant name has a typo** — `MOTORCYLCE` not `MOTORCYCLE`. Don't fix it without a coordinated rename; it's referenced by ID in many places.) |
| `BOAT` | 5 | `Boat on trailer` |
| `CARAVAN` | 6 | `Caravan/ Camper trailer` (note the leading space after the slash) |
| `MOTORHOME` | 7 | `Motorhome` |

In `ROROquoteInfo.tsx` the comparison is on the `vehicleType` text (e.g. `"Caravan/ Camper trailer"`), not the numeric ID. Match the strings exactly — including the slash-space in Caravan.

### How to add a new branch

1. Open `components/Automotive/ROROquoteInfo.tsx`.
2. Locate `getCustomTextContent` (~line 91).
3. Add or modify the `isEasternDeparture` / `isWesternSouthernDeparture` blocks. Use the `bunkerSurcharge(["..."])` helper for the IMPORTANT paragraph so the long copy stays in one place.
4. For destinations where the PLEASE NOTE preamble should **not** appear, gate it with the existing `isNelson ? surcharge : preamble + surcharge` ternary pattern.
5. `npm run dev` and verify against an existing quote ID in your local browser.
6. Build and deploy (see § 8).

### Common pitfall: "I edited the file, nothing changed"

Three frequent causes, in decreasing order of likelihood:

1. **You edited the wrong file.** Per-route JSONs at `partials/config/<vehicle>/<route>.json` are *fallbacks* — `ROROquoteInfo.tsx`'s overrides win for AU→NZ RORO routes. Edit the React file unless you specifically want to change the JSON path.
2. **Your editor reverted the change.** VS Code holds a buffer; if you had unsaved changes there before the edit, saving in VS Code overwrites the file. Always reload the file in your editor (`Ctrl+Shift+P` → "Revert File") after an external write.
3. **You haven't redeployed.** Editing locally doesn't update production. See § 8.

---

## 5. WordPress per-route JSON config

This is the WP-side fallback content. The Next.js side overrides it for AU→NZ RORO routes; for everything else (UK, NZ→AU, Pacific, etc.) the JSON drives the visible copy.

### Directory layout
```
admin.willship.com.au:/public_html/wp-content/plugins/quote-form/public/partials/config/
├── small/                  # SMALL_VEHICLE (id=1)
├── medium/                 # MEDIUM_VEHICLE (id=2)
├── large/                  # LARGE_VEHICLE (id=3)
├── motorcycle/             # MOTORCYLCE (id=4)
├── boat_on_trailer/        # BOAT (id=5)
├── caravan/                # CARAVAN (id=6)
├── motorhome/              # MOTORHOME (id=7)
├── checklist/              # HTML files like AUtoAUCKLAND.html (per-destination prep checklists)
├── small.php               # Legacy PHP-array fallback (not the active source)
└── medium.php / large.php / ...
```

### Per-route JSON shape

Files are named like `MELtoAKL.json`, `BRItoAKL.json`, `SYDtoAKL.json`, `MELtoNLS.json`, etc.

```json
{
  "block_1": {
    "type": "ROLL ON, ROLL OFF",
    "price_desc": "",
    "custom_text": "...HTML with ##PLACEHOLDERS##...",
    "transit_time": "Approx ##TRANSITTIME_RORO## days on the water.",
    "transit_desc": "",
    "inclusions": "<ul>...</ul>",
    "exclusions": "<ul>...</ul>"
  },
  "block_2": { "type": "20FT CONTAINER", ... },
  "block_3": { "type": "SHARED 40FT CONTAINER", ... }
}
```

### Placeholders replaced at render time
All replacements happen in `AutoQuoteData.tsx`, not on the WP side:
- `##TRANSITTIME_RORO##` → `quote.transitTime_RORO`
- `##TRANSITTIME_CONTAINER##` → `quote.transitTime_Container`
- `##DEPARTURE##` → e.g. "Melbourne, Australia"
- `##DESTINATION##` → e.g. "Auckland, New Zealand"
- `##CLOSESTPORT##` → e.g. "Revesby" (used in exclusions for delivery-to-depot copy)
- `##VEHICLETYPE##` → lowercased vehicle text (used in checklist HTML)

### Editing JSON copy
1. SSH/FTP into `c66782.sgvps.net` as `dante@willship.com.au`.
2. Navigate to the relevant `partials/config/<vehicle>/` directory.
3. Edit the JSON. **Validate JSON before uploading** — a broken file kills the route entirely (file_get_contents returns parseable JSON, decode fails, `routeTemplateData` becomes null, frontend crashes).
4. Upload over FTP. The change is live immediately because `getQuote()` re-fetches over HTTP each request (no caching layer).

---

## 6. Repository layout (Next.js side)

Key files for vehicle-quote work:

| File | Purpose |
|---|---|
| `pages/import-vehicle/quote.tsx` | Page route at `/import-vehicle/quote`. Mounts `<AutoQuoteData />`, supplies print CSS. |
| `components/Automotive/AutoQuoteData.tsx` | Fetches the quote from WP REST, runs placeholder replacements, builds blocks, renders quote header + delegates RORO blocks to `<ROROquoteInfo />`. Also branches into `<VeryImportantInformationTemplate>` (AU→NZ) vs `<OldVeryImportantInformationTemplate>` (other routes). |
| `components/Automotive/ROROquoteInfo.tsx` | Renders each price block. Owns the `getCustomTextContent()` override matrix described above. |
| `components/Automotive/VeryImportantInformationTemplate.tsx` | The "VERY IMPORTANT INFORMATION" sidebar copy for AU→NZ routes. Has its own per-vehicle branching for compliance/registration text. |
| `components/Automotive/OldVeryImportantInformationTemplate.tsx` | Legacy version used for non-AU→NZ routes (UK, Ireland, Pacific). |
| `components/forms/VehicleQuoteModal.tsx` | The modal that wraps the WP shortcode form on certain pages. |
| `components/FAQs/VehicleFAQ.tsx` | Vehicle-quote FAQ copy. Has Port Kembla / MSIC / escort fee references. |
| `siteMap.ts` | All internal route paths. `vehicle.path = '/import-vehicle/quote'`. |
| `next.config.js` | Top-level redirects (e.g. `/whereweship/new-zealand` → `/import-vehicle/import-car-to-nz`). |

## 7. Repository layout (WordPress plugin side)

Key files in `quote-form/`:

| File | Purpose |
|---|---|
| `quote-form.php` | Plugin bootstrap. Registers `[quote_form]` shortcode, autoloads classes, hooks `wp_footer`. Also has cron schedules for follow-up emails. |
| `config.php` | Constants (`QF_PUBLIC_PATH`, vehicle ID constants including the `MOTORCYLCE` typo). |
| `api.php` | REST API. `automotive/v1/submit` and `automotive/v1/get/{id}` routes. Vehicle branching (`$commonVehicles = [1,2,4]`). |
| `class/autoload/class-quote-form-api.php` | Core class. `getThreeRowPrice()`, `getCubicPrice()`, `insertQuotes()`, `getQuote()` (the HTTP-fetches-own-domain function), `qsendEmail()`, `makePdf()`, `emailSend()`. |
| `class/autoload/class-helper.php` | `QFHelper` static methods: `vehicles()`, `departures()`, `destinations()`, `lastQuoteID()`, `sendFollowUpEmail()`. |
| `class/autoload/class-db.php` | Custom-table read helpers (`QFDB::vehicles()` etc.). |
| `class/autoload/class-ajax.php` | admin-ajax handlers used by `formjs.php`. |
| `public/partials/quote-form-public-display.php` | Loads form data from QFDB and includes `partials/form.php`. |
| `public/partials/form.php` | The HTML for the form. |
| `public/partials/formjs.php` | jQuery client logic, AJAX submission, redirect to Next.js results page. |
| `public/partials/config/` | Per-route JSON templates (see § 5). |

### Custom DB tables

These use the **standard WP prefix only** (no plugin-specific infix — slightly unusual for a WP plugin):

| Table | Purpose |
|---|---|
| `wp_quotes` | Submitted quote rows. Includes `quoteData` JSON column (route template path, block visibility flags) and tracking columns like `second_mail`, `enquiry_mail`. |
| `wp_vehicles` | Vehicle types (id 1–7, matching the `SMALL_VEHICLE`…`MOTORHOME` constants). |
| `wp_departure` | Departure ports (singular table name). |
| `wp_destination` | Destination ports (singular). |
| `wp_price` | Price rows. |
| `wp_price_mapping` | Many-to-many: vehicle × departure × destination → price. |
| `wp_cube_based_vehicle` | Cubic-meter pricing rules keyed by departure (singular). |
| `wp_email_list` | Admin recipients for quote notifications, filtered by `is_active`. |
| `wp_route_data` | Referenced in `class-quote-form-api.php:136`. |
| Failed-quotes table | Created by `QFAjaxExtend::createQuoteFailTable()` in `class/class.ajax.extend.php`. |

`wp_quotes.quoteData` is a JSON column holding the full quote payload — `routeTemplate` (path string used by `getQuote()` to load the per-route JSON), `checklistTemplate`, `block_1_is_hidden` / `block_2_is_hidden` / `block_3_is_hidden`, etc. Treat it as opaque from the frontend.

**Common SQL patterns** (lifted from `class-helper.php`):

```sql
-- All quotes joined to lookups
SELECT * FROM wp_quotes AS q
JOIN wp_vehicles AS v ON q.vehicle = v.vehicle_id
JOIN wp_departure AS dep ON q.departure_port = dep.departure_id
JOIN wp_destination AS des ON q.destination_port = des.destination_id;

-- Latest quote ID
SELECT id FROM wp_quotes ORDER BY id DESC LIMIT 1;
```

---

## 8. Deployment

### Next.js
Production at `willship.com.au` runs a built bundle. Editing a `.tsx` file does not affect production until it's rebuilt and redeployed.

```bash
npm run dev    # local dev (hot reload)
npm run build  # production build
npm run start  # start production server (or deploy via your hosting platform)
```

Confirm with the team where the actual deploy target is (Vercel / Node host on SiteGround / other) — check `package.json` scripts and any CI config.

### WordPress
WP changes are live immediately after FTP upload. There is no build step. **However**:
- Active install: `admin.willship.com.au`. Edit there.
- Some legacy code references `dev2022.willship.com.au` URLs — those are stale; ignore them.
- The hardcoded URL in `class-quote-form-api.php:298` means even local Next.js dev hits production WP. If you need to test plugin changes in isolation, change that URL temporarily but never commit it.

### Sanity-check checklist before deploying
1. Form submits successfully → quote ID returned → redirect lands on `/import-vehicle/quote?id=<id>`.
2. At least one Small/Medium/Motorcycle quote (AU→NZ) renders the new IMPORTANT copy correctly.
3. At least one Large/Caravan/Boat quote renders cubic-meter copy correctly.
4. A Nelson destination renders without the PLEASE NOTE preamble.
5. A non-AU→NZ route (e.g. Sydney → Southampton) still falls through to the JSON `custom_text`.
6. Print stylesheet still works (`window.print()` from the results page) — page breaks land between blocks.

---

## 9. Subdomains & environments cheat sheet

Same shared host (`c66782.sgvps.net`), different document roots:

| Subdomain | Purpose | Notes |
|---|---|---|
| `willship.com.au` | Public site (Next.js build) | The customer-facing domain |
| `willship.com.au/staging/` | Active WordPress staging | Don't confuse with the next row |
| `willship.com.au/public_html/wp-content/` (top-level) | Stale snapshot from Jan 2022 | **Ignore** — looks valid but isn't |
| `admin.willship.com.au` | Active WordPress admin + REST API consumer | Source of truth for plugin code & per-route JSON |
| `latest.willship.com.au` | Active install | Used for some experiments |
| `dev2023.willship.com.au` | Active dev install | |
| `dev2022.willship.com.au` | Empty | Referenced by some legacy comments |
| `staging6.admin.willship.com.au` | Active staging | |

When you change the plugin in `admin`, only `admin` is updated. Cross-environment sync is manual.

---

## 10. Gotchas & known quirks

- **`MOTORCYLCE` typo** in `config.php` (`define('MOTORCYLCE', 4)`). Used in many places by ID, not name. Don't rename without a full audit.
- **`Caravan/ Camper trailer`** has a leading space after the slash. Match it exactly in string comparisons.
- **Sydney = Port Kembla** in the form's departure dropdown.
- **Cross-domain fetch in WP**: `getQuote()` does `file_get_contents("https://admin.willship.com.au/...")` — meaning the WP plugin makes an HTTP call to itself. If `allow_url_fopen` is disabled or the host is unreachable, retrieval breaks even when run from the same host.
- **Hardcoded SMTP creds** in `quote-form.php` `configure_smtp()` (currently commented out). If re-enabled, make sure to rotate.
- **Two helpers, one DB**: `QFDB` (in `class/autoload/class-db.php`) and `QFHelper` (in `class/autoload/class-helper.php`) both expose `vehicles()`, `departures()`, etc. Prefer `QFDB` for raw rows; `QFHelper` for formatted/derived data.
- **Cron schedules** `2Days` (86400s) and `10Mins` (600s) defined in `quote-form.php` `followUpEmailSendingTime()` — naming is misleading, the values don't match the keys.
- **The `MEL→Nelson` Nelson short-circuit** that used to return `""` for any AU→Nelson route was removed when Nelson was folded into the standard NZ destinations group (see § 4). Don't reintroduce it without team agreement — it suppressed copy that the business now wants visible.

---

## 11. Quick reference — common tasks

### "Update the bunker surcharge dollar amounts"
→ `components/Automotive/ROROquoteInfo.tsx`, the six `bunkerSurcharge([...])` calls in `getCustomTextContent`. Rebuild & redeploy Next.js.

### "Change the inclusions/exclusions list for MEL→AKL Small Vehicle"
→ FTP into admin, edit `wp-content/plugins/quote-form/public/partials/config/small/MELtoAKL.json`. No build needed.

### "Add a new departure port"
→ Insert into `wp_departure` (admin DB; note singular table name) and add per-route JSON files for each `<newPort>to<destination>` pairing in every relevant vehicle subdir. Then update the `easternPorts` / `westernSouthernPorts` arrays in `ROROquoteInfo.tsx` if the new port should also receive the bunker copy override. You'll also likely need rows in `wp_price_mapping` and possibly `wp_cube_based_vehicle`.

### "A customer can't see their quote at willship.com.au/import-vehicle/quote?id=12345"
1. `curl https://admin.willship.com.au/wp-json/automotive/v1/get/12345` — does WP return the quote?
2. If WP returns `data: []`, the quote was never inserted (check `wp_quotes` and any failed-quote table).
3. If WP returns data but `routeTemplateData` is null, the per-route JSON file is missing or malformed — check the path it's trying to load.
4. If the API works but the page is blank, check browser console for React errors — usually a malformed JSON template.

### "Customer is getting follow-up emails when they shouldn't"
→ WP cron + `send_the_follow_up_email` / `send_the_enquiry_email` actions. Check `class-helper.php` for the queries that select recipients.

---

## 12. People & contacts

This list is intentionally short — fill in as you learn:

- **Hosting**: SiteGround (cPanel, FTP creds in 1Password under `dante@willship.com.au`).
- **Email transactional**: Sendinblue / Brevo (API key in WP plugin code or wp_options).
- **Domain**: `willship.com.au` and subdomains.

---

*Last updated based on the codebase as of 2026-04-28. When you make significant changes, please update the matrix in § 4 and the gotchas list in § 10.*
