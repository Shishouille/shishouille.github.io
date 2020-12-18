import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

import { StyledH2 } from "../../../theme/StyledComponents";
import { Element } from "react-scroll";
import MiniProjectCard from "./MiniProjectCard";

const StyledMiniProjects = styled.section`
  padding: ${theme.gutter};
`;

const MiniProjects = () => {
  return (
    <Element name="mini">
      <StyledMiniProjects>
        <StyledH2>Mes mini projets</StyledH2>
        <MiniProjectCard
          title="Mon précédent portfolio"
          description="Stack : GatsbyJS - styled-components"
          github="https://github.com/Shishouille/static-portfolio"
          link="https://shirin-boomi.now.sh/"
        />
      </StyledMiniProjects>
    </Element>
  );
};

export default MiniProjects;
