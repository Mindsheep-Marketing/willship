import parse from 'html-react-parser';

const RenderBlogList = ({list, listType} : {list: string[], listType ?: 'dots' | 'numbers'}) => {
  return (
    <ul className={`${listType === 'dots' ? 'list-disc' : 'list-decimal'} list- pl-10`}>
      {list.map((item, i) => (
        <li key={i}>
          {parse(item)}
        </li>
      ))}
    </ul>
  )
};

export default RenderBlogList;