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

const departurePorts = [
  'Origin Port',
  'Dalian',
  'Guangzhou',
  'Hong Kong',
  'Ningbo',
  'Qingdao',
  'Shanghai',
  'Shenzhen',
  'Xiamen',
  'Xingang (Tianjin)',
];

const destinations = [
  "Destination Port",
  "Adelaide",
  "Brisbane",
  "Fremantle",
  "Melbourne",
  "Sydney",
];

const ChinaAustraliaQuoteModal = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const { showChinaAustraliaQuote, showChinaAirFreightQuote, showInstantFCLQuote } = useContext(ModalContext);

  const ref = useRef(null);
  const handleCloseModal = () => {
    showChinaAustraliaQuote(false);
  };
  useOnClickOutside(ref, handleCloseModal);

  const [shippingType, setShippingType] = useState('LCL (shipments up to 10,000KG or up to 12CBM/m3)');
  // const [country, setCountry] = useState('China');
  const [departurePort, setDeparturePort] = useState('Origin Port');
  const [destination, setDestination] = useState('Destination Port');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [cbm, setCbm] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [signup, setSignup] = useState(false);
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [whatDescribesYou, setWhatDescribesYou] = useState("What best describes you?");
  const [commercialPurpose, setCommercialPurpose] = useState ('Are these goods for commercial purposes?');
  const [commodity, setCommodity] = useState ("Commodity");
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState ('Estimated Annual Shipping Volume');

  const [focused, setFocused] = useState<null | 'weight' | 'cbm' | 'fob'>(null)
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [fob, setFob] = useState("");
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState("Referral Source");



  const resetForm = () => {
    setSubmitted(false);
    // setShippingType('LCL (shipments up to 10,000KG or up to 12CBM/m3)');
    // setCountry('China');
    setDeparturePort('Origin Port');
    setDestination('Destination Port');
    setDescription('');
    setWeight('');
    setCbm('');
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setDateOfShipping('Date Of Shipping');
    setWhatDescribesYou("What best describes you?");
    setCommercialPurpose("Are these goods for commercial purposes?");
    setEstimatedAnnualShippingVolume("Estimated Annual Shipping Volume");
    setCommodity("Commodity");
    setSignup(false);
    sethow_did_you_hear_about_us("Referral Source");
    setFob("");
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

  const [errors, setErrors] = useState({
    shippingType: false,
    departurePort: false,
    destination: false,
    description: false,
    weight: false,
    cbm: false,
    name: false,
    email: false,
    dateOfShipping: false,
    whatDescribesYou: false,
    commercialPurpose: false,
    commodity: false,
    estimatedAnnualShippingVolume: false,
    how_did_you_hear_about_us: false,
    fob: false, 
  });

  useEffect(() => {
    setErrors({
      shippingType: shippingType === 'Shipping Type' || shippingType === 'Other',
      departurePort: departurePort === 'Origin Port',
      destination: destination === 'Destination Port',
      description: description === '',
      weight: weight === '' || Number(weight) > 10000,
      cbm: cbm === '' || cbm === '0' || Number(cbm) > 12,
      name: name === '',
      email: !emailRegex(email),
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      whatDescribesYou: whatDescribesYou === "What best describes you?",
      commercialPurpose: commercialPurpose === 'Are these goods for commercial purposes?',
      commodity: commodity === 'Commodity',
      estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === 'Estimated Annual Shipping Volume',
      how_did_you_hear_about_us: how_did_you_hear_about_us === "Referral Source",
      fob: fob === "",
    });
  }, [shippingType, departurePort, destination, description, weight, cbm, name, email, dateOfShipping, commercialPurpose, commodity, estimatedAnnualShippingVolume, whatDescribesYou, how_did_you_hear_about_us, fob])

  const onlyNumbers = (e: React.ChangeEvent<HTMLInputElement>, callBack: React.Dispatch<React.SetStateAction<string>>) => {
    if (e.target.value === '') {
      callBack('');
    };
    const re = /^[0-9]+\.?[0-9]{0,2}$/;
    re.test(e.target.value) && callBack(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    setSubmitted(true);

    const errorList = [];
    for (const [key, value] of Object.entries(errors)) {
      value && errorList.push(value);
    };

    if (errorList.length > 0) {
      return;
    };

    setSent(true);
    // const newCbm = (Number(cbm) <= 2.5 && (whatDescribesYou === "First time importer" || whatDescribesYou === "Ive imported a few times before")) ? '2.5' : cbm;



    const formData = new FormData();

    formData.append('form', 'china');
    formData.append('shipping_type', '1');
    formData.append('country', 'China');
    formData.append('dep', departurePorts.indexOf(departurePort).toString());
    formData.append('des', destinations.indexOf(destination).toString());
    formData.append('depTxt', departurePort);
    formData.append('desTxt', destination);
    formData.append('description', description);
    formData.append('weight', weight);
    formData.append('cbm', cbm)
    formData.append('name', name);
    formData.append('company', company === '' ? "" : company);
    formData.append('email', email)
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('shippingDate', dateOfShipping);
    formData.append("whatDescribesYou", whatDescribesYou);
    formData.append('commercialPurpose', commercialPurpose);
    formData.append('commodity', commodity);
    formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);
    formData.append('leadSource', pageSource);
    formData.append('newsletter', '1');
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append('totalFob', fob); 

// debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);

    fetch('https://admin.willship.com.au/wp-json/commercial/v1/submit/', {
      method: 'POST',
      body: formData,
    })
    .then(async (response: Record<string, any>) => {
      if (response.status === 200) {
        setSent(true);
        resetForm();
        showChinaAustraliaQuote(false);
        window.dataLayer?.push({
          event: 'formSubmission',
        });


      // // mapping the value following HubSpot picklist value
      let whatDescribesYou2 = "" + whatDescribesYou;
      if(whatDescribesYou == "First time importer") {
        whatDescribesYou2 = "First time importer / novice";
      } else if(whatDescribesYou == "Ive imported a few times before") {
        whatDescribesYou2 = "Ive imported a few times before / experienced";
      } else if(whatDescribesYou == "Regular Importer") {
        whatDescribesYou2 = "Ive imported a few times before / experienced";
      }

        const { data } = await response.json()
        // HubSpot form data
        const hubspotFormData = {
          fields: [
            { name: 'shipping_type', value: 'LCL' },
            { name: 'origin', value: departurePort || '' },
            { name: 'destination', value: destination || '' },
            { name: 'goods_description_message', value: description || '' },
            { name: 'cargo_weight', value: weight || '' },
            { name: 'total_cbm', value: cbm || '' },
            { name: 'lastname', value: name || '' }, // Use a default empty string if `name` is undefined or null
            { name: 'email', value: email || '' },
            { name: 'company', value: company || '' },
            { name: 'phone', value: phone || '' },
            { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
            { name: "what_describes_you2", value: whatDescribesYou2 },
            { name: "commercial_purpose", value: commercialPurpose },
            { name: "commodity", value: commodity },
            { name: "estimated_annual_shipping_volume", value: estimatedAnnualShippingVolume },
            { name: 'form_source2', value: 'LCL' },
            { name: 'business_channel', value: 'Commercial'},
            { name: 'form_type', value: 'Instant' },
            { name: 'quote_id', value: data.quote_id },
            { name: 'quote_url', value: data.quote_url },
            { name: 'quote_url2', value: data.quote_url },
            { name: 'total_profit', value: data.total_profit || '' },
            { name: 'total_revenue2', value: data.total_sell || '' },
            { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
            { name: 'total_fob', value: fob || '' },
          ],
        };
        
        try {
          await handleHubSpotSubmit(hubspotFormData);
          // console.log(hubspotFormData); // debugging remove during production
        } catch (hubspotError) {
          console.error('Error submitting form to HubSpot:', hubspotError);
        }

        // Navigate to thank you page AFTER HubSpot submission completes
        router.push({
          pathname: '/thank-you-freights',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
  }

  const ErrorMessage = ({ text }: { text: string }) => (
    <p className={modalStyles.errorMessage}>{text}</p>
  );

  return (
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='China To Australia Instant Shipping Calculator' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Complete These Details For An Instant Quote</h3>
            <p className={`!text-base !pt-4 ${modalStyles.formText}`}>
              Willship have built this instant quote calculator tool that will provide instant pricing and comprehensive information for shared container (LCL) shipments up to 12 cubic metres between any major port in China, and any major port here in Australia. Try it out below!
            </p>
            <form
              className={modalStyles.form}
              onSubmit={handleSubmit}
            >
              <div className={modalStyles.sectionWrapper}>
                <div className="mb-4 bg-orange-100 border-l-4 border-orange-500 p-3 rounded-r-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-orange-500 text-base">⚠️</span>
                    </div>
                    <div className="ml-2">
                      <p className="text-sm text-orange-700 leading-tight">
                        <strong>Please note:</strong> Instant Quotes are only valid for commercial shipments. If your shipment is for personal use, this quote will not be applicable. For personal or one-off shipments, we recommend{' '}
                        <Link href="/consultation">
                          <a 
                            className="text-orange-800 underline hover:text-orange-900 font-medium"
                            onClick={handleCloseModal}
                          >
                            booking a quick consultation
                          </a>
                        </Link>{' '}
                        as these types of shipments often involve highly customised planning and specific logistics strategies that our instant quotes cannot calculate.
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className={modalStyles.sectionHeading}>Transit Details</h3>
                <div className={modalStyles.row}>
                  {/* <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      value={shippingType}
                      onChange={e => setShippingType(e.target.value)}
                    >
                      <option value='Shipping Type' disabled={true}>Shipping Type</option>
                      <option value='1'>LCL (shipments up to 10,000KG or up to 12CBM/m3)</option>
                      <option value='Other'>Other</option>
                    </select>
                    {submitted && errors.shippingType
                      ? shippingType === 'Other'
                        ? <p className="text-red font-bold hover:cursor-pointer">Select the correct form to complete below</p>
                        : <ErrorMessage text='Select a Shipping Type' />
                      : null
                    }
                  </div> */}
                  {/* <div className={modalStyles.inputWrapper}>
                    <select 
                      className={`${modalStyles.input}`}>
                      <option value='Country' disabled={true}>Country</option>
                      <option value='China'>China</option>
                    </select>
                  </div> */}
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      onChange={e => setDeparturePort(e.target.value)}
                      value={departurePort}
                    >
                      {departurePorts.map((item, i) => (
                        <option key={i} value={item}>{item}</option>
                      ))}
                    </select>
                    {submitted && errors.departurePort && <ErrorMessage text='Select an Origin Port' />}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    >
                      {destinations.map((item, i) => (
                        <option key={i} value={item}>{item}</option>
                      ))}
                    </select>
                    {submitted && errors.destination && <ErrorMessage text='Select a Destination Port' />}
                  </div>


                </div>
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
                </div>
                {shippingType === 'Other' &&
                  <div className="w-full bg-darkBlue my-1 p-6 rounded-md text-white text-lg leading-tight">
                    <ul className="list-disc pl-6 gap-3 flex flex-col">
                      <li>
                        <p>For Full Container Loads from China to Australia please <span
                          className="font-bold animate-pulse hover:cursor-pointer"
                          onClick={() => showInstantFCLQuote(true)}
                        >CLICK HERE</span></p>
                      </li>
                      <li>
                        <p>For Air Freight from China to Australia please <span
                          className="font-bold animate-pulse hover:cursor-pointer"
                          onClick={() => showChinaAirFreightQuote(true)}
                        >CLICK HERE</span></p>
                      </li>
                    </ul>
                  </div>
                }
              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Goods Details</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder='Goods Description'
                    />
                    {submitted && errors.description && <ErrorMessage text='Please enter a brief description' />}
                  </div>

                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={weight === undefined ? '' : String(weight)}
                      onChange={e => onlyNumbers(e, setWeight)}
                      placeholder='Total Weight (kg)'
                      onFocus={() => setFocused('weight')}
                      onBlur={() => setFocused(null)}
                    />
                    {(submitted && errors.weight && Number(weight) > 10000)
                      ? <ErrorMessage text='The maximum weight is 10,000 kg' />
                      : submitted && errors.weight && <ErrorMessage text='Please enter the Total Weight in kg' />
                    }
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={cbm === undefined ? '' : String(cbm)}
                      onChange={e => onlyNumbers(e, setCbm)}
                      placeholder='Total CBM/m&sup3;'
                      onFocus={() => setFocused('cbm')}
                      onBlur={() => setFocused(null)}
                    />
                    {submitted && errors.cbm && Number(cbm)
                      ? <ErrorMessage text='The maximum amount is 12m&sup3;' />
                      : submitted && errors.cbm && <ErrorMessage text='Please enter the total CBM/m&sup3;' />}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      type='number'
                      className={modalStyles.input}
                      placeholder='Total FOB Value (in AUD)*'
                      value={fob}
                      onChange={e => setFob(e.target.value)}
                      onFocus={() => setFocused('fob')}
                      onBlur={() => setFocused(null)}
                    />
                    {submitted && errors.fob && <p className={modalStyles.errorMessage}>Please enter FOB Value (in AUD)</p>}
                  </div>
                </div>
                {focused &&
                  <div className="w-full bg-darkBlue my-1 p-6 rounded-md text-white text-base leading-tight">
                    {focused === 'weight' &&
                      <p>Maximum of 10,000 KG is allowed</p>
                    }
                    {focused === 'cbm' &&
                      <p>
                        <strong>Maximum of 12 CBM is allowed.</strong>
                        <br />
                        CBM, or cubic meter, is the freight volume of the
                        shipment for domestic and international freight. CBM
                        measurement is calculated by multiplying the width,
                        height and length together of the shipment. If you are
                        unsure, you can check with your supplier or simply have
                        an educated guess and the price can be adjusted once the
                        actual dimensions are known.
                      </p>
                    }
                    {focused === 'fob' &&
                      <p>
                        FOB (Free On Board) value is the total cost of your goods
                        before shipping and import costs. Please enter the value in AUD.
                      </p>
                    }
                  </div>
                }
                <div className={modalStyles.row}>

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
                    <select
                        className={modalStyles.input}
                        onChange={e => setCommercialPurpose(e.target.value)}
                        value={commercialPurpose}
                    >
                        <option value='Are these goods for commercial purposes?'>Are these goods for commercial purposes?</option>
                        <option value='Yes'>Yes, I&apos;m importing goods under an ABN for a business</option>
                        <option value='No'>No - These are for personal use</option>
                      </select>
                    {submitted && errors.commercialPurpose && <p className={modalStyles.errorMessage}>Are these goods for commercial purposes?</p>}
                    {commercialPurpose === 'No' && (
                      <div className="mt-2 p-3 bg-orange-100 border-l-4 border-orange-500 rounded-r-md">
                        <p className="text-sm text-orange-700 font-medium">
                          ⚠️ Our instant quote is not applicable to personal shipments
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Your Details</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder='Your Name'
                    />
                    {submitted && errors.name && <ErrorMessage text='Please enter your name' />}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Your email'
                    />
                    {submitted && errors.email && <ErrorMessage text='Please enter a valid email' />}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={company}
                      placeholder="Company Name (optional)"
                      onChange={e => setCompany(e.target.value)}
                    />
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={phone}
                      placeholder="Phone Number (optional)"
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>

                </div>
                <div className={modalStyles.row}>

                    <div className={modalStyles.inputWrapper}>
                      <select className={modalStyles.input} onChange={(e) => setWhatDescribesYou(e.target.value)} value={whatDescribesYou}>
                        <option value="What best describes you?">What best describes you?</option>
                        <option value="First time importer">First time importer</option>
                        <option value="Ive imported a few times before">I&apos;ve imported a few times before</option>
                        <option value="Regular Importer">Regular Importer</option>
                      </select>
                      {submitted && errors.whatDescribesYou && <p className={modalStyles.errorMessage}>What best describes you?</p>}
                    </div>
                  </div>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                      <select className={modalStyles.input} value={how_did_you_hear_about_us} onChange={(e) => sethow_did_you_hear_about_us(e.target.value)}>
                        <option value="Referral Source" disabled={true}>
                        How did you hear about us?
                        </option>
                        <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                        <option value="Social Media">Social Media (Facebook, Instagram, LinkedIn, Youtube etc.)</option>
                        <option value="Online Ads">Online Ads (Google Ads, etc.)</option>
                        <option value="Company Website">Company Website (Direct search)</option>
                        <option value="Email Marketing or Newsletter">Email Marketing or Newsletter</option>
                        <option value="Word of Mouth">Word of Mouth or Personal Recommendation</option>
                        <option value="Industry Partner or Business Referral">Industry Partner or Business Referral</option>
                      </select>
                      {submitted && errors.how_did_you_hear_about_us ? <ErrorMessage text="Select a Referral Source" /> : null}
                    </div>
                </div>
              </div>
              <div className={modalStyles.submitWrapper}>

                {!sending && !sent
                  ? (
                    <>
                      <div className="flex flex-row gap-2 items-center">
                        <input
                          type='checkbox'
                          checked={signup}
                          onChange={e => setSignup(e.target.checked)}
                        />
                        <p>Sign me up for your awesome newsletter!</p>
                      </div>
                      <button
                        className={modalStyles.buttonStyle}
                        type='submit'
                      >
                        Get Instant Quote
                      </button>
                    </>
                  ) : sending
                    ? <Loader />
                    : <p>Quote generated, you will be redirected in a few seconds</p>
                }
                <p className="text-center">
                  Your information is used solely in conjunction with our <Link href={siteMap.privacy.path}>
                    <a className="text-blue-700 font-bold">Privacy Policy</a>
                  </Link> and is not sold or distributed to any other company.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )



};

export default ChinaAustraliaQuoteModal;