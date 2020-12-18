import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledLayout = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  background-image: ${theme.backgroundPattern};
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Navbar />
        <Hero />
      </StyledHeader>
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
