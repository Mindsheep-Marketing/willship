import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import emailRegex from "../../utils/hooks/emailRegex";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import Loader from "../common/Loader";
import ModalHeader from "./ModalHeader";
import { modalStyles } from "./VehicleQuoteModal";
import "../../utils/hooks/dataLayer";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";
import { shippingDateOptions } from "../../quoteFormData";

const CommercialQuoteModal = () => {
  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatDescribesYou, setWhatDescribesYou] = useState("What best describes you?");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [airOrSea, setAirOrSea] = useState("Air Or Sea Freight");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [extraDetail, setExtraDetail] = useState("");
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [commercialPurpose, setCommercialPurpose] = useState ('Are these goods for commercial purposes?');
  const [commodity, setCommodity] = useState ("Commodity");
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState ('Estimated Annual Shipping Volume');
  const [leadSource, setLeadSource] = useState(pageSource);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState('Referral Source');

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    origin: false,
    destination: false,
    whatDescribesYou: false,
    airOrSea: false,
    description: false,
    weight: false,
    //dimensions: false,
    dateOfShipping: false,
    commercialPurpose: false,
    commodity: false,
    estimatedAnnualShippingVolume: false,
    how_did_you_hear_about_us: false,
  });

  const { showCommercialQuote } = useContext(ModalContext);

  const ref = useRef(null);
  const handleCloseModal = () => {
    showCommercialQuote(false);
  };
  useOnClickOutside(ref, handleCloseModal);

  const resetData = () => {
    setName("");
    setEmail("");
    setPhone("");
    setOrigin("");
    setDestination("");
    setWhatDescribesYou("What best describes you?");
    setAirOrSea("Air Or Sea Freight");
    setDescription("");
    setWeight("");
    setDimensions("");
    setExtraDetail("");
    setDateOfShipping("Date Of Shipping")
    setCommercialPurpose("Are these goods for commercial purposes?");
    setCommodity("Commodity");
    setEstimatedAnnualShippingVolume("Estimated Annual Shipping Volume");
    setSubmitted(false);
    setLeadSource("");
    sethow_did_you_hear_about_us("How did you hear about us?");
    
  };

  const handleHubSpotSuccess = () => {
    console.log("Form submitted to HubSpot successfully");
  };

  const handleHubSpotError = () => {
    console.error("Error submitting form to HubSpot");
  };

  const { sending, handleSubmit: handleHubSpotSubmit } = useHubSpotFormSubmission(
    "39556297", // Hubspot ID
    "cb0767dd-0fad-4abf-bcf4-43313b96c3ab", // Form ID
    handleHubSpotSuccess,
    handleHubSpotError
  );

  useEffect(() => {
    setErrors({
      name: name === "",
      email: !emailRegex(email),
      origin: origin === "",
      destination: destination === "",
      whatDescribesYou: whatDescribesYou === "What best describes you?",
      airOrSea: airOrSea === "Air Or Sea Freight",
      description: description === "",
      weight: weight === "",
      //dimensions: dimensions === "",
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      commercialPurpose: commercialPurpose === 'Are these goods for commercial purposes?',
      commodity: commodity === 'Commodity',
      estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === 'Estimated Annual Shipping Volume',
      how_did_you_hear_about_us: how_did_you_hear_about_us === 'Referral Source',
    });
  }, [
    name,
    email,
    origin,
    destination,
    whatDescribesYou,
    airOrSea,
    description,
    weight,
    //dimensions,
    dateOfShipping,
    commercialPurpose,
    commodity,
    estimatedAnnualShippingVolume,
    how_did_you_hear_about_us,
  ]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    (/^[0-9]*$/).test(e.target.value) && setWeight(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorList = [];

    for (const [key, value] of Object.entries(errors)) {
      value === true && errorList.push(value);
    }

    if (errorList.length > 0) {
      return;
    }

    setSent(true);

    const formID = currentPath == "/shipping-between-china-and-australia" ? "26056" : "21138";
    const unitTag = `wpcf7-f${formID}-p26388-o2as` as string;

    const formData = new FormData();
    formData.append("form", "home");
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("whatDescribesYou", whatDescribesYou);
    formData.append("goodsOrigin", origin);
    formData.append("goodsDestination", destination);
    formData.append("airSeaFreight", airOrSea);
    formData.append("GoodsDescription", description);
    formData.append("cargoWeight", weight);
    formData.append("lengthWidthHeight", dimensions);
    formData.append("message", extraDetail);
    formData.append('shippingDate', dateOfShipping);
    formData.append('commercialPurpose', commercialPurpose);
    formData.append('commodity', commodity);
    formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);
    formData.append("leadSource", pageSource);
    formData.append("_wpcf7_unit_tag", unitTag);
    formData.append("how_did_you_hear_about_us", how_did_you_hear_about_us);

// debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);

    try {
      const response = await fetch(
        `https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        setSent(true);
        resetData();
        showCommercialQuote(false);
        window.dataLayer?.push({
          event: "formSubmission",
        });
        router.push("/commercial-thank-you");
      } else {
        throw new Error("Failed to submit form");
      }

      // mapping the value following HubSpot picklist value
      let whatDescribesYou2 = "" + whatDescribesYou;
      if(whatDescribesYou == "First time importer") {
        whatDescribesYou2 = "First time importer / novice";
      } else if(whatDescribesYou == "Ive imported a few times before") {
        whatDescribesYou2 = "Ive imported a few times before / experienced";
      } else if(whatDescribesYou == "Regular Importer") {
        whatDescribesYou2 = "Ive imported a few times before / experienced";
      }

      const hubspotFormData = {
        // All the fields set out in the corresponding Hubspot form must be included here and must correspond to the same field names or an exception will be thrown.
        fields: [
          { name: "lastname", value: name, },
          { name: "email", value: email },
          { name: "phone", value: phone },
          { name: "what_describes_you2", value: whatDescribesYou2 },
          { name: "origin", value: origin },
          { name: "destination", value: destination },
          { name: "air_or_sea_freight", value: airOrSea },
          { name: "goods_description_message", value: description },
          { name: "cargo_weight", value: weight },
          { name: "cargo_dimension", value: dimensions },
          { name: "message", value: extraDetail },
          { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
          { name: "commercial_purpose", value: commercialPurpose },
          { name: "commodity", value: commodity },
          { name: "estimated_annual_shipping_volume", value: estimatedAnnualShippingVolume || '' },
          { name: "form_source2", value: 'Commercial Freight Quote Request' },
          { name: "business_channel", value: 'Commercial' },
          { name: "form_type", value: 'Manual' },
          { name: "how_did_you_hear_about_us", value: how_did_you_hear_about_us },
        ],
      };
      console.log(hubspotFormData);
      await handleHubSpotSubmit(hubspotFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='Commercial Freight Quote Request' />
          <form 
            className={modalStyles.form}
            onSubmit={handleSubmit}
          >
            <h3 className={modalStyles.formHeading}>
              Please Complete The Form Below And We&apos;ll Get Back To You
            </h3>
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>Your Details</h3>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Your Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  {submitted && errors.name && <p className={modalStyles.errorMessage}>Enter Your Name</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Your Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {submitted && errors.email && <p className={modalStyles.errorMessage}>Enter a valid email</p>}
                </div>

              </div>  
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Phone'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                <div className={modalStyles.inputWrapper}>
                <select
                    className={modalStyles.input}
                    onChange={e => setWhatDescribesYou(e.target.value)}
                    value={whatDescribesYou}
                >
                    <option value='What best describes you?'>What best describes you?</option>
                    <option value='First time importer'>First time importer</option>
                    <option value='Ive imported a few times before'>I&apos;ve imported a few times before</option>
                    <option value='Regular Importer'>Regular Importer</option>
                  </select>
                  {submitted && errors.whatDescribesYou && <p className={modalStyles.errorMessage}>What best describes you?</p>}
                </div>

              </div>
            </div>
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>Goods Details</h3>
              <div className={modalStyles.row}>
              <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={dateOfShipping}
                    onChange={e => setDateOfShipping(e.target.value)}
                  >
                    {/* <option value='abc' disabled={true} selected={true}>Date Of Shipping</option> */}
                    {shippingDateOptions.map((option : string, i) => (
                      <option key={i} value={option} >{option}</option>
                    ))}
                  </select>
                  {submitted && errors.dateOfShipping && <p className={modalStyles.errorMessage}>Select a shipping Date</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <select
                      className={modalStyles.input}
                      onChange={e => setEstimatedAnnualShippingVolume(e.target.value)}
                      value={estimatedAnnualShippingVolume}
                  >
                      <option value='Estimated Annual Shipping Volume'>Estimated Annual Shipping Volume</option>
                      <option value='Just a one off'>Just a one off</option>
                      <option value='2-6 times per year'>2-6 times per year</option>
                      <option value='6-12 times per year'>6-12 times per year</option>
                      <option value='12+ times per year'>12+ times per year</option>
                    </select>
                  {submitted && errors.estimatedAnnualShippingVolume && <p className={modalStyles.errorMessage}>Estimated Annual Shipping Volume</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <select
                      className={modalStyles.input}
                      onChange={e => setCommercialPurpose(e.target.value)}
                      value={commercialPurpose}
                  >
                      <option value='Are these goods for commercial purposes?'>Are these goods for commercial purposes?</option>
                      <option value='Yes'>Yes, I’m importing goods under an ABN for a business</option>
                      <option value='No'>No - These are for personal use</option>
                    </select>
                  {submitted && errors.commercialPurpose && <p className={modalStyles.errorMessage}>Are these goods for commercial purposes?</p>}
                </div>
              </div>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Goods Origin'
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                  />              
                  {submitted && errors.origin && <p className={modalStyles.errorMessage}>Enter the goods origin</p>}                  
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Goods Destination'
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  />
                  {submitted && errors.destination && <p className={modalStyles.errorMessage}>Enter the goods destination</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <select 
                    className={modalStyles.input}
                    onChange={e => setAirOrSea(e.target.value)}
                    value={airOrSea}
                  >
                    <option value='Air Or Sea Freight'>Air Or Sea Freight</option>
                    <option value='Air Freight'>Air Freight</option>
                    <option value='Sea Freight'>Sea Freight</option>
                  </select>
                  {submitted && errors.airOrSea && <p className={modalStyles.errorMessage}>Select Air or Sea Freight</p>}
                </div>
              </div>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder="Goods Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  {submitted && errors.description && <p className={modalStyles.errorMessage}>Enter a description</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <select
                      className={modalStyles.input}
                      onChange={e => setCommodity(e.target.value)}
                      value={commodity}
                  >
                      <option value='Commodity'>Commodity</option>
                      <option value='General Cargo'>General Cargo</option>
                      <option value='Hazardous Goods (e.g. Lithium batteries)'>Hazardous Goods (e.g. Lithium batteries)
                      </option>
                      <option value='Food products'>Food products</option>
                      <option value='Used Equipment/Machinery'>Used Equipment/Machinery</option>
                      <option value='Personal Effects'>Personal Effects</option>
                    </select>
                    {submitted && errors.commodity && <p className={modalStyles.errorMessage}>Select Commodity</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Cargo Weight (kg)'
                      value={weight}
                      onChange={handleWeightChange}
                    />
                    {submitted && errors.weight && <p className={modalStyles.errorMessage}>Enter the weight in Kg</p>}
                  </div>
 
              </div>
              <div className={modalStyles.row}>
              <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder="Cargo L / W / H in Metres (if known)"
                      value={dimensions}
                      onChange={e => setDimensions(e.target.value)}
                    />
                    {/*submitted && errors.dimensions && <p className={modalStyles.errorMessage}>Please enter the dimensions in metres</p>*/}
                  </div>
                <textarea
                  placeholder="Is there anything else you'd like to tell us about your shipment?"
                  className={`h-10 ${modalStyles.input}`}
                  rows={4}
                  value={extraDetail}
                  onChange={e => setExtraDetail(e.target.value)}
                />
                
              </div>
              <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={how_did_you_hear_about_us}
                    onChange={e => sethow_did_you_hear_about_us(e.target.value)}
                  >
                    <option value='Referral Source'>How did you hear about us?</option>
                    <option value='Search Engine'>Search Engine (Google, Bing, etc.)</option>
                    <option value='Social Media'>Social Media (Facebook, Instagram, LinkedIn, Youtube etc.)</option>
                    <option value='Online Ads'>Online Ads (Google Ads, etc.)</option>
                    <option value='Company Website'>Company Website (Direct search)</option>
                    <option value='Email Marketing or Newsletter'>Email Marketing or Newsletter</option>
                    <option value='Word of Mouth'>Word of Mouth or Personal Recommendation</option>
                    <option value='Industry Partner or Business Referral'>Industry Partner or Business Referral</option>
                  </select>
                  {submitted && errors.how_did_you_hear_about_us && <p className={modalStyles.errorMessage}>How did you hear about us?</p>}
                </div>
              {currentPath == '/shipping-between-india-and-australia' &&
              <div className={modalStyles.row}>
                <p><b>***Please note we do not assist with personal effects shipments, only commercial cargo***</b></p>
              </div>
              }
            </div>
              <p className="text-center">
                Your information is used solely in conjunction with our <Link href={siteMap.privacy.path}>
                  <a className="text-blue-700 font-bold">Privacy Policy</a>  
                </Link> and is not sold or distributed to any other company.
              </p>
              
              {!sending && !sent 
                ? (
                  <div className="w-72 mx-auto">
                    <button 
                      type='submit'
                      className={modalStyles.buttonStyle}
                    >
                      Request A Quote
                    </button>
                  </div>
                ) : sending
                  ? <Loader />
                  : <p>Your quote has been generated... please wait while you are redirected.</p>
              }
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommercialQuoteModal;