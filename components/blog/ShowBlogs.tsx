import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSnippets } from "../blog/blogApi";
import SectionSection from "../common/SectionSection";

interface BlogSnippet {
  year: number;
  month: string; 
  date: number; 
  heading: string;
  slug: string;
  image: string; 
  snippetText: string;
}

const ShowBlogs = () => {

  const [blogs, setBlogs] = useState <BlogSnippet[]> ([]);

  useEffect(() => {
    setBlogs(getSnippets())
  }, []);

  const BlogCard = ({data} : {data: BlogSnippet}) => (
    <Link href={`/blog/${data.slug}`}>
      <a className="flex flex-row w-full sm:w-1/2 lg:w-1/3 p-2 items-stretch group">
        <div className="flex flex-col w-full items-center text-center group-hover:bg-darkBlue bg-white">
          <div className="w-full aspect-video relative">
            <Image src={data.image} layout='fill' objectFit="cover" alt={data.heading} />
            <div className="absolute top-2 -left-2 flex flex-col bg-red text-white font-light py-1 px-3">
              <p>{data.month}</p>
              <p>{data.date}</p>

            </div>
          </div>
          <div className="flex flex-col items-center p-2 gap-2 leading-snug">
            <h3 className="text-2xl group-hover:text-white text-darkBlue font-medium leading-none">
              {data.heading}
            </h3>
            <div className="w-full h-8 relative">
              <Image src='/assets/images/dividers/wtwi.png' layout='fill' objectFit="contain" alt='' />
            </div>
            <p className="text-darkGrey text-xl group-hover:text-white">
              {data.snippetText}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
  
  return (
    <SectionSection bgColour='bg-nearlyWhite'>
      <div className="flex flex-row flex-wrap w-full gap-y-4 justify-center">
        {blogs.map((blog, i) => (
          <BlogCard data={blog} key={i} />
        ))}
      </div>
    </SectionSection>
  );
};

export default ShowBlogs;