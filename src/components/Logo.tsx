import { PropsWithChildren, type FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
`;

const Logo: FC<PropsWithChildren> = function ({ children }) {
  return (
    <i>
      <StyledLink to="/">
        🌍
        {children}
      </StyledLink>
    </i>
  );
};

export default Logo;
