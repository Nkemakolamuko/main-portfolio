import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    host: "preview.contentful.com",
  });

  const getAuthors = async () => {
    try {
      const response = await client.getEntries({
        content_type: "author",
        select: "fields",
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return { getAuthors };
};

export default useContentful;
