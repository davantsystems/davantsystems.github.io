import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Posts({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <div className="relative z-10 pt-16">
                <h1 className="text-4xl font-black">
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
              </div>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query indexQueryAndIndexQueryAndIndexQueryAndIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
