import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { motion } from "framer-motion";

import { Element } from "react-scroll";
import Socials from "./Socials";

const StyledHero = styled(Element)`
  padding: ${theme.gutter};

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    ${theme.fonts.h2}
    font-size: ${theme.marginBase * 5}px;
  }
  h2 {
    ${theme.fonts.p}
    margin-top: ${theme.marginBase * 4}px;
    color: ${theme.colors.white};
  }

  @media ${theme.mediaRule.tablet} {
    padding-top: 0;
    h1 {
      ${theme.fonts.h1}
    }
    h2 {
      ${theme.fonts.label}
    }
  }
`;

const title = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <StyledHero name="me">
      <div>
        <motion.h1
          variants={title}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.5, ease: "easeOut" },
          }}
        >
          Bonjour <br /> je suis Shirin Boomi
        </motion.h1>
        <motion.h2
          variants={title}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.5, ease: "easeOut", delay: 0.5 },
          }}
        >
          Développeuse Web - JS
        </motion.h2>
      </div>
      <Socials />
    </StyledHero>
  );
};

export default Hero;
