import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
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
                <header className="relative p-12 pt-32 mx-auto text-center">
                    <div className="relative z-10 pt-16">
                        <h1 className="text-4xl font-black">Articles</h1>
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
                <div className="container max-w-lg px-8 mx-auto">
                    <div className="pt-12 mb-12 post">
                        {posts
                            .filter(post => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                                return (
                                    <div className="flex blog-post-preview" key={post.id}>
                                        <div className="relative image">
                                            {/* {imagePath && (                                            
                                                <StaticImage
                                                    src="../images/hero2.png"
                                                    quality={80}
                                                    placeholder="blurred"
                                                    layout="fullWidth"
                                                    loading="eager"
                                                    objectFit="cover"
                                                    objectPosition="center bottom"
                                                    alt="Abstract color gradient from pink to dark purple" />
                                            )} */}
                                        </div>
                                        <div className="content">
                                            <h2 className="mb-2 text-3xl font-extrabold">
                                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                            </h2>
                                            <p className="mb-4 italic font-thin text-md">{post.frontmatter.date}</p>
                                            <p>{post.excerpt}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Articles
