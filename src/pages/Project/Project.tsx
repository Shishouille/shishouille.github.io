import React from "react";
import { Redirect, useParams } from "react-router-dom";

import ProjectLayout from "./components/ProjectLayout";

import { Project as ProjectInterface, projectsData } from "./dataset/projects";

const Project = () => {
  const params = useParams<{
    project?: keyof typeof projectsData;
    index?: string;
  }>();
  const key = params.project;
  const index = Number(params.index);

  if (!key || !index) {
    return <Redirect to="/" />;
  }

  const project: ProjectInterface = projectsData[key][index - 1];

  return (
    <ProjectLayout
      img={project.img}
      alt={project.alt}
      title={project.title}
      description={project.description}
      toPrevious={project.toPrevious}
      toNext={project.toNext}
      link={project.link}
      key={project.title}
    />
  );
};

export default Project;
