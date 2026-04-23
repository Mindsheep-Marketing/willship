import { useContext, useRef, useState, useEffect } from "react";
import ModalContext from "../../context/ModalContext";
import emailRegex from "../../utils/hooks/emailRegex";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import Link from "next/link";
import siteMap from "../../siteMap";
import { modalStyles } from "./VehicleQuoteModal";
import ModalHeader from "./ModalHeader";
import Loader from "../common/Loader";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";
import { getCurrentPath, getPageSourceFormatted } from "../../utils/hooks/HubSpot/pageSource";
import { useRouter } from "next/router";

const PersonalForm = () => {
  const ref = useRef(null);
  const { showPopupJourney } = useContext(ModalContext);
  const router = useRouter();
  const currentPath = getCurrentPath();
  const pageSource = getPageSourceFormatted(currentPath);

  const handleCloseModal = () => {
    showPopupJourney(false);
  };
  useOnClickOutside(ref, handleCloseModal);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatDescribesYou, setWhatDescribesYou] = useState("What best describes you?");
  const [how_did_you_hear_about_us, sethow_did_you_hear_about_us] = useState("Referral Source");
  const [personalGoodsType, setPersonalGoodsType] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selectedPersonalGoodsType');
      return saved || "What type of personal goods are you importing?";
    }
    return "What type of personal goods are you importing?";
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Error states
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    whatDescribesYou: false,
    how_did_you_hear_about_us: false,
    personalGoodsType: false
  });

  useEffect(() => {
    if (submitted) {
      setErrors({
        name: name.trim() === '',
        email: !emailRegex(email),
        whatDescribesYou: whatDescribesYou === "What best describes you?",
        how_did_you_hear_about_us: how_did_you_hear_about_us === "Referral Source",
        personalGoodsType: personalGoodsType === "What type of personal goods are you importing?"
      });
    }
  }, [name, email, whatDescribesYou, how_did_you_hear_about_us, personalGoodsType, submitted]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('selectedPersonalGoodsType');
      }
    };
  }, []);

  const ErrorMessage = ({ text }: { text: string }) => (
    <p className={modalStyles.errorMessage}>{text}</p>
  );

  const handleHubSpotSuccess = () => {
    console.log("Form submitted to HubSpot successfully");
    router.push({
      pathname: '/cta-thank-you',
      query: { type: 'personal' }
    });
  };

  const handleHubSpotError = () => {
    console.error("Error submitting form to HubSpot");
  };

  const { sending: submitting, handleSubmit: handleHubSpotSubmit } = useHubSpotFormSubmission(
    "39556297", // Hubspot Form ID
    "cb0767dd-0fad-4abf-bcf4-43313b96c3ab", // Portal ID
    handleHubSpotSuccess,
    handleHubSpotError
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Check errors immediately after setting submitted to true
    const newErrors = {
      name: name.trim() === '',
      email: !emailRegex(email),
      whatDescribesYou: whatDescribesYou === "What best describes you?",
      how_did_you_hear_about_us: how_did_you_hear_about_us === "Referral Source",
      personalGoodsType: personalGoodsType === "What type of personal goods are you importing?"
    };
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error === true);
    if (hasErrors) {
      return;
    }

    setSending(true);

    const formData = new FormData();
    formData.append('form', 'personal');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('what_describes_you', whatDescribesYou);
    formData.append('how_did_you_hear_about_us', how_did_you_hear_about_us);
    formData.append('personal_goods_type', personalGoodsType);
    formData.append('leadSource', pageSource);
    formData.append('newsletter', '1');

    fetch('https://admin.willship.com.au/wp-json/commercial/v1/submit/', {
      method: 'POST',
      body: formData,
    })
    .then(async (response: Record<string, any>) => {
      if (response.status === 200) {
        setSent(true);
        showPopupJourney(false);
        window.dataLayer?.push({
          event: 'formSubmission',
        });
        router.push({
          pathname: '/cta-thank-you',
          query: { type: 'personal' }
        });

        // Map what describes you value for HubSpot
        let whatDescribesYou2 = "" + whatDescribesYou;
        if(whatDescribesYou == "First time importer") {
          whatDescribesYou2 = "First time importer / novice";
        } else if(whatDescribesYou == "Ive imported a few times before") {
          whatDescribesYou2 = "Ive imported a few times before / experienced";
        } else if(whatDescribesYou == "Regular Importer") {
          whatDescribesYou2 = "Ive imported a few times before / experienced";
        }

        const { data } = await response.json()
        // HubSpot form data
        const hubspotFormData = {
          fields: [
            { name: 'lastname', value: name || '' },
            { name: 'email', value: email || '' },
            { name: 'phone', value: phone || '' },
            { name: "what_describes_you2", value: whatDescribesYou2 },
            { name: "what_type_of_personal_goods_are_you_importing", value: personalGoodsType || '' },
            { name: 'how_did_you_hear_about_us', value: how_did_you_hear_about_us || '' },
            { name: 'form_source2', value: 'Personal Shipments' || '' },
            { name: 'business_channel', value: 'Commercial' || '' },
            { name: 'form_type', value: 'Manual' || '' },
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
      setSending(false);
      setSent(false);
    });
  };

  return (
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader text='Importing Personal Use Goods from China to Australia Form' />
          <div className={modalStyles.formWrapper}>
          <p className="text-xl font-medium m-auto text-center pt-6 max-w-4xl">Awesome! We&apos;re almost there! Please fill out the details below, and once completed, we&apos;ll send you an information pack outlining the import process for your chosen commodity and the next steps before we create a quote for you.</p>
            <form className={modalStyles.form} onSubmit={handleSubmit}>

              <div className={modalStyles.sectionWrapper}>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder='Your Name'
                    />
                    {submitted && errors.name && <ErrorMessage text='Please enter your name' />}
                  </div>
                </div>

                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Your email'
                    />
                    {submitted && errors.email && <ErrorMessage text='Please enter a valid email' />}
                  </div>
                </div>

                <div className={modalStyles.row}>
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
                    <select 
                      className={modalStyles.input} 
                      onChange={(e) => setWhatDescribesYou(e.target.value)} 
                      value={whatDescribesYou}
                    >
                      <option value="What best describes you?">What best describes you?</option>
                      <option value="First time importer">First time importer</option>
                      <option value="Ive imported a few times before">I&apos;ve imported a few times before</option>
                      <option value="Regular Importer">Regular Importer</option>
                    </select>
                    {submitted && errors.whatDescribesYou && <ErrorMessage text="What best describes you?" />}
                  </div>
                </div>

                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <select 
                      className={modalStyles.input} 
                      value={how_did_you_hear_about_us} 
                      onChange={(e) => sethow_did_you_hear_about_us(e.target.value)}
                    >
                      <option value="Referral Source">How did you hear about us?</option>
                      <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                      <option value="Social Media">Social Media (Facebook, Instagram, LinkedIn, Youtube etc.)</option>
                      <option value="Online Ads">Online Ads (Google Ads, etc.)</option>
                      <option value="Company Website">Company Website (Direct search)</option>
                      <option value="Email Marketing or Newsletter">Email Marketing or Newsletter</option>
                      <option value="Word of Mouth">Word of Mouth or Personal Recommendation</option>
                      <option value="Industry Partner or Business Referral">Industry Partner or Business Referral</option>
                    </select>
                    {submitted && errors.how_did_you_hear_about_us && <ErrorMessage text="Select a Referral Source" />}
                  </div>
                </div>

                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <select 
                      className={modalStyles.input} 
                      onChange={(e) => setPersonalGoodsType(e.target.value)} 
                      value={personalGoodsType}
                    >
                      <option value="What type of personal goods are you importing?">What type of personal goods are you importing?</option>
                      <option value="I'm importing furniture">I&apos;m importing furniture</option>
                      <option value="I'm importing building materials">I&apos;m importing building materials</option>
                      <option value="I'm importing portable homes">I&apos;m importing portable/container/expandable homes</option>
                      <option value="I'm importing machinery">I&apos;m importing industrial machinery or heavy equipment</option>
                      <option value="I'm buying from Alibaba">Buying something from Alibaba (or similar sites)</option>
                    </select>
                    {submitted && errors.personalGoodsType && <ErrorMessage text="Please select the type of goods you&apos;re importing" />}
                  </div>
                </div>
              </div>

              <div className={modalStyles.submitWrapper}>
                {!sending && !sent ? (
                  <button className={modalStyles.buttonStyle} type='submit'>
                    Submit
                  </button>
                ) : sending ? (
                  <Loader />
                ) : (
                  <p>Thank you for your submission!</p>
                )}
                <p className="text-center">
                  Your information is used solely in conjunction with our{" "}
                  <Link href={siteMap.privacy.path}>
                    <a className="text-blue-700 font-bold">Privacy Policy</a>
                  </Link>{" "}
                  and is not sold or distributed to any other company.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;