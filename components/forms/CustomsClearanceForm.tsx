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
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { shippingDateOptions } from "../../quoteFormData";

// New Instant FCL Quotes

const CustomsClearanceForm = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);
  const [cbm, setCbm] = useState('');

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [airOrSea, setAirOrSea] = useState("Air Or Sea Freight");
  // const [quoteConsultation, setQuoteConsultation] = useState<null | 'Quote' | 'Consultation'>(null);
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState('What best describes you?');
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [statusShipment, setStatusShipment] = useState('Status of Shipment'); //new field
  const [shippingService, setShippingService] = useState('Shipping Service'); //new field

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState('');
  const [commercialPurpose, setCommercialPurpose] = useState('Are these goods for commercial purposes?');
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState('Estimated Annual Shipping Volume');

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
    origin: false,
    destination: false,
    description: false,
    // airOrSea: false, //removed 5/15/25
    cbm: false,
    name: false,
    email: false,
    // quoteConsultation: false, //removed 2/3/25
    whatDescribesYou: false,
    //dateOfShipping: false,
    how_did_you_hear_about_us: false,
    commercialPurpose: false,
    //estimatedAnnualShippingVolume: false,
    shippingService: false, //new field
    statusShipment: false, //new field
  });

  const onlyNumbers = (e: React.ChangeEvent<HTMLInputElement>, callBack: React.Dispatch<React.SetStateAction<string>>) => {
    if (e.target.value === '') {
      callBack('');
    };
    const re = /^[0-9]+\.?[0-9]{0,2}$/;
    re.test(e.target.value) && callBack(e.target.value);
  };

  const { closeAllModals } = useContext(ModalContext);

  const ref = useRef(null);
  const handleCloseModal = () => {
    closeAllModals();
  };
  useOnClickOutside(ref, handleCloseModal);


  useEffect(() => {
    setErrors({
      origin: origin === '',
      destination: destination === '',
      description: description === '',
      cbm: (shippingService === 'Air Freight' || shippingService === 'LCL') ? (cbm === '' || Number(cbm) > 12) : false,
      // quoteConsultation: quoteConsultation === null, //removed 2/3/25
      // airOrSea: airOrSea === "Air Or Sea Freight", //removed 5/15/25
      name: name === '',
      email: !emailRegex(email), 
      whatDescribesYou: whatDescribesYou === 'What best describes you?',
      //dateOfShipping: dateOfShipping === 'Date Of Shipping',

      how_did_you_hear_about_us: how_did_you_hear_about_us === '',
      commercialPurpose: commercialPurpose === 'Are these goods for commercial purposes?',
      //estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === 'Estimated Annual Shipping Volume',
      // Only validate shipping service if status is "goods on the way"
      shippingService: statusShipment === 'My goods have already been shipped and are on their way' ? shippingService === 'Shipping Service' : false,
      statusShipment: statusShipment === 'Status of Shipment',
      
    })
  }, [origin, destination, description, name, email, cbm, whatDescribesYou, dateOfShipping, how_did_you_hear_about_us, commercialPurpose, estimatedAnnualShippingVolume, shippingService, statusShipment]); //quoteConsultation removed 2/3/25

  useEffect(() => {
    const savedStatusShipment = localStorage.getItem('selectedStatusShipment');
    if (savedStatusShipment) {
      setStatusShipment(savedStatusShipment);
    }
  }, []);

  const resetForm = () => {
    setOrigin('');
    setDestination('');
    setDescription('');
    setName('');
    setEmail('');
    setCbm('');
    // setQuoteConsultation(null); //removed 2/3/25
    setPhone('');
    setSubmitted(false);
    setWhatDescribesYou('What best describes you?');
    // setAirOrSea("Air Or Sea Freight");
    setDateOfShipping('Date Of Shipping');
    sethow_did_you_hear_about_us('');
    setCommercialPurpose('Are these goods for commercial purposes?');
    setEstimatedAnnualShippingVolume('Estimated Annual Shipping Volume');
    setShippingService('Shipping Service');
    setStatusShipment('Status of Shipment');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorsList = [];
    for (const [key, value] of Object.entries(errors)) {
      value && errorsList.push(value);
    };

    if (errorsList.length > 0) {
      return;
    };

    setSent(true);

    const formData = new FormData();

    formData.append('fullname', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('whatDescribesYou', whatDescribesYou);

    formData.append('origin', origin);
    formData.append('destination', destination);
    formData.append('description', description);
    formData.append('cbm', cbm);
    // formData.append('airOrSea', airOrSea as string);
    //formData.append('shippingDate', dateOfShipping);

    // formData.append('quoteConsultation', quoteConsultation as string); //removed 2/3/25

    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append('commercialPurpose', commercialPurpose);
    //formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);
    formData.append('shippingService', shippingService); //new field
    formData.append('statusShipment', statusShipment); //new field
    
    formData.append("_wpcf7_unit_tag", "wpcf7-f26404-p26405-o2"); //admin
    // formData.append("_wpcf7_unit_tag", "wpcf7-95c79b7"); //dev2023




// debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26404/feedback', { //admin
    //  fetch('https://dev2023.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26255/feedback', { //dev2023

      method: 'POST',
      body: formData
    })
      .then(async (response) => {
        if (response.status === 200) {
          setSent(true);
          resetForm();
          closeAllModals();
          window.dataLayer?.push({
            event: 'formSubmission',
          });
          router.push({
            pathname: '/thank-you-customsclearance',
          });



          formData.append('form', 'customClearance')
          fetch('https://admin.willship.com.au/wp-json/commercial/v1/submit/', { // send email function
            method: 'POST',
            body: formData
          })

          // mapping the value following HubSpot picklist value
          let whatDescribesYou2 = "" + whatDescribesYou;
          if(whatDescribesYou == "novice") {
             whatDescribesYou2 = "First time importer / novice";
            } else if(whatDescribesYou == "experienced") {
              whatDescribesYou2 = "Ive imported a few times before / experienced";
           }

          // HubSpot form data
          const hubspotFormData = {
            fields: [
              { name: 'lastname', value: name || '' },
              { name: 'email', value: email || '' },
              { name: 'phone', value: phone || '' },
              { name: 'what_describes_you2', value: whatDescribesYou2 || '' },
              { name: 'total_cbm', value: cbm || '' },
              // { name: 'air_or_sea_freight', value: airOrSea as string || '' },
              // { name: 'looking_for', value: quoteConsultation as string || '' },
              { name: 'origin', value: origin || '' },
              { name: 'destination', value: destination || '' },
              //{ name: 'goods_description_message', value: description || '' },
              { name: 'current_status_of_shipment_cif_cfr', value: statusShipment || '' }, //new field
              { name: 'shipping_service', value: shippingService || '' }, // new field
              //{ name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
              { name: 'form_source2', value: 'Customs Clearance Quote' },
              { name: 'business_channel', value: 'Commercial' },
              { name: 'form_type', value: 'Manual' },

              { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
              { name: 'commercial_purpose', value: commercialPurpose || '' },
              //{ name: 'estimated_annual_shipping_volume', value: estimatedAnnualShippingVolume || '' },

            ],
          };

          try {
            await handleHubSpotSubmit(hubspotFormData);
          } catch (hubspotError) {
            console.error('Error submitting form to HubSpot:', hubspotError);
          }
        } else {
          throw new Error('Failed to submit form'); 
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  }

  return (
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='Customs Clearance Quote' />
          <div className={modalStyles.formWrapper}>
            {/* <h3 className={modalStyles.formHeading}>Please Complete The Form Below And We{'\''}ll Get Back To You</h3> */}
            <h3 className={`${modalStyles.formHeading} text-wrap w-[85%] mx-auto`}>Awesome! Please complete the form below and we{'\''}ll email you an information pack detailing everything you need to know about the clearance process and next steps.</h3>
            <p className="text-xl font-medium m-auto text-center pt-6 max-w-4xl text-red">Note: If the goods have already arrived or if they are due in the next 24 hours then it{'\''}s best if you give us a call asap on <u>07 3267 0575</u> so we can get working on this immediately for you.</p>
            <form
              className={modalStyles.form}
              onSubmit={handleSubmit}
            >
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
                    {submitted && errors.name && <p className={modalStyles.errorMessage}>Enter your name</p>}
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
                      placeholder='Contact Number (optional)'
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
                        <option value='novice'>First Time / Novice Shipper – Please provide me with lots of info and educational content so I can get my head around everything!</option>
                        <option value='experienced'>Experienced Shipper – I understand how everything works, I&apos;m just chasing rates.</option>
                      </select>
                      {submitted && errors.whatDescribesYou && <p className={modalStyles.errorMessage}>What best describes you?</p>}
                    </div>  
                  {/* <div className={modalStyles.inputWrapper}>
                    <div className={modalStyles.radioWrapper}>
                      <p>I&apos;m looking for:</p>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={quoteConsultation === 'Quote'}
                          onClick={() => setQuoteConsultation('Quote')}
                        />
                        <p>Quote</p>
                      </div>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={quoteConsultation === 'Consultation'}
                          onClick={() => setQuoteConsultation('Consultation')}
                        />
                        <p>Consultation</p>
                      </div>
                    </div>
                    {submitted && errors.quoteConsultation && <p className={modalStyles.errorMessage}>Select quote or consultation</p>}
                  </div> */}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <div className={modalStyles.row}> 


                  </div>
                </div>

              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Shipping Details</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Goods origin'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                    />
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Enter goods origin</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Goods destination'
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    />
                    {submitted && errors.destination && <p className={modalStyles.errorMessage}>Enter good destination</p>}
                  </div>

                </div>
                <div className={modalStyles.row}>
                  
                  {/* <div className={modalStyles.inputWrapper}>
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
                    {submitted && errors.estimatedAnnualShippingVolume && <p className={modalStyles.errorMessage}>Select an Estimated Annual Shipping Volume</p>}
                  </div> */}
                  
                  
                  
                  {/* <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      value={dateOfShipping}
                      onChange={e => setDateOfShipping(e.target.value)}
                    >
                      {shippingDateOptions.map((option : string, i) => (
                        <option key={i} value={option} >{option}</option>
                      ))}
                    </select>
                    {submitted && errors.dateOfShipping && <p className={modalStyles.errorMessage}>Select a shipping Date</p>}
                  </div> */}
                </div>
              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Goods Details</h3>
                <div className={modalStyles.row}>
                  <div className={`${modalStyles.inputWrapper} flex flex-row gap-4`}>
                        <div className="w-full flex flex-col py-1">
                        <select
                          className={modalStyles.input}
                          onChange={e => setShippingService(e.target.value)}
                          value={shippingService}
                        >
                          <option value='Shipping Service'>How have the goods been shipped?</option>
                          <option value='Air Freight'>Air Freight</option>
                          <option value='LCL'>LCL (less than a container load) - This would normally apply if the shipment is under 12m3 in total volume</option>
                          <option value="FCL">FCL - 20ft or 40ft container </option>
                        </select>
                        {submitted && errors.shippingService && <p className={modalStyles.errorMessage}>Select a Shipping Service</p>}
                      </div>
                    </div>
                    <div className={`${modalStyles.inputWrapper} flex flex-row gap-4`}>

                      <div className="w-full flex flex-col py-1">
                        <select
                              className={modalStyles.input}
                              onChange={e => setCommercialPurpose(e.target.value)}
                              value={commercialPurpose}
                          >
                              <option value='Are these goods for commercial purposes?'>Are these goods for commercial purposes?</option>
                              <option value="Yes, I'm importing goods under an ABN for a business">Yes, I&apos;m importing goods under an ABN for a business</option>
                              <option value='No - These are for personal use'>No - These are for personal use</option>
                          </select>
                          {submitted && errors.commercialPurpose && <p className={modalStyles.errorMessage}>Select commercial purpose</p>}
                      </div>
                    </div>
                </div>
                
                <div className={modalStyles.row}>
                {/* <div className={modalStyles.inputWrapper}>
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
                  </div> */}
                  <div className={modalStyles.inputWrapper}>
                      <select
                          className={modalStyles.input}
                          onChange={e => setStatusShipment(e.target.value)}
                          value={statusShipment}
                      >
                        <option value='Current Status of Shipment'>Current Status of Shipment</option>
                        <option value='My goods have already been shipped and are on their way'>My goods have already been shipped and are on their way</option>
                        <option value='My goods have already arrived'>My goods have already arrived</option>
                        <option value='My goods have not been shipped yet'>My goods have not been shipped yet</option>
                        <option value="I'm just doing research/feasibility at the moment">I&apos;m just doing research/feasibility at the moment</option>

                      </select>
                      {submitted && errors.statusShipment && <p className={modalStyles.errorMessage}>Set a Current Status of Shipment</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                      <select
                        className={modalStyles.input}
                        value={how_did_you_hear_about_us}
                        onChange={e => sethow_did_you_hear_about_us(e.target.value)}
                      >
                        <option value='How did you hear about us?'>How did you hear about us?</option>
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


                </div>
                  
                  <div className={modalStyles.row}>
                      
                  {(shippingService === 'Air Freight' || shippingService === 'LCL') && (

                        <div className="w-full flex flex-col">
                          <div className="flex flex-row items-center ">
                            <input
                              className={`${modalStyles.input} text-left`}
                              value={cbm === undefined ? '' : String(cbm) }
                              onChange={e => onlyNumbers(e, setCbm)}
                              placeholder='Total CBM/m&sup3;'
                            />
                            <p className="flex flex-row border-b border-black text-sm text-nowrap w-[100px] py-2.5"> CBM/m³</p>
                          </div>
                          {submitted && errors.cbm && Number(cbm)
                            ? <p className={modalStyles.errorMessage}>The maximum amount is 12m&sup3;</p>
                            : submitted && errors.cbm && <p className={modalStyles.errorMessage}>Please enter the total CBM/m&sup3;</p>}
                        </div>
                    )}
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Please tell us all you can about your shipment'
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    {submitted && errors.description && <p className={modalStyles.errorMessage}>Enter a brief description</p>}
                  </div>
                      </div>

                <div className={modalStyles.row}>

                </div>
              </div> 
              

              <div className={modalStyles.submitWrapper}>
                <div className={modalStyles.newsLetterPrivacyWrapper}>
                  <p>
                    Your information is used solely in conjunction with our <Link href={siteMap.privacy.path}>
                      <a className="text-blue-700">Privacy Policy</a>
                    </Link> and is not sold or distributed to any other company.
                  </p>
                </div>
                {
                  !sending && !sent
                    ? (
                      <button
                        className={modalStyles.buttonStyle}
                        type='submit'
                      >
                        Request A Quote
                      </button>
                    ) : (
                      sending
                        ? <Loader />
                        : <p>Your request has been submitted. Please wait while you are redirected</p>
                    )
                }
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )


};

export default CustomsClearanceForm;