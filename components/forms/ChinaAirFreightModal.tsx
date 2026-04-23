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

const commercialPurposeOptions = [
  'Are these goods for commercial purposes?',
  'Yes, I’m importing goods under an ABN for a business',
  'No - These are for personal use'
];
const estimatedAnnualShippingVolumeOptions = [
  'Estimated Annual Shipping Volume',
  'Just a one off',
  '2-6 times per year',
  '6-12 times per year',
  '12+ times per year'
];

const ChinaAirFreightModal = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [cbm, setCbm] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState('What best describes you?');
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [newsletter, setNewsletter] = useState(false);
  const [leadSource, setLeadSource] = useState(pageSource);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState('How did you hear about us?');
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState(estimatedAnnualShippingVolumeOptions[0]);
  const [commercialPurpose, setCommercialPurpose] = useState(commercialPurposeOptions[0]);

  const [errors, setErrors] = useState({
    origin: false,
    destination: false,
    whatDescribesYou: false,
    description: false,
    weight: false,
    cbm: false,
    name: false,
    email: false,
    dateOfShipping: false,
    how_did_you_hear_about_us: false,
    estimatedAnnualShippingVolume: false,
    commercialPurpose: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const { closeAllModals } = useContext(ModalContext);
  const ref = useRef(null);
  const handleCloseModal = () => {
    closeAllModals();
  };
  useOnClickOutside(ref, handleCloseModal);

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
      origin: origin === '',
      destination: destination === '',
      whatDescribesYou: whatDescribesYou === 'What best describes you?',
      description: description === '',
      weight: weight === '',
      cbm: cbm === '',
      name: name === '',
      email: !emailRegex(email),
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      how_did_you_hear_about_us: how_did_you_hear_about_us === 'How did you hear about us?',
      estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === estimatedAnnualShippingVolumeOptions[0],
      commercialPurpose: commercialPurpose === commercialPurposeOptions[0],
    })
  }, [origin, destination, whatDescribesYou, dateOfShipping, description, weight, cbm, name, email, leadSource, how_did_you_hear_about_us, estimatedAnnualShippingVolume, commercialPurpose]);

  const resetForm = () => {
    setOrigin('');
    setDestination('');
    setDescription('');
    setWeight('');
    setCbm('');
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setWhatDescribesYou('What best describes you?');
    setDateOfShipping('Date Of Shipping');
    setNewsletter(false);
    sethow_did_you_hear_about_us('How did you hear about us?');
    setEstimatedAnnualShippingVolume(estimatedAnnualShippingVolumeOptions[0]);
    setCommercialPurpose(commercialPurposeOptions[0]);
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

    const builtMessage = `Please provide Air Freight pricing. ${company !== '' ? `Company name provided: ${company}` : 'No company name provided.'}`;

    const formData = new FormData();
    formData.append('form', 'home');
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('whatDescribesYou', whatDescribesYou);
    formData.append('shippingDate', dateOfShipping);
    formData.append('goodsOrigin', origin);
    formData.append('goodsDestination', destination);
    formData.append('airSeaFreight', 'Air Freight');
    formData.append('GoodsDescription', description);
    formData.append('cargoWeight', weight);
    formData.append('lengthWidthHeight', `CBM: ${cbm}`);
    formData.append('message', builtMessage);
    formData.append('leadSource', pageSource);
    formData.append("_wpcf7_unit_tag", `wpcf7-f26056-p26388-o2as`);
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);
    formData.append('commercialPurpose', commercialPurpose);

  // debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);
    
    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26056/feedback', {
      method: 'POST',
      body: formData,
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
          pathname: '/cta-request-thank-you',
          query: { thankYou: true },
        });

        // mapping the value following HubSpot picklist value
        let whatDescribesYou2 = "" + whatDescribesYou;
        if(whatDescribesYou == "First time importer") {
          whatDescribesYou2 = "First time importer / novice";
        } else if(whatDescribesYou == "Ive imported a few times before") {
          whatDescribesYou2 = "Ive imported a few times before / experienced";
        } else if(whatDescribesYou == "Regular Importer") {
          whatDescribesYou2 = "Ive imported a few times before / experienced";
        }

        // HubSpot form data
        const hubspotFormData = {
          fields: [
            { name: 'origin', value: origin || '' },
            { name: 'destination', value: destination || '' },
            { name: 'goods_description_message', value: description || '' },
            { name: 'cargo_weight', value: weight || '' },
            { name: 'total_cbm', value: cbm || '' },
            { name: 'lastname', value: name || '' },
            { name: 'company', value: company || ' ' },
            { name: 'email', value: email || '' },
            { name: 'phone', value: phone || '' },
            { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
            { name: 'what_describes_you2', value: whatDescribesYou2 || '' },
            { name: 'form_source2', value: 'Air Freight Quote Request' || '' },
            { name: 'business_channel', value: 'Commercial' || '' },
            { name: 'form_type', value: 'Manual' || '' },
            { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
            { name: 'estimated_annual_shipping_volume', value: estimatedAnnualShippingVolume || '' },
            { name: 'commercialPurpose', value: commercialPurpose || '' },
          ],
        };

          // Assuming `handleHubSpotSubmit` is a function similar to what you provided
          try {
            await handleHubSpotSubmit(hubspotFormData);
          } catch (hubspotError) {
            console.error('Error submitting form to HubSpot:', hubspotError);
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSent(false);
      });
  }

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]*$/;
    re.test(e.target.value) && setWeight(e.target.value);
  }


  return (

    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='China To Australia Air Freight Quote Request' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Complete These Details To Request A Quote</h3>
           <div className='bg-darkBlue text-white rounded p-4 my-4 text-center w-3/4 m-auto'>
            <p><b>IMPORTANT:</b><br/>If you&apos;re looking to import goods less than around 50-75kg then Willship will not be the best option. Companies like DHL / Fed Ex / UPS etc specialise in international door to door package deliveries and they will be more competitive than us on pricing. It becomes more economical to engage a freight forwarder like Willship once the weight exceeds around 75kg. If this is the case, please complete the form below and we look forward to speaking with you.</p>
           </div>
            <form
              className={modalStyles.form}
              onSubmit={handleSubmit}
            >
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Transit Details</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='What is the origin port in China?'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                    />
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Please enter an origin</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='What is the Destination in Australia?'
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    />
                    {submitted && errors.destination && <p className={modalStyles.errorMessage}>Please enter the destination</p>}
                  </div>
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
                </div>
              </div>
              <div className={modalStyles.sectionWrapper}>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Goods Description'
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    {submitted && errors.description && <p className={modalStyles.errorMessage}>Please enter a description</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Total Weight (kg)'
                      value={weight}
                      onChange={handleWeightChange}
                    />
                    {submitted && errors.weight && <p className={modalStyles.errorMessage}>Please enter the weight in kg</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Total CBM/m&sup3;'
                      value={cbm}
                      onChange={e => setCbm(e.target.value)}
                    />
                    {submitted && errors.cbm && <p className={modalStyles.errorMessage}>Please enter a CBM</p>}
                  </div>
                </div>
                <div className={modalStyles.row}>
                  <select
                    className={modalStyles.input}
                    value={estimatedAnnualShippingVolume}
                    onChange={e => setEstimatedAnnualShippingVolume(e.target.value)}
                  >
                    {estimatedAnnualShippingVolumeOptions.map((item, i) => (
                      <option key={i} value={item} disabled={i === 0}>{item}</option>
                    ))}
                  </select>
                  <select
                    className={modalStyles.input}
                    value={commercialPurpose}
                    onChange={e => setCommercialPurpose(e.target.value)}
                  >
                    {commercialPurposeOptions.map((item, i) => (
                      <option key={i} value={item} disabled={i === 0}>{item}</option>
                    ))}
                  </select>

                </div>
              </div>
              <div className={modalStyles.sectionWrapper}>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Your Name'
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    {submitted && errors.name && <p className={modalStyles.errorMessage}>Please enter your name</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Your Company (optional)'
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                    />
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Your Email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {submitted && errors.email && <p className={modalStyles.errorMessage}>Please enter a valid email</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Contact Number (optional)'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className={modalStyles.row}>
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
                <div className={modalStyles.row}>
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
              </div>
              <div className={modalStyles.submitWrapper}>

                {!sending && !sent
                  ? (
                    <>
                      <div className="flex flex-row gap-2 items-center">
                        <input
                          type='checkbox'
                          checked={newsletter}
                          onChange={e => setNewsletter(e.target.checked)}
                        />
                        <p>Sign me up for your awesome newsletter!</p>
                      </div>
                      <button
                        className={modalStyles.buttonStyle}
                        type='submit'
                      >
                        Request a Quote
                      </button>
                    </>
                  ) : sending
                    ? <Loader />
                    : <p>Sending enquiry, you will be redirected in a few seconds</p>
                }
                <p>
                  Your information is used solely in conjunction with our <Link href={siteMap.privacy.path}>
                    <a className="text-blue-700">Privacy Policy</a>
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

export default ChinaAirFreightModal;