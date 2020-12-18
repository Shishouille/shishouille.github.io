import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import { motion } from "framer-motion";

const animations = {
  jump: {
    y: [0, -5, 0],
  },
  fade: {},
};

const transitions = {
  jump: {
    duration: 0.7,
    loop: Infinity,
    ease: "easeOut",
  },
  fade: {},
};

const whileHover = {
  jump: {},
  fade: {
    opacity: 1,
  },
};

interface Props {
  icon: string;
  alt?: string;
  animation?: "jump" | "fade";
}

const StyledIcon = styled(motion.img)<{
  name: Props["animation"];
}>`
  width: ${theme.iconSize};
  height: ${theme.iconSize};
  ${(props) => props.name === "fade" && "opacity: 0.5"}
`;

const Icon = ({ icon, alt, animation }: Props) => {
  const iconAnimation = animation && animations[animation];
  const iconTransition = animation && transitions[animation];
  const iconHover = animation && whileHover[animation];

  return (
    <StyledIcon
      src={icon}
      alt={alt || "icône"}
      animate={iconAnimation}
      transition={iconTransition}
      whileHover={iconHover}
      name={animation}
    />
  );
};

export default Icon;
