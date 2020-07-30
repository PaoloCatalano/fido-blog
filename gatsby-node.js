const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      cani: allContentfulCani {
        nodes {
          contentful_id
        }
      }
    }
  `)

  result.data.cani.nodes.forEach(cane => {
    createPage({
        path: `${cane.contentful_id}`,
      component: path.resolve(`src/templates/cane-template.js`),
      context: {
          contentful_id: cane.contentful_id,
      },
    })
  })
}
