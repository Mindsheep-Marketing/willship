import React, { useState, useEffect } from 'react';
import emailRegex from "../../utils/hooks/emailRegex";
import Loader from "../common/Loader";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { useRouter } from "next/router";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";

const NewsletterInput = () => {
    const router = useRouter();
    const currentPath = getCurrentPath();
    const pageSource = getPageSourceFormatted(currentPath);

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [sent, setSent] = useState(false);

    const resetForm = () => {
        setSubmitted(false);
        setEmail('');
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
        email: false,
    });

    useEffect(() => {
        setErrors({
            email: !emailRegex(email),
        });
    }, [email]);

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

        // HubSpot form data
        const hubspotFormData = {
            fields: [
                { name: 'email', value: email || '' },
            ],
        };

        handleHubSpotSubmit(hubspotFormData).then(() => {
            setSent(true);
            resetForm();
            window.dataLayer?.push({
                event: 'formSubmission',
            });
            router.push({
                pathname: '/cta-thank-you',
                query: { type: 'newsletter' },
            });
        }).catch((hubspotError) => {
            console.error('Error submitting form to HubSpot:', hubspotError);
        });
    };

    return (
        <form className='w-full md:max-w-xl flex flex-col sm:flex-row items-center justify-center' onSubmit={handleSubmit}>
            {/* <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={fullname}
                      onChange={e => setFullname(e.target.value)}
                      placeholder='Full name'
                    />
                    {submitted && errors.fullname && <p className={modalStyles.errorMessage}>Enter Your Name</p>}
                  </div> */}

            <input
                className='p-4 text-black w-full text-center sm:text-left'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Your email'
            />
            {submitted && errors.email && <p className=''>Please enter a valid email</p>}
            {!sending && !sent
                ? (
                    <>
                        <button
                            className='bg-red p-4 w-full'
                            type='submit'
                        >
                            Subscribe
                        </button>
                    </>
                ) : sending
                    ? <Loader />
                    : <p>Signing up, you will be redirected in a few seconds</p>
            }
        </form>
    );
};

export default NewsletterInput;
