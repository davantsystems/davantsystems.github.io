import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

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
        <>
            <MainNav />
            <main>
                <Helmet title="Articles" />
                <header className="p-12 pt-32 mx-auto text-center bg-purple-950">
                    <h1>Blog Posts</h1>
                </header>
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
            <Footer />
        </>
    )
}

export default Articles
