// blogApi.ts
import blogData, { BlogItem } from "./blogData";

interface GetSnippetsParams {
  showAll: boolean;
  directory?: 'success-stories' | string; // Update the type here
}


export const getSnippets = ({ showAll, directory }: GetSnippetsParams) => {
  let filteredBlogData = blogData
    .filter((blog) => {
      if (directory && blog.directory) {
        // Use type assertion to avoid type error
        return (blog.directory as string[]).includes(directory as 'success-stories');
      }
      // If directory is not specified, only include blogs without any directory
      return !directory && (!blog.directory || (blog.directory as string[]).length === 0);
    })
    .map(({ year, month, date, heading, slug, image, content }: BlogItem) => {
      const firstPara = content.find((item) => item.type === 'text');
      const typedPara = firstPara as { type: 'text'; content: string };
      const plainText = typedPara.content.replace(/<[^>]*>/g, ''); // Remove HTML tags
      const firstText = plainText.split(' ').slice(0, 10);
      firstText.push('...');
      const joinedText = firstText.join(' ');
      const excerpt = joinedText;
      

      return {
        year,
        month,
        date,
        heading,
        slug,
        image,
        snippetText: excerpt,
      };
    });

  if (!showAll) {
    filteredBlogData = filteredBlogData.slice(0, 6);
  }

  return filteredBlogData;
};

export const getPost = (slug: string) => {
  return blogData.find((item) => item.slug === slug);
};
