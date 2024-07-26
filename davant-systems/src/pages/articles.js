import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

const Articles = () => {
    const data = useStaticQuery(graphql`
    query {
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
  `)

    const { edges: posts } = data.allMarkdownRemark
    return (
        <main>
            <Helmet title="Articles" />
            <h1>Blog Posts</h1>
            <div className="posts">
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div className="blog-post-preview" key={post.id}>
                                <h1>
                                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                </h1>
                                <h2>{post.frontmatter.date}</h2>
                                <p>{post.excerpt}</p>
                            </div>
                        )
                    })}
            </div>
        </main>
    )
}

export default Articles
