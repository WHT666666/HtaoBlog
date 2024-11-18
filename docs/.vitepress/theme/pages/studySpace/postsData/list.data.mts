import { createContentLoader } from "vitepress";

interface Post {
  title?: string;
  url: string;
  date?: {
    time: number;
    string: string;
  };
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("studySpace/**/*.md", {
  // includeSrc: true, // 包含原始 markdown 源?
  // render: true,     // 包含渲染的整页 HTML?
  excerpt: true, // 包含摘录?
  transform(raw): Post[] {
    console.log("raw", raw);
    
    return raw
      .filter((it) => it.frontmatter.layout === "article")
      .map((it) => {
        return {
          title: it.frontmatter.name,
          url: '/htaoBlog' + it.url,
          date: it.frontmatter.date || "",
          excerpt: it.frontmatter.desc,
        };
      });
  },
});
