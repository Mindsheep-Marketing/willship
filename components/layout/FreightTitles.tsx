import React from 'react';

interface LinkProps {
  link: [{
    path:string,
    link:string
  }
  ]
}

const LinkGrid = ({ link }: LinkProps) => {
  const numCols = link.length;
  return (
    <div className={`max-w-2xl grid grid-cols-3 md:grid-cols-6 gap-4`}> 
      {link.slice(0, numCols).map(({ path, link }, index) => (
        <div className="p-2" key={index}>
            <a>{path}</a>
        </div>
      ))}
    </div>
  );
};

export default LinkGrid;