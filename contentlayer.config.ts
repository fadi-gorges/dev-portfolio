import { makeSource } from "contentlayer/source-files";

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
