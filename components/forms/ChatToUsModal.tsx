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

const ChatToUsModal = () => {

  //

  const { showChatToUs } = useContext(ModalContext);

  const router = useRouter();

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const ref = useRef(null);
  const handleCloseModal = () => {
    showChatToUs(false);
  };
  useOnClickOutside(ref, handleCloseModal);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setmessage] = useState('');

  const [signup, setSignup] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
    setmessage('');
    setFullname('');
    setEmail('');
    setPhone('');
    setSignup(false);
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
    message: false,
    fullname: false,
    email: false,
  });

  useEffect(() => {
    setErrors({
      message: message === '',
      fullname: fullname === '',
      email: !emailRegex(email)
    });
  }, [message, fullname, email])

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

    formData.append('form', 'china');
    formData.append('country', 'China');
    formData.append('message', message);
    formData.append('fullname', fullname);
    formData.append('email', email)
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('leadSource', pageSource);
    formData.append('newsletter', '1');
    formData.append("_wpcf7_unit_tag", `wpcf7-f26054-p26388-o2as`);

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/26054/feedback', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        console.log('response');
        console.log((await response.json()));
        
        if (response.status === 200) {
          setSent(true);
          resetForm();
          showChatToUs(false);
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
              { "objectTypeId": "0-1", name: 'lastname', value: fullname || '' }, // Use a default empty string if `name` is undefined or null
              { "objectTypeId": "0-1", name: 'phone', value: phone || '' },
              { "objectTypeId": "0-1", name: 'email', value: email || '' },
              { "objectTypeId": "0-1", name: 'form_source2', value: "Chat to Us" || '' },
              { "objectTypeId": "0-1", name: 'message', value: message || '' },
              { "objectTypeId": "0-1", name: 'business_channel', value: 'Commercial' || '' },
              { "objectTypeId": "0-1", name: 'form_type', value: 'Manual' || '' },

              // { name: 'origin', value: origin || '' },
              // { name: 'destination', value: destination || '' },
              // { name: 'what_describes_you', value: whatDescribesYou || '' },
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
          <ModalHeader text='Chat to Us' />
          <div className={modalStyles.formWrapper}>
            <h3 className={modalStyles.formHeading}>How can we help?</h3>
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
                    <input

                      className={modalStyles.input}
                      value={message}
                      onChange={e => setmessage(e.target.value)}
                      placeholder='Message'
                    />
                    {submitted && errors.message && <p className={modalStyles.errorMessage}>Please enter a brief message</p>}
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
                        Send Enquiry
                      </button>
                    </>
                  ) : sending
                    ? <Loader />
                    : <p>Sending enquiry, you will be redirected in a few seconds</p>
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

export default ChatToUsModal;