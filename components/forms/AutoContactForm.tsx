import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { shippingDateOptions } from '../../quoteFormData';
import emailRegex from "../../utils/hooks/emailRegex";
import Loader from "../common/Loader";
import "../../utils/hooks/dataLayer";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";

const cargoTypes = [
  'Cargo Type',
  'Car', 
  'Camper Van',
  'RV',
  'Projects & Machinery',
  'Other'
]

const how_did_you_hear_about_usOptions = [
  'How did you hear about us?',
  'Search Engine (Google, Bing, etc.)',
  'Social Media (Facebook, Instagram, LinkedIn, Youtube etc.)',
  'Online Ads (Google Ads, etc.)',
  'Company Website (Direct search)',
  'Email Marketing or Newsletter',
  'Word of Mouth or Personal Recommendation',
  'Industry Partner or Business Referral'
];

const AutoContactForm = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const [shippingFrom, setShippingFrom] = useState ('');
  const [destination, setDestination] = useState ('');
  const [shippingDate, setShippingDate] = useState(shippingDateOptions[0]);
  const [cargoType, setCargoType] = useState (cargoTypes[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [submitted, setSubmitted] = useState (false);
  const [sent, setSent] = useState(false);

  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState(how_did_you_hear_about_usOptions[0]);

  const handleHubSpotSuccess = () => {
    console.log("Form submitted to HubSpot successfully");
  };

  const handleHubSpotError = () => {
    console.error("Error submitting form to HubSpot");
  };

  const { sending, handleSubmit: handleHubSpotSubmit } = useHubSpotFormSubmission(
    "39556297", // Hubspot ID
    "00c0c34b-de33-430e-bb9c-c149c6cb1c50", // Form ID
    handleHubSpotSuccess,
    handleHubSpotError
  );

  const [errors, setErrors] = useState({
    shippingFrom: false,
    destination: false,
    shippingDate: false,
    cargoType: false,
    name: false,
    email: false,
    phone: false,
    how_did_you_hear_about_us: false
  });

  useEffect(() => {
    setErrors({
      shippingFrom: shippingFrom === '',
      destination: destination === '',
      shippingDate: shippingDate === shippingDateOptions[0],
      cargoType: cargoType === cargoTypes[0],
      name: name === '',
      email: !emailRegex(email),
      phone: phone === '',
      how_did_you_hear_about_us: how_did_you_hear_about_us === how_did_you_hear_about_usOptions[0]
    });
  }, [shippingFrom, destination, shippingDate, cargoType, name, email, phone, how_did_you_hear_about_us]);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorList = [];
    for (const [key, value] of Object.entries(errors)) {
      value === true && errorList.push(value);
    };

    if (errorList.length > 0) {
      return;
    };
    
    const formData = new FormData();
    formData.append('from_which_port', shippingFrom);
    formData.append('to_which_port', destination);
    formData.append('shipping_date', shippingDate);
    formData.append('cargo_type', cargoType);
    formData.append('user_name', name);
    formData.append('user_email', email);
    formData.append('phone', phone);
    formData.append('additional_info', additionalInfo);
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append("_wpcf7_unit_tag", "wpcf7-f23625-p26388-o2as");
    
    setSent(true);

// debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);

    
    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/23625/feedback', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      if (response.status === 200) {
        setSent(true);
        window.dataLayer?.push({
          event: 'formSubmission',
        });
        router.push({
          pathname: '/cta-thank-you',
          query: { type: 'default' },
        });
        
        // HubSpot form data
        const hubspotFormData = {
          fields: [
            { name: 'origin', value: shippingFrom || '' },
            { name: 'destination', value: destination || '' },
            { name: 'shipping_date', value: shippingDate === 'As Soon As Possible' ? "Now" : shippingDate },
            { name: 'cargo_type___form', value: cargoType || '' },
            { name: 'lastname', value: name || '' }, // Use a default empty string if `name` is undefined or null
            { name: 'email', value: email || '' },
            { name: 'phone', value: phone || '' },
            { name: 'goods_description_message', value: additionalInfo || '' },
            { name: 'form_source2', value: 'Automotive Contact Form' || '' },
            { name: 'business_channel', value: 'Automotive' || '' },
            { name: 'form_type', value: 'Manual' || '' },
            { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
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

  const RenderLabel = ({label} : {label: string}) => (
    <label className="text-grey text-base">{label}</label>
  );

  const errorClass = 'bg-red/10';

  return (
    <div className="w-full flex flex-col items-center">
      <form 
        className="bg-white border-2 flex flex-col gap-4 border-grey p-4 w-full text-black text-base"
        onSubmit={handleSubmit}
      >
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Shipping From*' />
          <input
            className={`w-full outline-0 ${errors.shippingFrom && submitted && errorClass}`}
            value={shippingFrom}
            onChange={e => setShippingFrom(e.target.value)}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Shipping Destination*' />
          <input
            className={`w-full outline-0 ${errors.destination && submitted && errorClass}`}
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Shipping Date*' />
          <select 
            value={shippingDate}
            onChange={e => setShippingDate(e.target.value)}
            className={`w-full outline-0 ${errors.shippingDate && submitted && errorClass}`}
          >
            {shippingDateOptions.map((item, i) => (
              <option key={i} disabled={i === 0} value={item === 'As Soon As Possible' ? 'Now' : item}>{item}</option>
            ))}
          </select>
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Cargo Type*' />
          <select
            value={cargoType}
            className={`w-full outline-0 ${errors.cargoType && submitted && errorClass}`}
            onChange={e => setCargoType(e.target.value)}
          >
            {cargoTypes.map((item, i) => (
              <option key={i} disabled={i === 0} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Name*' />
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className={`w-full outline-0 ${errors.name && submitted && errorClass}`}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Email*' />
          <input
            placeholder='Email*'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`w-full outline-0 ${errors.email && submitted && errorClass}`}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Phone*' />
          <input
            placeholder="Please include country code. eg +91xxxxxxxxx"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className={`w-full outline-0 ${errors.phone && submitted && errorClass}`}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Add Additional Information' />
          <textarea
            rows={3}
            className={`w-full outline-0`}
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
          />
        </div>
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='How did you hear about us?*' />
          <select
            className={`w-full outline-0 ${errors.how_did_you_hear_about_us && submitted && errorClass}`}
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
        </div>
        {!sending && !sent
          ? (
            <button 
              type='submit'
              className="text-white font-medium bg-red py-3 hover:shadow-lg"
            >
              Submit
            </button>
          ) : sending
            ? <Loader />
            : <p>Please wait while you are redirected</p>
        }
      </form>
    </div>
  );
};

export default AutoContactForm;