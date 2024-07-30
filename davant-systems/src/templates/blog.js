import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MailchimpForm from "../components/MailchimpForm";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import "../styles/global.css"; // Ensure global styles are imported
import "../styles/markdown.css"; // Import the custom Markdown styles

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <MainNav />
      <div className="blog-post-container">
        <Helmet title={`Davant Systems - ${post.frontmatter.title}`} />
        <article className="blog-post">
          <header className="relative pt-32">
            <div className="container relative z-10 p-12 pt-16 mx-auto text-center">
              <h1 className="mb-2 text-4xl font-black">{post.frontmatter.title}</h1>
              <p className="font-thin">Last updated {post.frontmatter.date}</p>
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
            className="container max-w-2xl px-8 py-20 mx-auto markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <div id="newsletterCta" className="bg-base-100">
          <div className="container flex flex-col max-w-4xl px-8 py-10 mx-auto md:flex-row md:items-center">
            <div className="block w-full pt-8 mb-10 md:p-4 md:w-1/2 basis-full">
              <h2 className="mb-8 text-5xl leading-10 text-transparent bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text">
               Join our newsletter
              </h2>
              <div className="pl-1 pr-4 text-cyan-100">
                <p className="mb-1">The best way to get official Davant Systems updates.</p>
                <p>Upcoming product features, events and news.</p>
              </div>
            </div>
            <div className="relative block w-1/2 w-full px-10 pt-5 pb-3 bg-purple-900 border-2 rounded-lg shadow-sm basis-full min-w-sm md:px-4 lg:px-10 bg-opacity-5 border-secondary border-opacity-5 shadow-purple-950">
              <MailchimpForm />
              <div className="bg-overlay
								absolute
								pointer-events-none
								top-0
								left-0
								w-full
								h-full
								z-0
								bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
								from-purple-900
								via-teal-900
								to-black
								opacity-5">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
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
`;