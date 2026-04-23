import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import emailRegex from "../../utils/hooks/emailRegex";
import { modalStyles } from "./VehicleQuoteModal";
import ModalContext from "../../context/ModalContext";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";
import "../../utils/hooks/dataLayer";

const AutoFormOtherModal = () => {
  const router = useRouter();
  const { closeAllModals, showVehicleQuote } = useContext(ModalContext);

  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  // Form state
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargoDetails, setCargoDetails] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // HubSpot submission
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

  // Error state - removed cargoType error
  const [errors, setErrors] = useState({
    origin: false,
    destination: false,
    cargoDetails: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  // Modal functionality
  const ref = useRef(null);
  const handleCloseModal = () => {
    closeAllModals();
  };
  const handleBackToVehicleQuote = () => {
    closeAllModals();
    showVehicleQuote(true);
  };
  useOnClickOutside(ref, handleCloseModal);

  // Removed port options logic - now using text inputs like CommercialQuoteModal

  // Update errors when form values change - removed cargoType validation
  useEffect(() => {
    setErrors({
      origin: origin === '',
      destination: destination === '',
      cargoDetails: cargoDetails === '',
      firstName: firstName === '',
      lastName: lastName === '',
      email: !emailRegex(email),
      phone: phone === ''
    });
  }, [origin, destination, cargoDetails, firstName, lastName, email, phone]);

  const ErrorMessage = ({ text }: { text: string }) => (
    <p className={modalStyles.errorMessage}>{text}</p>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Check for errors
    const errorList = Object.values(errors).filter(error => error === true);
    if (errorList.length > 0) {
      return;
    }

    setLoading(true);

    try {
      // Create form data for submission (following CommercialQuoteModal naming scheme)
      const formData = new FormData();
      formData.append("form", "auto-other");
      formData.append("name", `${firstName} ${lastName}`);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("goodsOrigin", origin);
      formData.append("goodsDestination", destination);
      formData.append("GoodsDescription", "Other"); // Set to "Other" instead of cargoType
      formData.append("message", cargoDetails);
      formData.append("leadSource", "Auto Other Form");
      formData.append("_wpcf7_unit_tag", "wpcf7-4859dd7");


        // Track form submission
        window.dataLayer?.push({
          event: 'formSubmission',
          formType: 'Auto Other Form'
        });

        // HubSpot form data based on consultation form pattern
        const hubspotFormData = {
          fields: [
            { name: 'origin', value: origin || '' },
            { name: 'destination', value: destination || '' },
            { name: 'cargo_type___form', value: 'Other' },
            { name: 'firstname', value: firstName || '' },
            { name: 'lastname', value: lastName || '' },
            { name: 'email', value: email || '' },
            { name: 'phone', value: phone || '' },
            { name: 'goods_description_message', value: cargoDetails || '' },
            { name: 'form_source2', value: 'Automotive Contact Form' },
            { name: 'business_channel', value: 'Automotive' },
            { name: 'form_type', value: 'Manual' },
            { name: 'lead_source', value: pageSource || '' },
          ],
        };

        try {
          await handleHubSpotSubmit(hubspotFormData);
        } catch (hubspotError) {
          console.error('Error submitting form to HubSpot:', hubspotError);
        }

        // Close modal and redirect to thank you page
        closeAllModals();
        router.push({
          pathname: '/thank-you',
          query: { thankYou: true },
        });
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
    }
  };

  return (
    <div className={modalStyles.modal}>
      <div className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer} ref={ref}>
          {/* Custom Header with Back Button */}
          <div className="relative flex flex-row  bg-darkBlue w-full h-16 rounded-t-md text-center">
            {/* Back Button */}
            <div className="h-full aspect-square flex justify-center items-center">
              <ChevronLeftIcon 
                className="text-white h-6 w-6 hover:cursor-pointer" 
                onClick={handleBackToVehicleQuote}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
            
              <Image height={64} width={55} src="/assets/images/logo.webp" alt="logo" />
              <h2 className="text-white text-base sm:text-2xl font-medium">Other Cargo Quote</h2>
              
              {/* Close Button */}
              <div className="h-full aspect-square flex justify-center items-center">
                <XIcon 
                  className="text-white h-6 w-6 hover:cursor-pointer" 
                  onClick={handleCloseModal}
                  />
              </div>
            </div>
          </div>
          
          <form 
            className={modalStyles.form}
            onSubmit={handleSubmit}
          >

            <p className="text-lg mx-auto max-w-4xl text-darkGrey text-center mb-px">
              Tell us about your cargo and we&apos;ll provide you with a customized shipping solution
            </p>

            {/* Cargo Details Section */}
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>Cargo Details</h3>
              
              {/* Row 1: Origin and Destination only - removed cargo type dropdown */}
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder="Goods Origin"
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                  />
                  {submitted && errors.origin && <ErrorMessage text="Please enter the goods origin" />}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    className={modalStyles.input}
                    placeholder="Goods Destination"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  />
                  {submitted && errors.destination && <ErrorMessage text="Please enter the goods destination" />}
                </div>
              </div>

              {/* Row 2: Cargo Details */}
              <div className={modalStyles.row}>
                <div className={`${modalStyles.inputWrapper} w-full`}>
                  <label htmlFor="cargoDetails" className="text-darkBlue font-medium text-base mb-2 block">
                    Tell us more about the cargo (dimensions, weight, special requirements)*
                  </label>
                  <textarea
                    id="cargoDetails"
                    className={`${modalStyles.input} h-20 w-full resize-none`}
                    value={cargoDetails}
                    onChange={e => setCargoDetails(e.target.value)}
                  />
                  {submitted && errors.cargoDetails && <ErrorMessage text="Please provide more details about your cargo" />}
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className={modalStyles.sectionWrapper}>
              <h3 className={modalStyles.sectionHeading}>Your Details</h3>
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input
                    placeholder="First Name*"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className={modalStyles.input}
                  />
                  {submitted && errors.firstName && <ErrorMessage text="Please enter your first name" />}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className={modalStyles.input}
                  />
                  {submitted && errors.lastName && <ErrorMessage text="Please enter your last name" />}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    placeholder="Email Address*"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={modalStyles.input}
                  />
                  {submitted && errors.email && <ErrorMessage text="Please enter a valid email address" />}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={modalStyles.input}
                  />
                  {submitted && errors.phone && <ErrorMessage text="Please enter your phone number" />}
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className={modalStyles.submitWrapper}>
              {!loading && !sent
                ? (
                  <button 
                    type='submit'
                    className={modalStyles.buttonStyle}
                  >
                    Get My Quote
                  </button>
                ) : loading
                  ? <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red"></div>
                    </div>
                  : <p>Please wait while you are redirected</p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoFormOtherModal;
