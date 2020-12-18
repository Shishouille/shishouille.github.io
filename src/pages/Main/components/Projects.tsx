import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

import { Element } from "react-scroll";
import { StyledH2 } from "../../../theme/StyledComponents";
import ProjectCard from "./ProjectCard";

import tandemzIcon from "../assets/icons/tandemz.svg";
import theWanderIcon from "../assets/icons/theWander.svg";
import tandemz from "../assets/images/tandemz.png";
import theWander from "../assets/images/theWander.png";

const StyledProjects = styled.section`
  padding: ${theme.gutter};
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media ${theme.mediaRule.tablet} {
    .container {
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
`;

const Projects = () => {
  return (
    <Element name="projects">
      <StyledProjects>
        <StyledH2>Mes projets</StyledH2>
        <div className="container">
          <ProjectCard
            icon={tandemzIcon}
            img={tandemz}
            link="/projets/tandemz/1"
            title="Tandemz"
            color="#FF5533"
          />
          <ProjectCard
            icon={theWanderIcon}
            img={theWander}
            link="/projets/the-wander/1"
            title="The Wander"
            color="#403F82"
          />
        </div>
      </StyledProjects>
    </Element>
  );
};

export default Projects;
