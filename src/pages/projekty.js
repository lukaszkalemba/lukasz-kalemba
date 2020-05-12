import React from 'react';
import SEO from 'components/common/SEO';
import AllProjects from 'containers/projects-page/AllProjects';

const ProjectsPage = () => {
  return (
    <>
      <SEO title="projekty" />
      <AllProjects />
    </>
  );
};

export default ProjectsPage;
