import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";


const MapSection = () => {

  const coords = {lat: -27.39126598237559, lng: 153.08207448014238};
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.googleApiKey as string
  });

  const RenderMap = () => {
    return isLoaded 
      ?
        <div className="w-full h-[400px] absolute top-0 left-0 flex justify-center items-center">
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '400px'}}
            center={coords}
            zoom={15}
          >
            <Marker
              position={coords}
            />
          </GoogleMap>
        </div>
      : null;
  };

  return (
    <section className="w-full relative h-[400px]">
      <RenderMap />
      <div className="absolute top-2 left-2 rounded-md bg-white flex flex-col items-start p-3 lg:p-7 mr-2 gap-2 font-medium">
        <div className="flex flex-row justify-start items-center">
          <div className="w-5 h-6 lg:w-10 lg:h-12 relative">
            <Image src='/assets/images/logo.png' layout="fill" objectFit="contain" alt='Willship logo' />
          </div>
          <h2 className="text-darkBlue text-xl lg:text-4xl pl-2">Willship International</h2>
        </div>
        <div className="flex flex-row items-center">
          <LocationMarkerIcon className="h-8 w-8 text-red" />
          <p className="text-base text-grey lg:text-lg">16/853 Nudgee Road, Northgate, QLD 4013</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;