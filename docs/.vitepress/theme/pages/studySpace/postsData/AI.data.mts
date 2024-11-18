import { createContentLoader } from 'vitepress'

interface Post {
  title?: string
  url: string
  date?: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('studySpace/AI/article/**/*.md', {
  // includeSrc: true, // 包含原始 markdown 源?
  // render: true,     // 包含渲染的整页 HTML?
  excerpt: true,    // 包含摘录?
  transform(raw): Post[] {
    return raw.map(({ url, frontmatter, excerpt }) => {
      // 打印每个文章的 url, frontmatter 和 excerpt
      return {
        title: frontmatter.title,
        url: '/htaoBlog' + url,
        excerpt: frontmatter.excerpt,
        date: formatDate(frontmatter.date)
      }
    })
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }
}

