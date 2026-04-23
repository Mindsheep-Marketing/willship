import { useState, useEffect } from 'react';
import { trackFacebookEvent } from '../useFacebookPixel';

interface FormData {
  fields: {
    name: string;
    value: string;
  }[];
}

interface HubSpotFormSubmissionResult {
  sending: boolean;
  handleSubmit: (hubspotFormData: FormData) => Promise<void>;
}

const useHubSpotFormSubmission = (
  portalId: string,
  formId: string,
  onSuccess: () => void,
  onError: () => void
): HubSpotFormSubmissionResult => {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    return () => {
      setSending(false); // Cleanup function to set 'sending' state to false
    };
  }, []);

  const handleSubmit = async (hubspotFormData: FormData) => {
    try {
      setSending(true);
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer pat-na1-33d6da3e-9749-46b8-a76a-f278f9bd9fbd`,
          },
          body: JSON.stringify(hubspotFormData),
        }
      );
      
      if (res.ok) {
        setSending(false);
        onSuccess();
      } else {
        throw new Error('Failed to submit form to HubSpot');
      }
    } catch (error) {
      console.error('Error submitting form to HubSpot:', error);
      setSending(false);
      onError();
    }
  };

  return {
    sending,
    handleSubmit,
  };
};

export default useHubSpotFormSubmission;