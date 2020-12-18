import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import defaultIcon from "../assets/icons/default.svg";

const CARD_WIDTH_SMALL = theme.marginBase * 30;
const CARD_HEIGHT_SMALL = theme.marginBase * 40;

const CARD_WIDTH_LARGE = theme.marginBase * 60;
const CARD_HEIGHT_LARGE = theme.marginBase * 30;

const StyledProjectCard = styled(motion.div)<{ color: string }>`
  position: relative;
  margin: ${theme.marginBase * 3}px;

  .presentation {
    width: ${CARD_WIDTH_SMALL}px;
    height: ${CARD_HEIGHT_SMALL}px;
    object-fit: cover;
    margin: auto;
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    transition: box-shadow 0.1s ease-in;
    &:hover {
      box-shadow: ${theme.boxShadowHover};
    }
  }
  .icon {
    position: absolute;
    z-index: 3;
    width: ${theme.marginBase * 6}px;
    height: ${theme.marginBase * 6}px;
    top: -${theme.marginBase * 2}px;
    left: -${theme.marginBase * 2}px;
  }
  @media ${theme.mediaRule.tablet} {
    .presentation {
      width: ${CARD_WIDTH_LARGE}px;
      height: ${CARD_HEIGHT_LARGE}px;
    }
    &::after {
      content: "";
      box-shadow: ${theme.boxShadow};
      border-radius: ${theme.borderRadius};
      position: absolute;
      bottom: ${theme.marginBase}px;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scaleY(0);
      transform-origin: bottom center;
      background: ${(props) => props.color};
      transition: transform 0.2s ease-in-out;
      z-index: 1;
    }
    &:hover::after,
    &:hover .title {
      transform: scaleY(1);
    }

    .icon {
      width: ${theme.marginBase * 10}px;
      height: ${theme.marginBase * 10}px;
    }
  }
`;

const StyledTitle = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: ${CARD_WIDTH_SMALL}px;
  height: ${CARD_HEIGHT_SMALL}px;
  text-align: center;
  top: 0;
  z-index: 2;
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${theme.colors.white};
  h3 {
    ${theme.fonts.h2}
    background: ${(props) => props.color};
    padding: ${theme.marginBase / 2}px;
  }
  @media ${theme.mediaRule.tablet} {
    width: ${CARD_WIDTH_LARGE}px;
    height: ${CARD_HEIGHT_LARGE}px;
    transform: scaleY(0);
    transform-origin: bottom center;
  }
`;

interface Props {
  icon?: string;
  img: string;
  title: string;
  link: string;
  color?: string;
}

const ProjectCard = ({ icon, img, title, link, color }: Props) => {
  return (
    <StyledProjectCard whileHover={{ scale: 1.03 }} color={color || "#54566B"}>
      <Link to={link}>
        <img
          className="icon"
          src={icon || defaultIcon}
          alt={`icone_${title}`}
        />
        <img className="presentation" src={img} alt={title} />
        <StyledTitle className="title" color={color || "#54566B"}>
          <h3>{title}</h3>
        </StyledTitle>
      </Link>
    </StyledProjectCard>
  );
};

export default ProjectCard;
