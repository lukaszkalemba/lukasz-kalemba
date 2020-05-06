const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      projects: allDatoCmsProject {
        nodes {
          slug
        }
      }
    }
  `);

  data.projects.nodes.forEach(({ slug }) => {
    createPage({
      path: `/projekty/${slug}`,
      component: path.resolve(
        './src/templates/commons/ProjectTemplate/ProjectTemplate.js'
      ),
      context: {
        slug,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      blog: allDatoCmsBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  data.blog.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(
        './src/templates/commons/BlogPostTemplate/BlogPostTemplate.js'
      ),
      context: {
        slug,
      },
    });
  });
};
