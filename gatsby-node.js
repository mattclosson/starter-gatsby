const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const mixTemplate = path.resolve('./src/templates/mix.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
        allContentfulMixes {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes
  const mixes = result.data.allContentfulMixes.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  if (mixes.length > 0) {
    mixes.forEach((mix, index) => {
      createPage({
        path: `/mix/${mix.slug}/`,
        component: mixTemplate,
        context: {
          slug: mix.slug
        },
      })
    })
  }
}
