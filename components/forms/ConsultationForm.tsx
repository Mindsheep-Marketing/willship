import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { shippingDateOptions } from '../../quoteFormData';
import emailRegex from "../../utils/hooks/emailRegex";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";


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

const have_you_already_purchased_the_goodsOptions = [
  'Have you already purchased the goods?',
  'Yes',
  'No'
];

const ConsulationPage: React.FC = () => {


  const [shippingFrom, setShippingFrom] = useState ('');
  const [destination, setDestination] = useState ('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState (false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [valueOfGoods, setValueOfGoods] = useState('');
  const [cargoWeight, setcargoWeight] = useState('');
  const [cargoDimension, setCargoDimension] = useState('');
  const [message, setMessage] = useState('');
  const [descriptionOfGoods, setDescriptionOfGoods] = useState('');
  const [buyingTerms, setBuyingTerms] = useState('');
  const [have_you_already_purchased_the_goods, setHave_you_already_purchased_the_goods] = useState(have_you_already_purchased_the_goodsOptions[0]);
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState(how_did_you_hear_about_usOptions[0]);



  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    shippingFrom: false,
    destination: false,
    descriptionOfGoods: false,
    cargoWeight: false,
    cargoDimension: false,
    valueOfGoods: false,
    buyingTerms: false,
    have_you_already_purchased_the_goods: false,
    how_did_you_hear_about_us: false,
    message: false,
  });

  // Add validation functions
  const isValidPhone = (phone: string) => {
    // Allow only numbers, +, and spaces
    const phoneRegex = /^[0-9+\s]+$/;
    return phone !== '' && phoneRegex.test(phone);
  };

  const isValidValueOfGoods = (value: string) => {
    // Allow only numbers and decimal point
    const valueRegex = /^[0-9.]+$/;
    return value !== '' && valueRegex.test(value);
  };

  useEffect(() => {
    setErrors({
      shippingFrom: shippingFrom === '',
      destination: destination === '',
      name: name === '',
      email: !emailRegex(email),
      phone: !isValidPhone(phone),
      descriptionOfGoods: descriptionOfGoods === '',
      cargoWeight: cargoWeight === '',
      cargoDimension: cargoDimension === '',
      valueOfGoods: !isValidValueOfGoods(valueOfGoods),
      have_you_already_purchased_the_goods: have_you_already_purchased_the_goods === have_you_already_purchased_the_goodsOptions[0],
      how_did_you_hear_about_us: how_did_you_hear_about_us === how_did_you_hear_about_usOptions[0],
      buyingTerms: buyingTerms === '',
      message: message === ''
    });
  }, [shippingFrom, destination, name, email, phone, descriptionOfGoods, cargoWeight, cargoDimension, message, valueOfGoods, have_you_already_purchased_the_goods, how_did_you_hear_about_us, buyingTerms, message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmitted(true);

    const errorList = [];
    for (const [key, value] of Object.entries(errors)) {
      value === true && errorList.push(value);
    };

    if (errorList.length > 0) {
      return;
    };
    
    setLoading(true);
    
    // Prepare the form data to send to the server
    const formData = {
      formType: 'consultation',
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      shippingFrom: shippingFrom,
      destination: destination,
      descriptionOfGoods: descriptionOfGoods,
      cargoWeight: cargoWeight,
      cargoDimension: cargoDimension,
      valueOfGoods: valueOfGoods,
      havePurchasedGoods: have_you_already_purchased_the_goods,
      howDidYouHearAboutUs: how_did_you_hear_about_us,
      buyingTerms: buyingTerms,
      message: message
    };
    
    try {
      // Create a Stripe Checkout session with the form data as metadata
      const response = await fetch('https://admin.willship.com.au/wp-json/commercial/v1/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error(data.message || 'Failed to get checkout URL');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your request. Please try again.');
      setLoading(false);
    }
    // console.log(formData);
  }

  const ErrorMessage = ({ text }: { text: string }) => (
    <p className={modalStyles.errorMessage}>{text}</p>
  );

  return (
    <div className="flex flex-col items-center w-full">
      <form 
        className={`${modalStyles.form} bg-white border-2 border-grey rounded-lg`}
        onSubmit={handleSubmit}
      >
        {/* Main Header */}
        <h2 className={modalStyles.formHeading}>
          Please Complete The Form Below and We&apos;ll Get Back To You
        </h2>

        {/* Your Details Section */}
        <div className={modalStyles.sectionWrapper}>
          <h3 className={modalStyles.sectionHeading}>Your Details</h3>
          <div className={modalStyles.row}>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Full Name*"
                value={name}
                onChange={e => setName(e.target.value)}
                className={modalStyles.input}
              />
              {submitted && errors.name && <ErrorMessage text="Please enter your name" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Email*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={modalStyles.input}
              />
              {submitted && errors.email && <ErrorMessage text="Please enter a valid email" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Phone*"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={modalStyles.input}
              />
              {errors.phone && submitted && <ErrorMessage text="Please enter a valid phone number" />}
            </div>
          </div>
        </div>

        {/* Goods Details Section */}
        <div className={modalStyles.sectionWrapper}>
          <h3 className={modalStyles.sectionHeading}>Goods Details</h3>
          
          {/* Row 1: Origin/Destination/Description */}
          <div className={modalStyles.row}>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Country of Origin*"
                className={modalStyles.input}
                value={shippingFrom}
                onChange={e => setShippingFrom(e.target.value)}
              />
              {submitted && errors.shippingFrom && <ErrorMessage text="Please enter country of origin" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Port of Arrival in Australia*"
                className={modalStyles.input}
                value={destination}
                onChange={e => setDestination(e.target.value)}
              />
              {submitted && errors.destination && <ErrorMessage text="Please enter delivery destination" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Description of Goods*"
                className={modalStyles.input}
                value={descriptionOfGoods}
                onChange={e => setDescriptionOfGoods(e.target.value)}
              />
              {submitted && errors.descriptionOfGoods && <ErrorMessage text="Please enter description of goods" />}
            </div>
          </div>

          {/* Row 2: Cargo details */}
          <div className={modalStyles.row}>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Cargo Weight*"
                className={modalStyles.input}
                value={cargoWeight}
                onChange={e => setcargoWeight(e.target.value)}
              />
              {submitted && errors.cargoWeight && <ErrorMessage text="Please enter cargo weight" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Estimated Cargo Volume (in cubic metres, e.g. 3.5 m³)*"
                className={modalStyles.input}
                value={cargoDimension}
                onChange={e => setCargoDimension(e.target.value)}
              />
              {submitted && errors.cargoDimension && <ErrorMessage text="Please enter cargo dimensions" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Value of Goods (AUD)*"
                className={modalStyles.input}
                value={valueOfGoods}
                onChange={e => {
                  // Only allow numbers and decimal point
                  const value = e.target.value;
                  if (value === '' || /^[0-9.]+$/.test(value)) {
                    setValueOfGoods(value);
                  }
                }}
              />
              {submitted && errors.valueOfGoods && <ErrorMessage text="Please enter a valid numeric value" />}
            </div>
          </div>

          {/* Row 3: Terms and options */}
          <div className={modalStyles.row}>
            <div className={modalStyles.inputWrapper}>
              <input
                placeholder="Buying Terms / Incoterms (if known)*"
                value={buyingTerms}
                onChange={e => setBuyingTerms(e.target.value)}
                className={modalStyles.input}
              />
              {submitted && errors.buyingTerms && <ErrorMessage text="Please enter buying terms" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <select
                className={modalStyles.input}
                value={have_you_already_purchased_the_goods}
                onChange={e => setHave_you_already_purchased_the_goods(e.target.value)}
              >
                {have_you_already_purchased_the_goodsOptions.map((item, i) => (
                  <option key={i} value={item}>{item}</option>
                ))}
              </select>
              {submitted && errors.have_you_already_purchased_the_goods && <ErrorMessage text="Please select an option" />}
            </div>
            <div className={modalStyles.inputWrapper}>
              <select
                className={modalStyles.input}
                value={how_did_you_hear_about_us}
                onChange={e => sethow_did_you_hear_about_us(e.target.value)}
              >
                {how_did_you_hear_about_usOptions.map((item, i) => (
                  <option key={i} value={item}>{item}</option>
                ))}
              </select>
              {submitted && errors.how_did_you_hear_about_us && <ErrorMessage text="Please select an option" />}
            </div>
          </div>

          {/* Row 4: Message textarea */}
          <div className={modalStyles.row}>
            <div className={`${modalStyles.inputWrapper} w-full`}>
              <label htmlFor="message" className='font-bold text-md'>Please tell us how we can help*</label>
              <textarea
                className={`${modalStyles.input} h-16 w-full`}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              {submitted && errors.message && <ErrorMessage text="Please enter a message" />}
            </div>
          </div>
        </div>
        
        <div className={modalStyles.submitWrapper}>
          {!loading && !sent
            ? (
              <button 
                type='submit'
                className={modalStyles.buttonStyle}
              >
                Secure My Consultation
              </button>
            ) : loading
              ? <div className="flex items-center justify-center">
                  <div className="w-8 h-8 border-b-2 rounded-full animate-spin border-red"></div>
                </div>
              : <p>Please wait while you are redirected</p>
          }
        </div>
      </form>
    </div>
  );
};

export default ConsulationPage;