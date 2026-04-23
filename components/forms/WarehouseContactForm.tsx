import { SortDescendingIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Recaptcha from "react-recaptcha";
import emailRegex from "../../utils/hooks/emailRegex";
import Loader from "../common/Loader";
import "../../utils/hooks/dataLayer";

const WarehouseContactForm = () => {

  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [phone, setPhone] = useState ('');
  const [message, setMessage] = useState ('');

  const [submitted, setSubmitted] = useState (false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [errors, setErrors] = useState({
    name: false, 
    email: false, 
    phone: false, 
    message: false, 
  });

  const router = useRouter();

  useEffect(() => {
    setErrors({
      name: name === '', 
      email: !emailRegex(email), 
      phone: phone === '', 
      message: message === '', 
    })
  }, [
    name, 
    email, 
    phone,
    message, 
  ]);

  const onlyNumbers = (e : React.ChangeEvent<HTMLInputElement>, callBack : React.Dispatch<React.SetStateAction<string>>) => {
    if (e.target.value === '') {
      callBack('');
    };
    const re = /^[0-9]+\.?[0-9]{0,2}$/;
    re.test(e.target.value) && callBack(e.target.value);
  };

  const [isVerified, setisVerified] = useState(false);

  const handleSubscribe = (e : React.FormEvent<HTMLButtonElement>) => {
    
    if (isVerified) {
      //alert("You have successfully subscribed!");
    } else {
      e.preventDefault();
      alert("Please verify that you are a human!");
      return;
    }
  };

  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const verifyCallback = (response: any) => {
    if (response) {
      setisVerified(true);
    }
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorList = [];
    for (const [key, value] of Object.entries(errors)) {
      value === true && errorList.push(value);
    };

    if (errorList.length > 0) {
      console.log('warehouse form errors, bailing');
      return;
    };

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('message', message);
    formData.append("_wpcf7_unit_tag", `wpcf7-f25812-p26388-o2as`);

    setSending(true);

    fetch('https://admin.willship.com.au/wp-json/contact-form-7/v1/contact-forms/25812/feedback', {
      method: 'POST',
      body: formData
    })
    .then(res => {
      setSending(false)
      if (res.status === 200) {
        setSent(true);
        window.dataLayer?.push({
          event: 'formSubmission',
        });
        router.push('/commercial-thank-you')
      } else {
        setSent(false);
        console.log('Something went wrong...');
      }
    })
    .catch(err => {
      setSending(false);
      setSent(false);
      console.error(err);
    });
  };

  const RenderLabel = ({label} : {label: string}) => (
    <label className="text-grey text-base">{label}</label>
  );

  const errorClass = 'bg-red/10';


  return (
    <div className="w-full flex flex-col items-center">
      <script
          src="https://www.google.com/recaptcha/api.js?&render=explicit"
          async
          defer
        ></script>
      <form 
        className="bg-white flex flex-col gap-4 border-grey w-full text-black text-base"
        onSubmit={handleSubmit}
      >
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='Name*' />
          <input
            className={`w-full outline-0 ${errors.name && submitted && errorClass}`}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row items-center">
            <div className={`w-1/2 border-lightGrey border-2 p-2 mr-4 text-black`}>
            <RenderLabel label='Email*' />
            <input
                className={`w-full outline-0 ${errors.email && submitted && errorClass}`}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </div>
            <div className={`w-1/2 border-lightGrey border-2 p-2 text-black`}>
            <RenderLabel label='Phone*' />
            <input
                className={`w-full outline-0 ${errors.phone && submitted && errorClass}`}
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            </div>
        </div>
        
        <div className={`w-full border-lightGrey border-2 p-2 text-black`}>
          <RenderLabel label='How can we help?*' />
          <textarea
            rows={3}
            className={`w-full outline-0 ${errors.message && submitted && errorClass}`}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <Recaptcha
          sitekey="6LeYg9QgAAAAAOnUw-kaV8VIO0zyBQElRd_q2Ks3"
          render="explicit"
          theme="dark"
          onloadCallback={recaptchaLoaded}
          verifyCallback={verifyCallback}
        />
        {!sending && !sent
          ? (
            <button 
              type='submit'
              className="text-white font-medium bg-red py-3 hover:shadow-lg"
              onClick={handleSubscribe}
            >
              Submit
            </button>
          ) : sending
            ? <Loader />
            : <p>Thank you for sending your inquiry. Redirecting...</p>
        }
      </form>
    </div>
  );
};

export default WarehouseContactForm;