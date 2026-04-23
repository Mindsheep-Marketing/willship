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

const ProductSampleQuote = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [cbm, setCbm] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState('What best describes you?');
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [newsletter, setNewsletter] = useState(true);
  const [focused, setFocused] = useState<null | 'fob' | 'cbm'>(null)

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState('');
  const [commercialPurpose, setCommercialPurpose] = useState('Are these goods for commercial purposes?');
  const [estimatedAnnualShippingVolume, setEstimatedAnnualShippingVolume] = useState('Estimated Annual Shipping Volume');

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
    cbm: false,
    message: false,
    weight: false,
    amount: false,
    name: false,
    email: false,
    whatDescribesYou: false,
    dateOfShipping: false,
    how_did_you_hear_about_us: false,
    commercialPurpose: false,
    estimatedAnnualShippingVolume: false,
  });


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
      weight: weight === '',
      message: message == '',
      cbm: cbm === '',
      amount: amount === '',
      name: name === '',
      email: !emailRegex(email),
      whatDescribesYou: whatDescribesYou === 'What best describes you?',
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      how_did_you_hear_about_us: how_did_you_hear_about_us === '',
      commercialPurpose: commercialPurpose === 'Are these goods for commercial purposes?',
      estimatedAnnualShippingVolume: estimatedAnnualShippingVolume === 'Estimated Annual Shipping Volume',
    })
  }, [origin, destination, description, weight, amount, name, email, cbm, message, whatDescribesYou, dateOfShipping, how_did_you_hear_about_us, commercialPurpose, estimatedAnnualShippingVolume]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]*$/;
    re.test(e.target.value) && setWeight(e.target.value);
  };

  const resetForm = () => {
    setOrigin('');
    setDestination('');
    setDescription('');
    setMessage('');
    setWeight('');
    setAmount('');
    setCbm('');
    setName('');
    setEmail('');
    setPhone('');
    setNewsletter(true);
    setWhatDescribesYou('What best describes you?');
    setDateOfShipping('Date Of Shipping');
    sethow_did_you_hear_about_us('');
    setCommercialPurpose('Are these goods for commercial purposes?');
    setEstimatedAnnualShippingVolume('Estimated Annual Shipping Volume');
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
    formData.append('future', message);
    formData.append('shippingDate', dateOfShipping);
    formData.append('pickup', origin);
    formData.append('delivery', destination);
    formData.append('goodsDescription', description);
    formData.append('productWeight', weight);
    formData.append('amount', amount);
    formData.append('dimensions', cbm);
    formData.append("_wpcf7_unit_tag", "wpcf7-f26401-p26402-o2");
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append('commercialPurpose', commercialPurpose);
    formData.append('estimatedAnnualShippingVolume', estimatedAnnualShippingVolume);

// debugging
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log(formDataObject);
    

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26401/feedback', {
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
            pathname: '/cta-thank-you',
            query: { type: 'default' },
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
              { name: 'cargo_dimension', value: cbm || '' },
              { name: 'no__of_pieces', value: amount || '' },
              { name: 'message', value: message || '' },
              { name: 'lastname', value: name || '' }, // Use a default empty string if `name` is undefined or null
              { name: 'email', value: email || '' },
              { name: 'phone', value: phone || '' },
              { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
              { name: 'what_describes_you2', value: whatDescribesYou2 || '' },
              { name: 'form_source2', value: 'Product Sample Quote' || '' },
              { name: 'business_channel', value: 'Commercial' || '' },
              { name: 'form_type', value: 'Manual' || '' },
              { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
              { name: 'commercial_purpose', value: commercialPurpose || '' },
              { name: 'estimated_annual_shipping_volume', value: estimatedAnnualShippingVolume || '' },
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
          <ModalHeader text='Product Sample Quote' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Awesome! We look forward to helping you on your business journey.</h3>
            <p className="text-xl font-medium m-auto text-center pt-6 max-w-4xl">Please provide us with information on the product and the initial sample size along with your thoughts around the first larger shipment size, so we can tailor a cost-effective shipping plan that works for you.</p>
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
                      placeholder='Pick-up Address from Supplier'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                    />
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Enter pick-up address</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Delivery Address in Australia'
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    />
                    {submitted && errors.destination && <p className={modalStyles.errorMessage}>Enter delivery address</p>}
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
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      value={estimatedAnnualShippingVolume}
                      onChange={e => setEstimatedAnnualShippingVolume(e.target.value)}
                    >
                      {estimatedAnnualShippingVolumeOptions.map((item, i) => (
                        <option key={i} value={item} disabled={i === 0}>{item}</option>
                      ))}
                    </select>
                    {submitted && errors.estimatedAnnualShippingVolume && <p className={modalStyles.errorMessage}>Select estimated annual shipping volume</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <select
                      className={modalStyles.input}
                      value={commercialPurpose}
                      onChange={e => setCommercialPurpose(e.target.value)}
                    >
                      {commercialPurposeOptions.map((item, i) => (
                        <option key={i} value={item} disabled={i === 0}>{item}</option>
                      ))}
                    </select>
                    {submitted && errors.commercialPurpose && <p className={modalStyles.errorMessage}>Select commercial purpose</p>}
                  </div>
                </div>
              </div>
              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>Product Details</h3>
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
                    <input
                      className={modalStyles.input}
                      placeholder='Total Weight (kg)'
                      value={weight}
                      onChange={handleWeightChange}
                    />
                    {submitted && errors.weight && <p className={modalStyles.errorMessage}>Enter a weight in kg</p>}
                  </div>
                </div>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Product Dimensions'
                      value={cbm}
                      onChange={e => setCbm(e.target.value)}
                    />
                    {submitted && errors.cbm && <p className={modalStyles.errorMessage}>Enter product dimension</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='No. of pieces'
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                    />
                    {submitted && errors.amount && <p className={modalStyles.errorMessage}>Enter amount of pieces</p>}
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
                <h3 className={modalStyles.sectionHeading}>Future Larger Shipment</h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='If you are happy with the sample, please let us know your thoughts around the initial larger order volume (e.g. 1 pallet, 1 x 20ft container, etc)'
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                    {submitted && errors.message && <p className={modalStyles.errorMessage}>Enter future large shipment</p>}
                  </div>
                </div>
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

export default ProductSampleQuote;