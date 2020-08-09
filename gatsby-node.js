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

  const projects = await graphql(`
    {
      projects: allDatoCmsProject {
        nodes {
          slug
        }
      }
    }
  `);

  const blogPosts = await graphql(`
    {
      blog: allDatoCmsBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  projects.data.projects.nodes.forEach(({ slug }) => {
    createPage({
      path: `/projekty/${slug}`,
      component: path.resolve('./src/templates/ProjectPageTemplate.js'),
      context: {
        slug,
      },
    });
  });

  blogPosts.data.blog.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve('./src/templates/BlogPageTemplate.js'),
      context: {
        slug,
      },
    });
  });
};
