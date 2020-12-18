import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { Link as Scroll, Element } from "react-scroll";

const StyledNavBar = styled.nav`
  text-align: center;
  padding-top: ${theme.gutter};

  .nav-button {
    color: ${theme.colors.secondary};
    margin-left: ${theme.marginBase * 2}px;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 1;
    }
  }
  @media ${theme.mediaRule.tablet} {
    text-align: right;
    padding: ${theme.gutter};
    font-size: ${theme.marginBase * 2}px;
    .nav-button {
      opacity: 0.5;
    }
  }
`;

const Navbar = () => {
  return (
    <Element name="nav">
      <StyledNavBar>
        <Scroll to="me" smooth duration={250}>
          <button className="nav-button">Accueil</button>
        </Scroll>
        <Scroll to="projects" smooth duration={650}>
          <button className="nav-button">Projets</button>
        </Scroll>
        <Scroll to="mini" smooth duration={670}>
          <button className="nav-button">Mini projets</button>
        </Scroll>
      </StyledNavBar>
    </Element>
  );
};

export default Navbar;
