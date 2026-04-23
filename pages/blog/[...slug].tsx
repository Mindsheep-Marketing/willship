import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPost } from "../../components/blog/blogApi";
import { BlogItem } from "../../components/blog/blogData";
import RenderBlogImage from "../../components/commercial/RenderBlogImage";
import RenderBlogList from "../../components/commercial/RenderBlogList";
import RenderBlogText from "../../components/commercial/RenderBlogText";
import RenderSubHeading from "../../components/commercial/RenderSubHeading";
import siteMap from "../../siteMap";

const BlogPage = ({post} : {post: BlogItem}) => {

  return (
    <>
      <Head>
        <title>{siteMap.blog.title}</title>
        <meta name='description' content={siteMap.blog.description} />
      </Head>
      <main>
        <div className="w-full flex flex-col items-center bg-nearlyWhite py-12 px-4">
          <div className="flex flex-row gap-2 pt-10 mt-12 sm:gap-4 text-darkBlue font-medium text-sm sm:text-xl items-center">
            <Link href='/'>
              <a className="font-bold">HOME</a>
            </Link>
            <p>&gt;</p>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </div>
          <div className="w-full max-w-5xl flex flex-col gap-4 pt-4 text-lg md:text-xl">
            {post &&
              <>
                <div className="w-full aspect-video relative">
                  <Image src={post.image} layout='fill' objectFit="cover" alt={post.heading} />
                  <div className="flex flex-col items-center absolute -top-2 left-2 bg-red text-white font-light py-1 px-3">
                    <p>{post.month}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-forty font-medium text-darkBlue text-center max-w-4xl mx-auto leading-tight">{post.heading}</h2>
                <p className="text-base font-semibold">Published {post.date} {post.month} {post.year}</p>
                {post.content.map((item, i) => {
                  return (
                    <div key={i}>
                      {item.type === 'text'
                        ? <RenderBlogText text={item.content as string} />
                        : item.type === 'list'
                          ? <RenderBlogList list={item.content as string[]} />
                          : item.type === 'subHeading'
                            ? <RenderSubHeading subHeading={item.content as string} />
                            : <RenderBlogImage alt={post.heading} image={item.content as string} />
                      }
                    </div>
                  )
                })}
              </>
            }
          </div>
        </div>
      </main>
    </>
  )
};

export default BlogPage;

export async function getServerSideProps({params} : any) {

  const post = getPost(params.slug[0]);
  
  return {
    props: {
      post
    }
  };
};