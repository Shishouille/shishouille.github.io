import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Project } from "../dataset/projects";

import arrowLeft from "../../../assets/icons/arrow-left.svg";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";

const StyledLayout = styled.main<{ loading: boolean }>`
  /* BUTTONS */
  .button-container {
    width: 34px;
  }
  .button {
    border-radius: ${theme.marginBase * 2}px;
    padding: ${theme.marginBase}px;
    margin-top: ${theme.marginBase}px;
    margin-bottom: ${theme.marginBase}px;

    border: 1px solid ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-size: 14px;
    opacity: 0.8;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 1;
    }
  }
  .arrow {
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: center;
    img {
      width: ${theme.marginBase * 2}px;
      height: ${theme.marginBase * 2}px;
    }
  }

  .back {
    img {
      margin-right: ${theme.marginBase}px;
    }
  }

  .discover {
    padding: ${theme.marginBase * 2}px;
    width: auto;
  }

  .next {
    text-align: end;
    transform: rotate(0.5turn);
  }

  /* DISPLAY */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .left,
  .right {
    width: 100%;
    height: 100vh;
  }

  /* LEFT SIDE */
  .left {
    .img-placeholder {
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      ${(props) => !props.loading && "display: none"}
    }
    img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
      ${(props) => props.loading && "display: none"}
    }
  }

  /* RIGHT SIDE */
  .right {
    padding: ${theme.gutter};
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    background-image: ${theme.backgroundPattern};
    color: ${theme.colors.white};
    overflow-y: auto;

    .article {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: ${theme.gutter};
      h1 {
        ${theme.fonts.h3}
        color: ${theme.colors.secondary};
        margin-bottom: ${theme.marginBase * 3}px;
        text-align: center;
      }
      h4 {
        ${theme.fonts.h4}
      }
      p {
        ${theme.fonts.p}
        margin-bottom: ${theme.marginBase * 2}px;
      }
    }
    .top-nav {
      margin-left: ${theme.marginBase * 2}px;
      margin-right: ${theme.marginBase * 2}px;
    }
    .footer-nav {
      margin-left: ${theme.marginBase * 2}px;
      margin-right: ${theme.marginBase * 2}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }

  @media ${theme.mediaRule.tablet} {
    flex-direction: row;
    .left,
    .right {
      width: 50%;
    }
    .right {
      padding: ${theme.gutter};
    }
    .article {
      padding: 0;
      h1 {
        ${theme.fonts.h2}
      }
      h4 {
        ${theme.fonts.h4}
      }
      p {
        ${theme.fonts.p}
      }
    }
  }
`;

const titleVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  hiddenTitle: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProjectLayout = ({
  img,
  alt,
  description,
  title,
  toPrevious,
  toNext,
  link,
}: Project) => {
  const [loading, setLoading] = useState(true);
  return (
    <StyledLayout loading={loading}>
      <div className="left">
        <div className="img-placeholder">
          <Loader />
        </div>
        <img src={img} alt={alt || title} onLoad={() => setLoading(false)} />
      </div>
      <div className="right">
        <nav className="top-nav">
          <Link className="button arrow back" to="/">
            <Icon icon={arrowLeft} />
            Retour
          </Link>
        </nav>
        <motion.article
          variants={titleVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.5, ease: "easeOut" },
          }}
          className="article"
        >
          <motion.h1
            variants={titleVariant}
            initial="hiddenTitle"
            animate="visible"
            transition={{
              default: { duration: 0.5, ease: "easeOut" },
            }}
          >
            {title}
          </motion.h1>
          {typeof description === "string" ? <p>{description}</p> : description}
        </motion.article>
        {(toPrevious || toNext || link) && (
          <nav className="footer-nav">
            <div className="button-container">
              {toPrevious && (
                <Link to={toPrevious} className="button arrow">
                  <Icon icon={arrowLeft} />
                </Link>
              )}
            </div>
            <div className="button-container discover">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="button discover"
                >
                  Découvrir
                </a>
              )}
            </div>
            <div className="button-container">
              {toNext && (
                <Link to={toNext} className="button arrow next">
                  <Icon icon={arrowLeft} />
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </StyledLayout>
  );
};

export default ProjectLayout;
