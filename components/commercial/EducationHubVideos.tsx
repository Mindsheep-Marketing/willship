// YouTubeGrid.js
import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/solid';

interface Props {
  title?: string;
  padding?: string;
  data: {
    title: string;
    link: string;
  }[]
}

const YouTubeGrid = ({ 
  title = "Willship Academy Videos",
  padding = "py-12 px-4",
  data 
} : Props) => {
  const [visibleVideos, setVisibleVideos] = useState(3);
  
  const allVideos = data;
  const totalVideos = data.length;

  const visibleVideosData = allVideos.slice(0, visibleVideos);

  const handleLoadMore = () => {
    setVisibleVideos((prevVisibleVideos) => Math.min(prevVisibleVideos + 3, allVideos.length));
  };

  const isLoadMoreVisible = visibleVideos < allVideos.length;

  return (
    <section className={`w-full flex flex-col items-center ${padding}`}>
      <h2 className="text-darkBlue text-3xl lg:text-forty text-center font-medium pb-6">{title}</h2>
      <div className="w-full max-w-5xl flex flex-row flex-wrap justify-center">
        {visibleVideosData.map((video, index) => (
          <div key={index} className="relative overflow-hidden w-full sm:w-1/3 px-2 mb-4">
            <div className="plyr__video-embed">
              <iframe
                title={video.title}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-xl text-darkBlue font-medium leading-none text-center mt-3">{video.title}</div>
          </div>
        ))}
      </div>

      {totalVideos > 3 && (
        <div className="col-span-3 w-full sm:w-72 flex justify-center mt-4">
          {isLoadMoreVisible && (
            <button
              onClick={handleLoadMore}
              className="w-full max-w-sm flex flex-row items-center justify-center border-slate-400 border text-xl mt-8 py-2 hover:cursor-pointer hover:bg-slate-200 font-medium gap-4"
            >
              View More
              <ArrowDownIcon className="h-6" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default YouTubeGrid;
