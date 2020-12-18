import styled from "styled-components";
import { theme } from "./theme";

export const StyledH2 = styled.h2`
  ${theme.fonts.h4}
  color: ${theme.colors.white};
  margin-bottom: ${theme.marginBase * 4}px;
  @media ${theme.mediaRule.tablet} {
    ${theme.fonts.h2}
  }
`;
