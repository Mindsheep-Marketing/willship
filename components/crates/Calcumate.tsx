import { useEffect, useState } from "react";
import Button from "../common/Button";

const Calcumate = () => {

  const [integration, setIntegration] = useState({
    "data-integration": process.env.NEXT_PUBLIC_CALCUMATE_DATA_INTEGRATION,
    "data-int": process.env.NEXT_PUBLIC_CALCUMATE_DATA_INT
  });

  useEffect(() => {
    const scriptSrc = 'https://calcumate-calculator-new-production.s3-ap-southeast-2.amazonaws.com/static/js/main.js';
    const existingScript = document.querySelector('script#calcumate-script');

    existingScript && existingScript.parentElement?.removeChild(existingScript);

    const newScript = document.createElement('script');
    newScript.setAttribute('id', 'calcumate-script');
    newScript.setAttribute('src', scriptSrc);
    newScript.setAttribute('async', 'true');
    newScript.setAttribute('data-status', 'loading');
    document.body.appendChild(newScript);

    /vercel/.test(window.location.origin) && setIntegration({
      "data-integration": "d6-willship-next-omega.vercel.app",
      "data-int": "0ed5c916-e6f1-4161-aff5-77090c6f1bd4"
    })
  }, []);

  return (
    <div id='calcumate'>
      <h2 className="w-full text-center text-darkBlue text-3xl sm:text-4xl lg:text-forty p-4 lg:py-8">
        Unsure what crate size you need? Try our calculator below!
      </h2>
        <div
          className="w-full"
          id="calcumate-root"
          data-integration={integration["data-integration"]}
          data-ref="AQICAHhReAOexSsfBeJ/FMNVdjLFzyMEhuepXqwRfRaqckbrnAF/JCb+9WQElQisgT0tZBaAAAAAgzCBgAYJKoZIhvcNAQcGoHMwcQIBADBsBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDE8EyE1PLRYEqfmdDAIBEIA/pHVJdSW2qe/4PjsViduvVTnKKQeFdiqnK0ySTHjiP2tbftGhOleqw6J35IpbNJfMwU/IgITTYkCbJcJBbIU/"
          data-int={integration["data-int"]}
        />
    </div>
  );
};

export default Calcumate;