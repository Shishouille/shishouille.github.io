import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

import { Link as Scroll } from "react-scroll";
import Icon from "../../../components/Icon";
import arrow from "../../../assets/icons/arrow-up.svg";

const StyledFooter = styled.footer`
  text-align: right;
  padding: ${theme.gutter};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Scroll to="nav" smooth duration={700}>
        <Icon icon={arrow} animation="jump" />
      </Scroll>
    </StyledFooter>
  );
};

export default Footer;
