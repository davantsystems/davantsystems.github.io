import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import MainNav from '../components/MainNav'
import Footer from "../components/Footer"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  if (!post) return <div>Post not found</div>

  return (
    <>
      <MainNav />
      <div className="blog-post-container">
        <Helmet title={`Davant Systems - ${post.frontmatter.title}`} />
        <article className="blog-post">
          <header className="relative pt-32">
            <div className="container relative z-10 p-12 pt-16 mx-auto text-center">
              <h1 className="mb-2 text-4xl font-black">{post.frontmatter.title}</h1>
              <p className="font-thin">Published on {post.frontmatter.date}</p>
            </div>
            <div className="absolute bottom-0 z-0 block h-full min-w-full -translate-x-1/2 opacity-100 pointer-events-none select-none background-image left-1/2 z-1">
              <StaticImage
                className="relative block h-full opacity-50 hero__background-image"
                src="../images/hero2.png"
                quality={100}
                placeholder="blurred"
                layout="fullWidth"
                loading="eager"
                objectFit="cover"
                objectPosition="center bottom"
                alt="Abstract color gradient from pink to dark purple" />
              <div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
            </div>
          </header>
          <div
            className="container max-w-2xl px-8 py-20 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
      <Footer />
    </>
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
