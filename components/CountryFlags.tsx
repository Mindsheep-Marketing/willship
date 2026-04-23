import React from 'react';
import { CircleFlag } from 'react-circle-flags';

interface CountryGridProps {
  countryCodes: string[];
}

const CountryGrid = ({ countryCodes }: CountryGridProps) => {

  const numCols = countryCodes.length;
  
  return (
    <div className={`max-w-2xl grid grid-cols-3 md:grid-cols-6 gap-4`}> 
      {countryCodes.slice(0, numCols).map((code, index) => (
        <div key={index} className="p-2">
         <CircleFlag countryCode={code} />
        </div>
      ))}
    </div>
  );
};

export default CountryGrid;