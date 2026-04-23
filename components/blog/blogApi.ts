import blogData, { BlogItem } from "./blogData";

export const getSnippets = () => {
  return blogData.map(({year, month, date, heading, slug, image, content} : BlogItem) => {
    const firstPara = content.find(item => item.type === 'text');
    const typedPara = firstPara as {type: 'text', content: string};
    const firstText = typedPara.content.split(' ').slice(0, 10);
    firstText.push('...');
    const joinedText = firstText.join(' ');
    const excerpt = joinedText.replace(/<b>(.|\n)*?<\/b>(<[^>]+>)/g, '');

    return {
      year,
      month, 
      date, 
      heading, 
      slug,
      image, 
      snippetText: excerpt
    }
  });
};

export const getPost = (slug : string) => {
  return blogData.find(item => item.slug === slug);
};