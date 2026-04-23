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

// New Instant FCL Quotes

const InstantFCLQuote = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const [origin, setOrigin] = useState('What is the origin port in China?');
  const [destination, setDestination] = useState('What is the destination port in Australia?');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [cbm, setCbm] = useState('');
  const [fob, setFob] = useState('');
  const [containerType, setContainerType] = useState<null | '40ft' | '20ft'>(null);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState('What best describes you?');
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [commercialPurpose, setCommercialPurpose] = useState ('Are these goods for commercial purposes?');
  const [commodity, setCommodity] = useState ("Commodity");
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState ('Estimated Annual Shipping Volume');
  const [newsletter, setNewsletter] = useState(true);
  const [focused, setFocused] = useState<null | 'fob' | 'cbm'>(null)

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState('How did you hear about us?');

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
    weight: false,
    fob: false,
    containerType: false,
    name: false,
    email: false,
    whatDescribesYou: false,
    dateOfShipping: false,
    commercialPurpose: false,
    commodity: false,
    estimatedAnnualShippingVolume: false,
    how_did_you_hear_about_us: false,
  });


  const { closeAllModals, showCommercialQuote } = useContext(ModalContext);

  const ref = useRef(null);
  const handleCloseModal = () => {
    closeAllModals();
  };

  const CommercialQuote = () => {
    closeAllModals();
    showCommercialQuote(true);
  }
  useOnClickOutside(ref, handleCloseModal);

  useEffect(() => {
    setErrors({
      origin: origin === 'What is the origin port in China?',
      destination: destination === 'What is the destination port in Australia?',
      description: description === '',
      weight: weight === '',
      fob: fob === '',
      containerType: containerType === null,
      name: name === '',
      email: !emailRegex(email),
      whatDescribesYou: whatDescribesYou === 'What best describes you?',
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      commercialPurpose: commercialPurpose === 'Are these goods for commercial purposes?',
      commodity: commodity === 'Commodity',
      estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === 'Estimated Annual Shipping Volume',
      how_did_you_hear_about_us: how_did_you_hear_about_us === 'How did you hear about us?',
    })
  }, [origin, destination, description, weight, fob, containerType, name, email, whatDescribesYou, dateOfShipping, commercialPurpose, commodity, estimatedAnnualShippingVolume, how_did_you_hear_about_us]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]*$/;
    re.test(e.target.value) && setWeight(e.target.value);
  };

  const resetForm = () => {
    setOrigin('What is the origin port in China?');
    setDestination('What is the destination port in Australia?');
    setDescription('');
    setWeight('');
    setCbm('');
    setFob('');
    setContainerType(null);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setNewsletter(true);
    setWhatDescribesYou('What best describes you?');
    setDateOfShipping('Date Of Shipping');
    setCommercialPurpose("Are these goods for commercial purposes?");
    setCommodity("Commodity");
    setEstimatedAnnualShippingVolume("Estimated Annual Shipping Volume");
    sethow_did_you_hear_about_us("How did you hear about us?");
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

    const builtMessage = `Please provide pricing for a ${containerType} container. ${company !== '' ? `Company name provided: ${company}` : 'No company name provided.'}`;

    const formData = new FormData();
    formData.append('form', 'home');
    formData.append('shipping_type', '2');
    formData.append('country', 'China');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company === '' ? "" : company);
    formData.append('whatDescribesYou', whatDescribesYou);
    formData.append('depTxt', origin as string);
    formData.append('desTxt', destination as string);
    formData.append('airSeaFreight', 'Sea Freight');
    formData.append('description', description);
    formData.append('weight', weight);
    formData.append('cbm', cbm);
    formData.append('totalFob', fob);
    formData.append('containerType', containerType as string);
    formData.append('message', builtMessage);
    formData.append('shippingDate', dateOfShipping);
    formData.append('commercialPurpose', commercialPurpose);
    formData.append('commodity', commodity);
    formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);
    formData.append('leadSource', pageSource);
    formData.append('newsletter', '1');
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
// debugging
  // const formDataObject = {};
  // formData.forEach((value, key) => {
  //   formDataObject[key] = value;
  // });
  // console.log(formDataObject);

    fetch('https://admin.willship.com.au/wp-json/commercial/v1/submit/', {
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

          // mapping the value following HubSpot picklist value
          let whatDescribesYou2 = "" + whatDescribesYou;
          if(whatDescribesYou == "novice") {
            whatDescribesYou2 = "First time importer / novice";
          } else if(whatDescribesYou == "experienced") {
            whatDescribesYou2 = "Ive imported a few times before / experienced";
          }

          const { data } = await response.json()
          // HubSpot form data
          const hubspotFormData = {
            fields: [
              { name: 'origin', value: origin || '' },
              { name: 'destination', value: destination || '' },
              { name: 'goods_description_message', value: description || '' },
              { name: 'cargo_weight', value: weight || '' },
              { name: 'pricing_for', value: containerType || '' },
              { name: 'total_cbm', value: cbm || '' },
              { name: 'total_fob', value: fob || '' },
              { name: 'lastname', value: name || '' }, // Use a default empty string if `name` is undefined or null
              { name: 'company', value: company || '' },
              { name: 'email', value: email || '' },
              { name: 'phone', value: phone || '' },
              { name: 'what_describes_you2', value: whatDescribesYou2 || '' },
              { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
              { name: "commercial_purpose", value: commercialPurpose },
              { name: "commodity", value: commodity },
              { name: "estimated_annual_shipping_volume", value: estimatedAnnualShippingVolume || '' },
              { name: 'form_source2', value: 'FCL' },
              { name: 'business_channel', value: 'Commercial' },
              { name: 'form_type', value: 'Instant' },
              { name: 'quote_id', value: data.quote_id },
              { name: 'quote_url', value: data.quote_url },
              { name: 'quote_url2', value: data.quote_url },
              { name: 'total_profit', value: data.total_profit || '' },
              { name: 'total_revenue2', value: data.total_sell || '' },
              { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
            ],
          };

          try {
            await handleHubSpotSubmit(hubspotFormData);
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

  return (
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='China To Australia Instant FCL Quote' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Complete These Details For An Instant Quote</h3>
            <form
              className={`${modalStyles.form} !gap-4`}
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
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      onChange={e => setOrigin(e.target.value)}
                      value={origin}
                    >
                      <option value='What is the origin port in China?'>What is the origin port in China?</option>
                      <option value='Shenzhen'>Shenzhen</option>
                      <option value='Hong Kong'>Hong Kong</option>
                      <option value='Guangzhou'>Guangzhou</option>
                      <option value='Xiamen'>Xiamen</option>
                      <option value='Ningbo'>Ningbo</option>
                      <option value='Shanghai'>Shanghai</option>
                      <option value='Qingdao'>Qingdao</option>
                      <option value='Xingang (Tianjin)'>Xingang (Tianjin)</option>
                      <option value='Dalian'>Dalian</option>
                    </select>
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Please input origin port</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      onChange={e => setDestination(e.target.value)}
                      value={destination}
                    >
                      <option value='What is the destination port in Australia?'>What is the destination port in Australia?</option>
                      <option value='Brisbane'>Brisbane</option>
                      <option value='Sydney'>Sydney</option>
                      <option value='Melbourne'>Melbourne</option>
                      <option value='Adelaide'>Adelaide</option>
                      <option value='Fremantle'>Fremantle</option>
                    </select>
                    {submitted && errors.destination && <p className={modalStyles.errorMessage}>Please input a destination port</p>}
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
              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Cargo Details</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                      <input
                        className={modalStyles.input}
                        placeholder='Goods Description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                      />
                      {submitted && errors.description && <p className={modalStyles.errorMessage}>Enter a brief description</p>}
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
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Total Weight (kg)'
                      value={weight}
                      onChange={handleWeightChange}
                    />
                    {submitted && errors.weight && <p className={modalStyles.errorMessage}>Enter a weight in kg</p>}
                  </div>
                  {/* <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Total CBM/m&sup3; (if known)'
                      value={cbm}
                      onChange={e => setCbm(e.target.value)}
                      onFocus={() => setFocused('cbm')}
                      onBlur={() => setFocused(null)}
                    />
                  </div> */}
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
                  <div className={modalStyles.inputWrapper}>
                    <div className={modalStyles.radioWrapper}>
                      <p>I&apos;d like pricing for:</p>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={containerType === '40ft'}
                          onClick={() => setContainerType('40ft')}
                        />
                        <p>40ft</p>
                      </div>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={containerType === '20ft'}
                          onClick={() => setContainerType('20ft')}
                        />
                        <p>20ft</p>
                      </div>
                    </div>
                    {submitted && errors.containerType && <p className={modalStyles.errorMessage}>Select a container type</p>}
                  </div>
                </div>
                {focused &&
                  <div className="w-full bg-darkBlue my-1 p-6 rounded-md text-white text-base leading-tight">
                    {focused === 'fob' &&
                      <p>
                        The FOB Value (free on board value) is the purchase price of the shipment from the Chinese supplier
                        plus any Chinese local charges to get it to the port – this is the amount that is used as part of the
                        calculation to assess the cargo for Australian import tax.
                      </p>
                    }
                    {focused === 'cbm' &&
                      <p>
                        CBM, or cubic meter, is the freight volume of the
                        shipment for domestic and international freight. CBM
                        measurement is calculated by multiplying the width,
                        height and length together of the shipment. If you are
                        unsure, you can check with your supplier or simply have
                        an educated guess and the price can be adjusted once the
                        actual dimensions are known.
                      </p>
                    }
                  </div>
                }

              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Your details</h3>
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
                    {submitted && errors.email && <p className={modalStyles.errorMessage}>Enter a valid email</p>}
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
                      <option value='novice'>First Time / Novice Shipper – Please provide me with lots of info and educational content so I can get my head around everything!</option>
                      <option value='experienced'>Experienced Shipper – I understand how everything works, I’m just chasing rates.</option>
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
                <div className={`${modalStyles.newsLetterPrivacyWrapper} !py-0 !text-sm`}>
                  <div className={`${modalStyles.newsLetterWrapper}`}>
                    <input
                      type='checkbox'
                      checked={newsletter}
                      onChange={e => setNewsletter(e.target.checked)}
                    />
                    <p>Sign me up for your awesome newsletter!</p>
                  </div>
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
              <div className={modalStyles.row}>
                  <div className="w-full bg-grey my-1 p-6 rounded-md text-white text-center text-base leading-tight">
                    <p>**Are you unsure on any of the fields above, or are you looking to ship multiple containers or something out of the ordinary?</p>
                    <p><a onClick={CommercialQuote}>Click here</a> to submit a manual quote request and would be happy to help.</p>
                  </div>
                </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )


};

export default InstantFCLQuote;