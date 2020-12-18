import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

import Icon from "../../../components/Icon";

import githubIcon from "../../../assets/icons/github.svg";
import linkIcon from "../../../assets/icons/link.svg";

const StyledMiniProjectCard = styled.div`
  width: fit-content;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  padding: ${theme.marginBase * 2}px;
  box-shadow: ${theme.boxShadow};
  background: ${theme.colors.primary};
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    opacity: 0.4;
    border: 2px solid ${theme.colors.secondary};
    transition: opacity 0.5s ease-in;
  }
  &:hover::before {
    opacity: 1;
  }

  .links {
    margin-top: ${theme.marginBase * 2}px;
    text-align: right;
    a {
      margin-left: ${theme.marginBase * 2}px;
      display: inline-block;
    }
  }
`;

interface Props {
  title: string;
  description: string;
  github?: string;
  link?: string;
}

const MiniProjectCard = ({ title, description, github, link }: Props) => {
  return (
    <StyledMiniProjectCard>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {(github || link) && (
        <div className="links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <Icon icon={githubIcon} animation="fade" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              <Icon icon={linkIcon} animation="fade" />
            </a>
          )}
        </div>
      )}
    </StyledMiniProjectCard>
  );
};

export default MiniProjectCard;
