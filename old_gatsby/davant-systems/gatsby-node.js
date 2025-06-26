const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const pagePath = node.frontmatter.path
        if (pagePath) {
            createPage({
                path: pagePath,
                component: blogPostTemplate,
                context: {
                    path: pagePath,
                },
            })
        }
    })
}