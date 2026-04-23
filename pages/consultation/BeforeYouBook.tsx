import React from "react";
import Image from "next/image";

const BeforeYouBook = () => {
  const videos = [
    {
      title: "9 Easy Steps of Importing from China to Australia",
      description: "While this video focuses on China, the process is largely the same for most countries of origin. It covers key responsibilities and the full shipping journey.",
      videoId: "https://www.youtube.com/watch?v=IyccOKS5i30" // Replace with actual YouTube video ID
    },
    {
      title: "Why You Shouldn't Let Your Supplier Organise Your Freight",
      description: "This video explains why letting your supplier handle freight might seem easier, but often leads to less control and more risk on your end.",
      videoId: "https://www.youtube.com/watch?v=JsLYHE69zj4" // Replace with actual YouTube video ID
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-sackHeavy text-darkBlue text-center mb-8">
        Importing from China? Watch These Quick Videos Before You Book
      
        </h2>
        
        {/* <p className="text-center text-lg mb-10">
          To make sure you&apos;re fully informed before proceeding, we recommend watching the following two short videos:
        </p> */}
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {videos.map((video, index) => (
            <div key={index} className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-full aspect-video bg-gray-100 relative mb-4 overflow-hidden rounded-lg">
                <iframe 
                  className="w-full h-full absolute top-0 left-0"
                  src={`${video.videoId.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-darkBlue text-center mb-2">
                {video.title}
              </h3>
              <p className="text-center">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeYouBook; 