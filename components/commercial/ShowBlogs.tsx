import { ArrowDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSnippets } from "../api/blogApi";
import siteMap from "../../siteMap";
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

const ShowBlogs = ({ directory, title, subHeading, bg }: { directory?: string, title?: string, subHeading?: boolean, bg?: string }) => {
  const router = useRouter();
  const { pathname } = useRouter();
  const [blogs, setBlogs] = useState<BlogSnippet[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setBlogs(getSnippets({ showAll, directory }));
  }, [showAll, directory]);

  const BlogCard = ({ data }: { data: BlogSnippet }) => (
    <Link href={`/freight-forwarder/${directory == 'success-stories' ? directory + '/' : 'freight-blog/'}${data.slug}`}>
      <a className="flex flex-row w-full sm:w-1/2 lg:w-1/3 p-2 items-stretch group">
        <div className={'flex flex-col w-full items-center text-center group-hover:bg-darkBlue ' + (bg == 'bg-white' ? 'bg-nearlyWhite' : 'bg-white')}>
          <div className="w-full aspect-video relative">
            <Image src={data.image} layout="fill" objectFit="cover" alt={data.heading} />
            <div className="absolute top-2 -left-2 flex flex-col bg-red text-white font-light py-1 px-3">
              <p>{data.month}</p>
              <p>{data.date}</p>
            </div>
          </div>
          <div className='flex flex-col items-center p-2 gap-2 leading-snug'>
            <h3 className="text-2xl group-hover:text-white text-darkBlue font-medium leading-none">
              {data.heading}
            </h3>
            <div className="w-full h-8 relative">
              <Image src="/assets/images/dividers/wtwi.png" layout="fill" objectFit="contain" alt="" />
            </div>
            <p className="text-darkGrey text-xl group-hover:text-white">{data.snippetText}</p>
          </div>
        </div>
      </a>
    </Link>
  );

  return (
    <SectionSection bgColour={bg || 'bg-nearlyWhite '}>
      {(title || subHeading) && <h2 className="text-darkBlue text-3xl lg:text-forty text-center font-medium pb-6">{title || "Blogs"}</h2>}
      <div className="flex flex-row flex-wrap w-full gap-y-4 justify-center">
        {pathname == siteMap.chinaToAustralia.path ? blogs.slice(0, 3).map((blog, i) => (
          <BlogCard data={blog} key={i} />
        )) : blogs.map((blog, i) => (
          <BlogCard data={blog} key={i} />
        ))}
      </div>
      {(!showAll && blogs.length >= 6 && !(router.pathname === '/freight-forwarder/education-hub') && pathname !== siteMap.chinaToAustralia.path ) ? (
        <div
          className="w-full max-w-sm flex flex-row items-center justify-center border-slate-400 border text-xl mt-8 py-2 hover:cursor-pointer hover:bg-slate-200 font-medium gap-4"
          onClick={() => setShowAll(true)}
        >
          SHOW ALL POSTS
          <ArrowDownIcon className="h-6" />
        </div>
      ) : !(directory == 'success-stories') || pathname == siteMap.chinaToAustralia.path && (
        <div className='w-full sm:w-72 mt-6'>
          <Button
            theme='redBlue'
            linkTo={siteMap.commercial.freightBlog.path}
            buttonText={'View All Blogs'}
          />
        </div>
      )}
    </SectionSection>
  );
};

export default ShowBlogs;
