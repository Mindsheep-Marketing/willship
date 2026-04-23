import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import emailRegex from "../../utils/hooks/emailRegex";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import Loader from "../common/Loader";
import ModalHeader from "./ModalHeader";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";

const FinanceModal = () => {

  const { showFinanceModal } = useContext(ModalContext);

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const ref = useRef(null);
  const handleCloseModal = () => {
    showFinanceModal(false);
  };
  useOnClickOutside(ref, handleCloseModal);

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [financeType, setFinanceType] = useState<null | 'Import' | 'Export'>(null);
  const [amountFinanced, setAmountFinanced] = useState('');
  const [origin, setOrigin] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
    setFullname('');
    setPhone('');
    setEmail('');
    setFinanceType(null);
    setAmountFinanced('')
    setOrigin('')
    setMessage('');
  };

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
    fullname: false,
    phone: false,
    email: false,
    financeType: false,
    amountFinanced: false,
    origin: false,
    message: false,
  });

  useEffect(() => {
    setErrors({
      fullname: fullname === '',
      phone: phone === '',
      email: !emailRegex(email),
      financeType: financeType === null,
      amountFinanced: amountFinanced === '',
      origin: origin === '',
      message: message === '',
    })
  }, [fullname, phone, email, financeType, amountFinanced, origin, message]);

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

    const formData = new FormData();

    formData.append('message', message);
    formData.append('fullname', fullname);
    formData.append('email', email)
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('financeType', financeType as string);
    formData.append('amountFinanced', amountFinanced);
    formData.append('origin', origin);
    formData.append('message', message);
    formData.append('leadSource', pageSource);
    formData.append("_wpcf7_unit_tag", `wpcf7-f26209-p26388-o2as`);

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26209/feedback', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        if (response.status === 200) {
          setSent(true);
          resetForm();
          showFinanceModal(false);
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
              { name: 'firstname', value: fullname || '' }, // Use a default empty string if `name` is undefined or null
              { name: 'phone', value: phone || '' },
              { name: 'email', value: email || '' },
              { name: 'lead_source', value: pageSource || '' },
              { name: 'finance_type', value: financeType || '' },
              { name: 'finance_amount', value: amountFinanced || '' },
              { name: 'origin', value: origin || '' },
              { name: 'description', value: message || '' },
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
          <ModalHeader text='Trade Finance Form' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>Enquire Now</h3>
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
                      value={fullname}
                      onChange={e => setFullname(e.target.value)}
                      placeholder='Full name'
                    />
                    {submitted && errors.fullname && <p className={modalStyles.errorMessage}>Enter Your Name</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Your email'
                    />
                    {submitted && errors.email && <p className={modalStyles.errorMessage}>Please enter a valid email</p>}
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
                    <div className={modalStyles.radioWrapper}>
                      <p>Finance Type Required</p>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={financeType === 'Import'}
                          onClick={() => setFinanceType('Import')}
                        />
                        <p>Import</p>
                      </div>
                      <div className={modalStyles.radioInput}>
                        <input
                          type='checkbox'
                          readOnly={true}
                          checked={financeType === 'Export'}
                          onClick={() => setFinanceType('Export')}
                        />
                        <p>Export</p>
                      </div>
                    </div>
                    {submitted && errors.financeType && <p className={modalStyles.errorMessage}>Finance Type Required</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input

                      className={modalStyles.input}
                      value={amountFinanced}
                      onChange={e => setAmountFinanced(e.target.value)}
                      placeholder='Enter finance amount required (e.g. $50,000)'
                    />
                    {submitted && errors.message && <p className={modalStyles.errorMessage}>Please enter a finance amount</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder='Origin'
                      value={origin}
                      onChange={e => setOrigin(e.target.value)}
                    />
                    {submitted && errors.origin && <p className={modalStyles.errorMessage}>Please enter an origin</p>}
                  </div>
                </div>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input

                      className={modalStyles.input}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder='Please add any notes here'
                    />
                    {submitted && errors.message && <p className={modalStyles.errorMessage}>Please enter any notes here</p>}
                  </div>
                </div>
              </div>
              <div className={modalStyles.submitWrapper}>

                {!sending && !sent
                  ? (
                    <>
                      <button
                        className={modalStyles.buttonStyle}
                        type='submit'
                      >
                        Send Enquiry
                      </button>
                    </>
                  ) : sending
                    ? <Loader />
                    : <p>Sending enquiry, you will be redirected in a few seconds</p>
                }
                <p className="text-center">
                  Thank you for reaching out to us with your enquiry. We would like to reassure you that your enquiry is completely obligation-free. This means that you are under no commitment or pressure to proceed with any service or product we discuss. Our primary aim is to provide you with the information and clarity you seek, so you can make an informed decision that best suits your needs.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )

};

export default FinanceModal;