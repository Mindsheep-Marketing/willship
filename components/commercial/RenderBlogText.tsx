//@ts-ignore
import Linkify from 'react-linkify';
import Link from 'next/link';
import parse from 'html-react-parser';


const RenderBlogText = ({text} : {text: string}) => {

  const componentDecorator = (href : string, text : string) => (
    <Link key={href} href={href}>
      <a target='_blank'>{text}</a>
    </Link>
  );
  
  return (
    <p><Linkify componentDecorator={componentDecorator}>{parse(text)}</Linkify></p>
  )
};

export default RenderBlogText;