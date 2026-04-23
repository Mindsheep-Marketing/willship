import { InformationCircleIcon } from '@heroicons/react/outline';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import { shippingDateOptions, vehicleQuoteOptions } from "../../quoteFormData";
import siteMap from "../../siteMap";
import emailRegex from "../../utils/hooks/emailRegex";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import Loader from "../common/Loader";
import ModalHeader from "./ModalHeader";
import "../../utils/hooks/dataLayer";
import useHubSpotFormSubmission from "../../utils/hooks/HubSpot/HubSpotFormSubmission";

export const modalStyles = {
  modal: 'w-full h-full top-0 left-0 z-50 flex flex-col items-center justify-center bg-grey/50 fixed',
  formWrapper: 'w-full max-w-8xl p-4 overflow-y-scroll rounded-lg',
  formContainer: 'w-full bg-white rounded-md overflow-y-scroll rounded-lg pb-20 lg:pb-0',
  form: 'p-6 flex flex-col w-full gap-4 lg:gap-8 text-base placeholder:text-black placeholder:font-semibold',
  formHeading: "text-3xl font-medium text-darkBlue text-center",
  formText: 'text-xl mx-auto max-w-4xl text-darkGrey text-center pt-8',
  sectionWrapper: 'w-full flex flex-col gap-4',
  sectionHeading: 'text-darkBlue font-bold text-2xl',
  row: 'w-full flex flex-col lg:flex-row gap-4',
  inputWrapper: 'w-full',
  input: 'w-full pl-1 py-2 border-b border-black text-base text-black font-medium placeholder:text-black placeholder:font-medium focus:outline-0',
  buttonStyle: "bg-red text-white text-xl font-medium w-64 p-4 mx-auto hover:cursor-pointer hover:shadow-lg",
  errorMessage: 'text-red pl-4 font-bold',
  radioWrapper: 'w-full flex flex-row py-2 gap-2 xl:gap-8 items-center justify-center text-base text-black font-medium border-b border-black',
  radioInput: 'flex flex-row items-center gap-2',
  submitWrapper: 'w-full flex flex-col items-center gap-4 text-center',
  newsLetterPrivacyWrapper: 'flex flex-col w-full gap-2 font-medium text-md sm:text-lg md:text-xl py-2',
  newsLetterWrapper: 'w-full flex flex-row justify-center items-center gap-4 py-2',
};

const VehicleQuoteModal = () => {

  const [vehicleType, setVehicleType] = useState <string | null> (null);
  const [departurePort, setDeparturePort] = useState ('Departure Port');
  const [destinationPort, setDestinationPort] = useState ('Destination Port');
  const [dateOfShipping, setDateOfShipping] = useState ('Date Of Shipping');
  const [make, setMake] = useState ('');
  const [model, setModel] = useState ('');
  const [year, setYear] = useState ('');

  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');

  const [selectedTypeData, setSelectedTypeData] = useState <any> ();
  const [departurePortOptions, setDeparturePortOptions] = useState(['Departure Port']);
  const [destinationPortOptions, setDestinationPortOptions] = useState(['Destination Port']);

  const [newsletter, setNewsletter] = useState (false);

  const [vehiclePlaceHolders, setVehiclePlaceHolders] = useState({
    make: 'Vehicle Manufacturer eg. Ford',
    model: 'Vehicle Model',
    year: 'Vehicle Year'
  });

  const {closeAllModals, showCommercialQuote, showAutoFormOther} = useContext(ModalContext);
  const router = useRouter();

  const [errors, setErrors] = useState ({
    vehicleType: false,
    departurePort: false,
    destinationPort: false,
    dateOfShipping: false,
    make: false,
    model: false,
    year: false,
    length: false,
    width: false,
    height: false,
    firstName: false,
    lastName: false,
    email: false
  });

  const ref = useRef(null);
  const handleCloseModal = () => {
    closeAllModals();
  };
  useOnClickOutside(ref, handleCloseModal);

  const screenSize = useGetScreenSize();


  const handleHubSpotSuccess = () => {
    console.log("Form submitted to HubSpot successfully");
  };

  const handleHubSpotError = () => {
    console.error("Error submitting form to HubSpot");
  };

  const { sending: sendingHubspot, handleSubmit: handleHubSpotSubmit } = useHubSpotFormSubmission(
    "39556297", // Hubspot ID
    "00c0c34b-de33-430e-bb9c-c149c6cb1c50", // Form ID
    handleHubSpotSuccess,
    handleHubSpotError
  );

  useEffect(() => {
    if (vehicleType === 'other') {
      showAutoFormOther(true);
      return;
    };

    setErrors({
      vehicleType: vehicleType === null,
      departurePort: departurePort === 'Departure Port' || departurePort === 'None of the above',
      destinationPort: destinationPort === 'Destination Port' || destinationPort === 'None of the above',
      dateOfShipping: dateOfShipping === 'Date Of Shipping',
      make: make === '',
      model: model === '',
      year: year === '',
      length: (vehicleType && ['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(vehicleType)) 
              ? length === '' 
                ? true 
                : false
              : false,
      width: (vehicleType && ['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(vehicleType)) 
              ? length === '' 
                ? true 
                : false
              : false,
      height: (vehicleType && ['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(vehicleType)) 
              ? length === '' 
                ? true 
                : false
              : false,
      firstName: firstName === '',
      lastName: lastName === '',
      email: !emailRegex(email)
    });
  }, [vehicleType, departurePort, destinationPort, dateOfShipping, make, model, year, length, width, height, firstName, lastName, email, showCommercialQuote]);

  const [submitted, setSubmitted] = useState (false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);


  useEffect(() => {
    if (vehicleType) {
      const selectedData = vehicleQuoteOptions.filter(item => item.title === vehicleType)[0];
      selectedData && setSelectedTypeData(selectedData);
    };
    const departurePorts = (selectedTypeData && selectedTypeData.departurePorts) 
      ? selectedTypeData.departurePorts.map((port : {name: string}) => port.name)
      : ['Departure Port'];

    setDeparturePortOptions(departurePorts);
    setDeparturePort('Departure Port');
  }, [vehicleType, selectedTypeData]);

  useEffect(() => {
    const placeHolderData = {
      motorCycle: {
        make: 'Motorcycle Make',
        model: 'Motorcycle Model',
        year: 'Motorcycle Year'
      },
      caravan: {
        make: 'Caravan Make',
        model: 'Caravan Model',
        year: 'Caravan Year'
      },
      boat: {
        make: 'Boat Make',
        model: 'Boat Model',
        year: 'Boat Year'
      },
      motorhome: {
        make: 'Motorhome Make',
        model: 'Motorhome Model',
        year: 'Motorhome Year'
      },
      vehicle: {
        make: 'Vehicle Manufacturer eg. Ford',
        model: 'Vehicle Model',
        year: 'Vehicle Year'
      }
    };

    switch (vehicleType) {
      case 'Motorcycle':
        setVehiclePlaceHolders(placeHolderData.motorCycle)
        break;
      case 'Caravan/ Camper trailer':
        setVehiclePlaceHolders(placeHolderData.caravan);
        break;
      case 'Boat on trailer':
        setVehiclePlaceHolders(placeHolderData.boat);
        break;
      case 'Motorhome':
        setVehiclePlaceHolders(placeHolderData.motorhome);
        break;
      default: 
        setVehiclePlaceHolders(placeHolderData.vehicle);
        break;
    };
  }, [vehicleType]);

  useEffect(() => {
    const destinationPorts = selectedTypeData 
      ? selectedTypeData.departurePorts.find(({name} : {name: string}) => name === departurePort).Destinations
      : ['Destination Port']

    setDestinationPortOptions(destinationPorts);
    setDestinationPort('Destination Port');

  }, [departurePort, selectedTypeData]);

  const handleVehicleTypeChange = (type : string) => {
    console.log("Vehicle type =>");
    console.log(type);
    setVehicleType(type);
  };

  const handleYearChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    (/^[0-9]*$/).test(e.target.value) && setYear(e.target.value);
  };

  const handleLengthChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    (/^[0-9.]*$/).test(e.target.value) && setLength(e.target.value);
  };

  const handleWidthChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    (/^[0-9.]*$/).test(e.target.value) && setWidth(e.target.value);
  };

  const handleHeightChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    (/^[0-9.]*$/).test(e.target.value) && setHeight(e.target.value);
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errorArray = [];
    for (const [key, value] of Object.entries(errors)) {
      value === true && errorArray.push(value);
    };

    if (errorArray.length > 0) {
      console.log('error, bailing....');
      return;
    };

    setSending(true);


    const stringVehicleType = vehicleType as string;

    const formData = new FormData();

    if (['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(stringVehicleType)) {
      formData.append('form', 'home2');
    } else {
      formData.append('form', 'home');
    };

    const arrVehicle = ['Small vehicle(under 14m3)','Medium vehicle(14m3-18m3)','Large vehicle(18m3+)','Motorcycle','Boat on trailer','Caravan/ Camper trailer','Motorhome'];
    const vehicleNum = arrVehicle.indexOf(stringVehicleType) + 1;

    formData.append('vehicle', vehicleNum.toString());
    //formData.append('vehicleText', stringVehicleType.replace('+', '%2B'));
    formData.append('vehicleText', stringVehicleType);
    formData.append('depNum', departurePortOptions.indexOf(departurePort).toString());
    formData.append('dep', departurePort);
    formData.append('desNum', destinationPortOptions.indexOf(destinationPort).toString());
    formData.append('des', destinationPort);
    //formData.append('shipingDate', dateOfShipping.replace('+', '%2B'));
    formData.append('shipingDate', dateOfShipping);
    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', year);
    
    if (['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(stringVehicleType)) {
      formData.append('length', length);
      formData.append('width', width);
      formData.append('height', height);
    };
    
    formData.append('name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone', phone === '' ? "" : phone);
    formData.append('emailto', email);

    formData.append('referer', '');
    formData.append('newsletter', '1');
    formData.append('form_id', '1');
    formData.append('currency', 'AUD');

    //Email JS bit start...
    // const emailData = {
    //   vehicle: vehicleType,
    //   departure: departurePort,
    //   destination: destinationPort,
    //   dateOfShipping,
    //   make,
    //   model,
    //   year,
    //   length,
    //   width,
    //   height,
    //   firstName,
    //   lastName,
    //   phone,
    //   email
    // };

    // const body = {
    //   service_id: 'digital_six_engage_page',
    //   template_id: 'template_wiq',
    //   user_id: 'user_dpLNhVNCPdW2TffdVl3BK',
    //   template_params: emailData
    // };

    // fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify(body)
    // })
    // .then(res => {
    //   console.log('Success submitting backup');
    // })
    // .catch(err => {
    //   console.log('error sending backup');
    // });
    //email JS bit end...

    //fetch('https://willship.d6w.com.au/submit', {
    // fetch('https://dev2022.willship.com.au/wp-json/automotive/v1/submit/', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => {
    //   setSent(true)
    //   setSending(false)
    //   closeAllModals();
    //   console.log(res)
    //   router.push('/thank-you')
    // });

    async function submitAutomotiveDataToWPBackend() {
      const response = await fetch('https://admin.willship.com.au/wp-json/automotive/v1/submit/',
      {
        method: 'POST',
        body: formData,
      });
      const res = await response.json()
      //console.log(res)
      return res;
    }
    try {
    let pushDataToWP = await submitAutomotiveDataToWPBackend();
    
      let result = JSON.parse(pushDataToWP.body)
      //console.log(result.data.quoteNo)
      
      type VehicleTypeMapping = {
        [key: string]: string; // This allows indexing with any string that returns a string
      };
      
      // Define a mapping from the specific vehicle type to a general category
      const vehicleTypeMapping: VehicleTypeMapping = {
        "Small vehicle(under 14m3)": "Small vehicle",
        "Medium vehicle(14m3-18m3)": "Medium vehicle",
        "Large vehicle(18m3+)": "Large vehicle",
        "Motorcycle": "Motorcycle",
        "Boat on trailer": "Boat",
        "Caravan/ Camper trailer": "Caravan/ Camper trailer",
        "Motorhome": "Motorhome"
      };
      

      // Retrieve the general vehicle type based on the specific type
      const generalVehicleType = vehicleTypeMapping[stringVehicleType] || stringVehicleType;
      
      
      const hubspotFormData = {
        // All the fields set out in the corresponding Hubspot form must be included here and must correspond to the same field names or an exception will be thrown.
        fields: [
          { name: "origin", value: departurePort },
          { name: "destination", value: destinationPort },
          { name: "shipping_date", value: dateOfShipping === 'As Soon As Possible' ? "Now" : dateOfShipping},
          { name: "vehicle___manufacturer", value: make },
          { name: "vehicle___model", value: model },
          { name: "vehicle___year", value: year },
          { name: "firstname", value: firstName, },
          { name: "lastname", value: lastName, },
          { name: "phone", value: phone },
          { name: "email", value: email },
          { name: "vehicle___type", value: generalVehicleType },
          { name: "form_source2", value: 'Automotive - Instant Shipping Calculator' },
          { name: "business_channel", value: 'Automotive' },
          { name: "form_type", value: 'Instant' },
          { name: 'quote_id', value: result.data.quoteNo },
          { name: 'quote_url2', value: result.data.link || '' }
        ],
      };
      
      // Check the vehicle type and conditionally add dimensions
      if (['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(stringVehicleType)) {
        // Append dimensions to the fields array in the hubspotFormData object
        hubspotFormData.fields.push({ name: "vehicle___length", value: length });
        hubspotFormData.fields.push({ name: "vehicle___width", value: width });
        hubspotFormData.fields.push({ name: "vehicle___height", value: height });
      }
      
      await handleHubSpotSubmit(hubspotFormData);

      setSent(true);
      setSending(false);
      closeAllModals();
      window.dataLayer?.push({
        event: 'formSubmission',
      });
      const isNZ = destinationPort.includes('New Zealand');
      const isAU = departurePort.includes('Australia');

      if (isNZ && isAU) {
        router.push('/thank-you-automotives-AUtoNZ?id='+result.data.quoteNo);
      } else {
        router.push('/thank-you-automotives?id='+result.data.quoteNo);
      }

    } catch (error) {
      console.error("Error submitting form:", error);

      setSending(false);
    }
  };

  return (
    // modal background
    <div className={modalStyles.modal}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>


          <ModalHeader text='Instant Shipping Calculator' />
          <form 
            className={modalStyles.form}
            onSubmit={handleSubmit}
          >

  {/* Vehicle Type Selection */}
            {screenSize === 'xs' 
            ? (
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={!vehicleType ? 'Select Vehicle Type' : vehicleType}
                    onChange={e => setVehicleType(e.target.value)}
                  >
                    <option value='Select Vehicle Type' selected={true} disabled={true}>Select Vehicle Type</option> 
                    {vehicleQuoteOptions.map(type => {
                      return type.name === 'others'
                        ? (
                          <option key={type.name} value='other'>Other</option>
                        ) : (
                          <option key={type.name} value={type.title}>{type.title}</option>
                        )
                    })}
                  </select>
                  {submitted && errors.vehicleType && <p className={modalStyles.errorMessage}>Select a vehicle type</p>}
                </div>

              </div>

            ) : (
                <div className="w-full flex flex-col items-center">
                  <div className={`
                    w-full flex flex-row flex-wrap lg:flex-nowrap justify-center
                  `}>
                    {vehicleQuoteOptions.map(type => { 
                      return type.name === 'others'
                      ? (
                          <div 
                            key={type.id} 
                            className='p-1.5 w-1/4 lg:w-1/8 relative hover:cursor-pointer'
                            onClick={e => handleVehicleTypeChange('other')}
                          >
                                <Image src={type.image} layout="fill" objectFit="contain" alt={type.name} />
                          </div>
                        ) : (
                          <div key={type.id} className='p-1.5 w-1/4 lg:w-1/8'>
                            <div 
                              className={`h-full hover:cursor-pointer shadow-lg ${vehicleType === type.title ? 'bg-darkBlue text-white' : 'bg-white'}`}
                              key={type.id} 
                              onClick={() => handleVehicleTypeChange(type.title)}
                              >
                              <div className="w-full aspect-video relative">
                                <Image src={type.image} layout="fill" objectFit="cover" alt={type.name} />
                              </div>
                              <p className="text-center text-2xs leading-loose sm:text-base font-medium my-5 px-2">
                                {type.title}
                              </p>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                  {submitted && errors.vehicleType && <p className={modalStyles.errorMessage}>Select a vehicle type</p>}
                </div>
              )
            }

  {/* Warning for large vehicles */}
              {vehicleType && ['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(vehicleType) &&
                <div className="w-full flex flex-row items-center px-1 lg:px-8">
                  <div className="w-2/12 flex items-center justify-center">
                    <InformationCircleIcon className="text-darkBlue h-8 w-8" />
                  </div>
                  <p className="grow text-sm lg:text-lg text-darkGrey">
                    Roll on, roll off shipping on items like Large Cars / Camper Vans/ Caravans / Motorhomes / Boats on trailers are charged based on a cubic metre basis. So, in order to quote you accurately we will require the overall length , width and height of the unit (in metres). Once you will fill in these details below our quote system will calculate the total cubic size of your goods and will quote appropriately.
                  </p>
                </div>
              }
              
  {/* ports options */}
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <select 
                    className={modalStyles.input}
                    value={departurePort}
                    onChange={e => setDeparturePort(e.target.value)}
                  >
                    {departurePortOptions.map((option, i) => (
                      <option key={i} value={option} disabled={i === 0}>{option}</option>
                    ))}
                  </select>
                  {submitted && errors.departurePort && <p className="text-red pl-4 font-bold">Select a departure port</p>}
                </div>
                
                <div className={modalStyles.inputWrapper}>
                  <select 
                    className={modalStyles.input}
                    value={destinationPort}
                    onChange={e => setDestinationPort(e.target.value)}
                  >
                    {destinationPortOptions && destinationPortOptions.map((option, i) => (
                      <option key={i} value={option} disabled={i === 0}>{option}</option>
                    ))}
                  </select>
                  {submitted && errors.destinationPort && <p className={modalStyles.errorMessage}>Select a destination port</p>}
                </div>

                <div className={modalStyles.inputWrapper}>
                  <select
                    className={modalStyles.input}
                    value={dateOfShipping}
                    onChange={e => setDateOfShipping(e.target.value)}
                  >
                    {/* <option value='abc' disabled={true} selected={true}>Date Of Shipping</option> */}
                    {shippingDateOptions.map((option : string, i) => (
                      <option key={i} value={option} >{option}</option>
                    ))}
                  </select>
                  {submitted && errors.dateOfShipping && <p className={modalStyles.errorMessage}>Select a shipping Date</p>}
                </div>
              </div>

              {(departurePort === 'None of the above' || destinationPort === 'None of the above') && 
                  <div className="w-full bg-darkBlue my-1 p-6 rounded-md text-white text-lg leading-tight">
                    <p>
                      Sorry, if your destination is not on the list it means we do not have instant quote capabilities available.
                    </p>
                    <p>
                      Please <span 
                        className="font-bold animate-pulse cursor-pointer"
                        onClick={() => showCommercialQuote(true)}
                      >
                        CLICK HERE
                      </span> to submit your request via our request a quote form and one of our team will contact you to discuss pricing and process.
                    </p>
                  </div>
                }

  {/* Make data */}
              <div className={modalStyles.row}>
                <div className={modalStyles.inputWrapper}>
                  <input 
                    className={modalStyles.input}
                    value={make}
                    onChange={e => setMake(e.target.value)}
                    placeholder={vehiclePlaceHolders.make}
                  />
                  {submitted && errors.make && <p className={modalStyles.errorMessage}>Enter a vehicle make</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input 
                    className={modalStyles.input}
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    placeholder={vehiclePlaceHolders.model}
                  />
                  {submitted && errors.model && <p className={modalStyles.errorMessage}>Enter a vehicle model</p>}
                </div>
                <div className={modalStyles.inputWrapper}>
                  <input 
                    className={modalStyles.input}
                    value={year}
                    onChange={handleYearChange}
                    placeholder={vehiclePlaceHolders.year}
                  />
                  {submitted && errors.year && <p className={modalStyles.errorMessage}>Enter the production year</p>}
                </div>
              </div>

  {/* large vehicle data */}
              {vehicleType && ['Large vehicle(18m3+)', 'Boat on trailer', 'Caravan/ Camper trailer', 'Motorhome'].includes(vehicleType) &&
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input  
                      className={modalStyles.input}
                      placeholder="Length in Metres (Eg: 6.42)"
                      value={length}
                      onChange={handleLengthChange}
                    />
                    {submitted && errors.length && <p className={modalStyles.errorMessage}>Enter the vehicle length</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input  
                      className={modalStyles.input}
                      placeholder="Width in Metres (Eg: 6.42)"
                      value={width}
                      onChange={handleWidthChange}
                    />
                    {submitted && errors.width && <p className={modalStyles.errorMessage}>Enter the vehicle width</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input 
                      className={modalStyles.input}
                      placeholder="Height in Metres (Eg: 6.42)"
                      value={height}
                      onChange={handleHeightChange}
                    />
                    {submitted && errors.height && <p className={modalStyles.errorMessage}>Enter the vehicle height</p>}
                  </div>
                </div>
              }

  {/* user details */}

              <div className={modalStyles.sectionWrapper}>
                <h3 className={modalStyles.sectionHeading}>
                  Your Details
                </h3>
                <div className={modalStyles.row}>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder="First Name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                    {submitted && errors.firstName && <p className={modalStyles.errorMessage}>Enter your first name</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder="Last Name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                    {submitted && errors.lastName && <p className={modalStyles.errorMessage}>Enter your last name</p>}
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder="Phone Number"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <div className={modalStyles.inputWrapper}>
                    <input
                      className={modalStyles.input}
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {submitted && errors.email && <p className={modalStyles.errorMessage}>Enter a valid email</p>}
                  </div>
                </div>

  {/* Newsletter and privacy link */}
                <div className={modalStyles.newsLetterWrapper}>
                  <input
                    type='checkbox'
                    checked={newsletter}
                    onChange={e => setNewsletter(e.target.checked)}
                  />
                  <p className="font-medium text-xl">
                    Sign me up for your awesome newsletter!
                  </p>
                </div>
                <p className="text-lg font-medium text-center">
                  Your information is used solely in conjunction with our <Link href={siteMap.privacy.path}>
                    <a className="text-blue-700">Privacy Policy</a>
                  </Link> and is not sold or distributed to any other company.
                </p>
              </div>
              {!sending && !sent
                ? (
                  <button
                    type='submit'
                    className={modalStyles.buttonStyle}
                  >
                    Get Instant Quote
                  </button>
                ) : sending
                  ? <Loader />
                  : <p>Quote generated, you will be redirected in a few seconds</p>
              }
              <p className="font-medium text-lg text-center">
                Planning to ship multiple items at once? <Link href={siteMap.contact.path}>
                  <a className="text-blue-700">Click here</a>
                </Link> to get a custom quote.
              </p>
            </form>
          </div>
        </div>
    </div>
  );
};

export default VehicleQuoteModal;