import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import emailRegex from "../../utils/hooks/emailRegex";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import Loader from "../common/Loader";
import ModalHeader from "./ModalHeader";
import { modalStyles } from './VehicleQuoteModal';
import "../../utils/hooks/dataLayer";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";

const departurePorts = [
  'Brisbane',
  'Other'
];

const destinationPorts = [
  'Auckland',
  'Christchurch',
  'Other'
];

const crateShippingDateOptions = [
  'Now!',
  '1-3 Months',
  '3-6 Months',
  '6+ Months',
  'Just Curious'
];

const CratesQuoteModal = () => {

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const { closeAllModals } = useContext(ModalContext);

  const [departure, setDeparture] = useState('Brisbane');
  const [destination, setDestination] = useState('Select A Destination');
  const [date, setDate] = useState('Date Of Shipping');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const [errors, setErrors] = useState({
    departure: false,
    destination: false,
    date: false,
    firstName: false,
    lastName: false,
    email: false,
  });

  const ref = useRef(null);
  const handleCloseModal = async () => {
    const removeQuery = () => router.replace('/crates', undefined, { shallow: true });

    await removeQuery()
      .then(() => closeAllModals());
  };
  useOnClickOutside(ref, handleCloseModal);

  useEffect(() => {
    setErrors({
      departure: !departurePorts.includes(departure) || departure === 'Other',
      destination: !destinationPorts.includes(destination) && destination !== 'Other',
      date: date === 'Date Of Shipping',
      firstName: firstName === '',
      lastName: lastName === '',
      email: !emailRegex(email),
    });
  }, [departure, destination, date, firstName, lastName, email])

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const resetForm = () => {
    setDeparture('Brisbane');
    setDestination('Select A Destination');
    setDate('Date Of Shipping');
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setNewsletter(false);
  }

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorsList = [];
    for (const [key, value] of Object.entries(errors)) {
      value && errorsList.push(key);
    };
    if (errorsList.length > 0) {
      return;
    };

    setSent(true);

    const formData = new FormData();

    formData.append('firstName', firstName);
    formData.append('lastName', firstName);
    formData.append('departure', departure);
    formData.append('destination', destination);
    formData.append('date', date);
    formData.append('email', email)
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('leadSource', pageSource);
    formData.append('newsletter', '1');

    fetch('https://admin.willship.com.au/wp-json/crates/v1/submit', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        if (response.status === 200) {
          setSent(true);
          closeAllModals();
          resetForm();
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
              { name: 'firstname', value: firstName || '' }, // Use a default empty string if `name` is undefined or null
              { name: 'phone', value: phone || '' },
              { name: 'email', value: email || '' },
              { name: 'origin', value: departure || '' },
              { name: 'destination', value: destination || '' },
              { name: 'lead_source', value: pageSource || '' },
              // { name: 'what_describes_you', value: whatDescribesYou || '' },
            ],
          };

          // try {
          //   await handleHubSpotSubmit(hubspotFormData);
          // } catch (hubspotError) {
          //   console.error('Error submitting form to HubSpot:', hubspotError);
          // }
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
          <ModalHeader text='Crates Instant Shipping Calculator' />
          <form
            className={modalStyles.form}
            onSubmit={handleSubmit}
          >
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>
                Crate Shipping Details:
              </h3>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={departure}
                    onChange={e => setDeparture(e.target.value)}
                  >
                    <option value='Select An Origin' disabled={true}>Select the Origin</option>
                    {departurePorts.map((dep, i) => (
                      <option key={i} value={dep}>{dep}</option>
                    ))}
                  </select>
                  {submitted && errors.departure && <p className={modalStyles.errorMessage}>Please select an origin</p>}
                </div>

                <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  >
                    <option value='Select A Destination' disabled={true}>Select A Destination</option>
                    {destinationPorts.map((dest, i) => (
                      <option key={i} value={dest}>{dest}</option>
                    ))}
                  </select>
                  {submitted && errors.destination && <p className={modalStyles.errorMessage}>Please select a destination</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  >
                    <option disabled={true}>Date Of Shipping</option>
                    {crateShippingDateOptions.map((shippingDate, i) => (
                      <option key={i} value={shippingDate}>{shippingDate}</option>
                    ))}
                  </select>
                  {submitted && errors.date && <p className={modalStyles.errorMessage}>Please select a date range</p>}
                </div>
              </div>

              {(departure === 'Other' || destination === 'Other') &&
                <div className="w-full bg-darkBlue my-1 p-6 rounded-md text-white text-lg leading-tight">
                  <p>
                    Sorry! We have only got the crates service set up from Brisbane to Auckland or Christchurch at the moment. If you have a different origin in Australia or destination in New Zealand please contact us and we&apos;ll work with you to provide a quote right through to your final address. If you&apos;d like to speak with us about your request, please email us on <Link href="mailto:crates@willship.com.au"><a className="link-nowrap">crates@willship.com.au</a></Link> or call us on <Link href="tel:07 3267 3694"><a className="link-nowrap">07 3267 3694</a></Link>.
                  </p>
                </div>
              }
            </div>
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>
                Your Details:
              </h3>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='First Name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  {submitted && errors.firstName && <p className={modalStyles.errorMessage}>Please enter your first name</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Last Name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  {submitted && errors.lastName && <p className={modalStyles.errorMessage}>Please enter your last name</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder='Phone (optional)'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
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
                sent
                  ? (
                    <p>
                      Your quote request has been submitted. Please wait while you are redirected.
                    </p>
                  ) : sending
                    ? <Loader />
                    : (
                      <button
                        className={modalStyles.buttonStyle}
                        type='submit'
                      >
                        Get Instant Quote
                      </button>
                    )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )











};

export default CratesQuoteModal;