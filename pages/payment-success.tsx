import { CheckIcon } from "@heroicons/react/solid";
import Link from 'next/link';
import React from 'react';

const SimplePaymentSuccessPage: React.FC = () => {
  // We no longer need useRouter, useEffect, or useState since we aren't fetching data.
  
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-2xl rounded-2xl md:p-12">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600">
            <CheckIcon className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-2 text-4xl font-bold text-center text-gray-800 md:text-5xl">
          Payment Successful!
        </h1>
        
        <p className="mb-8 text-lg text-center text-gray-600">
          Your consultation fee has been successfully processed.
        </p>

        {/* Main Message (Confirmation) */}
        <div className="p-6 mb-8 border-l-4 border-blue-500 rounded-lg bg-blue-50">
          <p className="mb-4 text-gray-700">
            Thank you for securing your consultation with <span className="font-bold">Willship International</span>.
          </p>
          <p className="mb-4 text-gray-700">
            Your payment is confirmed, and your **consultation request is now lodged**.
          </p>
          <p className="mb-4 text-gray-700">
            We are now reviewing your submitted shipment details and will be in touch via email within <span className="font-bold underline">1 business day</span>.
          </p>
          <p className="font-semibold text-gray-700">
            We look forward to helping you with your shipment!
          </p>
        </div>
        
        {/* Additional Info / Next Steps */}
        {/* <div className="p-6 mb-8 border-l-4 rounded-lg bg-amber-50 border-amber-500">
          <h3 className="mb-3 font-bold text-gray-800">Next Steps</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ A **receipt** has been emailed to the address provided during checkout.</li>
            <li>✓ Check your inbox for our **consultation confirmation email**.</li>
            <li>✓ Our team will contact you within **1 business day**.</li>
            <li>
              ✓ For urgent matters, email us at{' '}
              <a 
                href="mailto:commercial@willship.com.au" 
                className="font-semibold text-blue-600 hover:underline"
              >
                commercial@willship.com.au
              </a>
            </li>
          </ul>
        </div> */}

        {/* Navigation Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* FIRST LINK - FIXED */}
            <Link href="/">
                <a className="px-8 py-3 font-bold text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Back to Home
                </a>
            </Link>
            {/* SECOND LINK - FIXED */}
            <Link href="/freight-forwarder">
                <a className="px-8 py-3 font-bold text-center text-gray-800 transition-all duration-300 bg-gray-200 rounded-lg hover:bg-gray-300">
                Review Commercial Services
                </a>
            </Link>
        </div>

        {/* Contact Info */}
        {/* <div className="pt-8 mt-12 text-center border-t border-gray-200">
          <p className="mb-2 text-gray-600">
            Need immediate assistance?
          </p>
          <p className="text-lg">
            <a 
              href="tel:0732670575" 
              className="font-bold text-blue-600 hover:underline"
            >
              Call us: 07 3267 0575
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SimplePaymentSuccessPage;