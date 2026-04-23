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

const ChinaFCLQuoteModal = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [containerType, setContainerType] = useState<null | '40ft' | '20ft' | 'Both'>(null);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState('What best describes you?');
  const [newsletter, setNewsletter] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const handleHubSpotSuccess = () => {
    console.log("Form submitted to HubSpot successfully");
  };

  const handleHubSpotError = () => {
    console.error("Error submitting form to HubSpot");
  };

  const { sending, handleSubmit: handleHubSpotSubmit } = useHubSpotFormSubmission(
    "39556297", // Hubspot ID
    "a12d398e-2f3f-47a6-a052-c1d1353a3703", // Form ID
    handleHubSpotSuccess,
    handleHubSpotError
  );

  const [errors, setErrors] = useState({
    origin: false,
    destination: false,
    description: false,
    weight: false,
    containerType: false,
    name: false,
    email: false,
    whatDescribesYou: false,
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
      containerType: containerType === null,
      name: name === '',
      email: !emailRegex(email),
      whatDescribesYou: whatDescribesYou === 'What best describes you?',
    })
  }, [origin, destination, description, weight, containerType, name, email, whatDescribesYou]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]*$/;
    re.test(e.target.value) && setWeight(e.target.value);
  };

  const resetForm = () => {
    setOrigin('');
    setDestination('');
    setDescription('');
    setWeight('');
    setContainerType(null);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setNewsletter(false);
    setWhatDescribesYou('What best describes you?');
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

    const builtMessage = `Please provide pricing for ${containerType === 'Both' ? 'both 40ft and 20ft container sizes' : `a ${containerType} container`}. ${company !== '' ? `Company name provided: ${company}` : 'No company name provided.'}`;

    const formData = new FormData();
    formData.append('form', 'home');
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('whatDescribesYou', whatDescribesYou);
    formData.append('goodsOrigin', origin);
    formData.append('goodsDestination', destination);
    formData.append('airSeaFreight', 'Sea Freight');
    formData.append('GoodsDescription', description);
    formData.append('cargoWeight', weight);
    formData.append('lengthWidthHeight', "N/A");
    formData.append('message', builtMessage);
    formData.append('leadSource', pageSource);
    formData.append("_wpcf7_unit_tag", `wpcf7-f26056-p26388-o2as`);

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26056/feedback', {
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
            pathname: '/cta-request-thank-you',
            query: { thankYou: true },
          });

          // HubSpot form data
          const hubspotFormData = {
            fields: [
              { name: 'firstname', value: name || '' }, // Use a default empty string if `name` is undefined or null
              { name: 'phone', value: phone || '' },
              { name: 'email', value: email || '' },
              { name: 'lead_source', value: pageSource || '' },
              { name: 'company', value: company || '' },
              { name: 'origin', value: origin || '' },
              { name: 'destination', value: destination || '' },
              { name: 'what_describes_you', value: whatDescribesYou || '' },
              { name: 'description', value: description || '' },
              { name: 'cargo_weight', value: weight || '' },
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
          <ModalHeader text='China To Australia FCL Quote Request' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Complete These Details To Request A Quote</h3>
            <p className={modalStyles.formText}>
              Container pricing fluctuates frequently so it is challenging to offer instant quotes for containers, however if you can complete the below form we will get back to you asap with current rates and availability.
            </p>
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
                      placeholder='Origin Port In China'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                    />
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Please enter an origin</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Destination Port in Australia'
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    />
                    {submitted && errors.destination && <p className={modalStyles.errorMessage}>Please enter an destination</p>}
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
                    <input
                      className={modalStyles.input}
                      placeholder='Total Weight (kg)'
                      value={weight}
                      onChange={handleWeightChange}
                    />
                    {submitted && errors.weight && <p className={modalStyles.errorMessage}>Enter a weight in kg</p>}
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
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={containerType === 'Both'}
                          onClick={() => setContainerType('Both')}
                        />
                        <p>Both</p>
                      </div>
                    </div>
                    {submitted && errors.containerType && <p className={modalStyles.errorMessage}>Select a container type</p>}
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
                      <option value='First time importer'>First time importer</option>
                      <option value='Ive imported a few times before'>I&apos;ve imported a few times before</option>
                      <option value='Regular Importer'>Regular Importer</option>
                    </select>
                    {submitted && errors.whatDescribesYou && <p className={modalStyles.errorMessage}>What best describes you?</p>}
                  </div>
                </div>
              </div>
              <div className={modalStyles.submitWrapper}>
                <div className={modalStyles.newsLetterPrivacyWrapper}>
                  <div className={modalStyles.newsLetterWrapper}>
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


            </form>
          </div>
        </div>

      </div>
    </div>
  )


};

export default ChinaFCLQuoteModal;