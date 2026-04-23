import { ArrowDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

interface Post {
  image: string;
  heading: string;
  text: string;
  linkTo: string;
  aboveFold ?: boolean;
}

interface PostProps {
  post: {
    post: Post
  }
}

interface Props {
  heading: string;
  posts: Post[],
};

const RenderLink = ({post} : {post: Post}) => {

  return (
    <Link href={post.linkTo}>
    <a
      className={`flex flex-col gap-2 hover:text-white hover:bg-darkBlue bg-nearlyWhite text-darkGrey shadow-lg w-80`}
    >
      <div className="w-full aspect-video relative">
        <Image src={post.image} layout='fill' objectFit="cover" alt={post.heading} />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">
          {post.heading}
        </h3>
        <p>
          {post.text}
        </p>
      </div>
    </a>
    </Link>
  );
};

const PostSection = ({
  heading,
  posts,
} : Props) => {

  const [showAll, setShowAll] = useState(false);

  return (
    <section className='w-full flex flex-col items-center py-12'>
      <div className="w-full max-w-5xl flex flex-col gap-4 px-4 items-center">
        <SectionHeading text={heading} />
        <div className="w-full flex flex-row justify-center flex-wrap gap-4">
          {posts.filter(post => showAll ? post : post.aboveFold === true)
            .map((post, i) => (
              <RenderLink post={post} key={i} />
            )
          )}
          {!showAll && 
            <div 
              className="w-full max-w-sm flex flex-row items-center justify-center border-slate-400 border text-xl mt-8 py-2 hover:cursor-pointer hover:bg-slate-200 font-medium gap-4"
              onClick={() => setShowAll(true)}
            >
              SHOW ALL POSTS
              <ArrowDownIcon className="h-6" />
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default PostSection;