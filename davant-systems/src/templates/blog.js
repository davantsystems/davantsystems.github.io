import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  if (!post) return <div>Post not found</div>

  return (
    <div className="blog-post-container">
      <Helmet title={`Davant Systems - ${post.frontmatter.title}`} />
      <article className="blog-post">
        <header className="container p-12 mx-auto text-center bg-purple-950">
          <h1>{post.frontmatter.title}</h1>
          <p>Published on {post.frontmatter.date}</p>
        </header>
        <div
          className="container px-12 py-20 mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
