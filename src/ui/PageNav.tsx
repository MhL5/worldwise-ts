import { type FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledNav = styled.nav`
  padding: 2rem;
`;
const StyledUList = styled.ul`
  display: flex;
  align-items: center;

  text-transform: capitalize;
  font-size: 2rem;
  gap: 4rem;
  padding: 2rem;
  margin: 1rem;
  margin-top: 0;
`;
const ApplicationList = styled.li`
  margin-right: auto;
`;
const LoginList = styled(NavLink)`
  display: inline-block;
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.7rem 2rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  transition: 300ms;

  &.active {
    color: var(--color-dark--0) !important;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }
`;
const StyleNavLink = styled(NavLink)`
  &.active {
    color: var(--color-brand--2);
  }
`;

const PageNav: FC = function () {
  return (
    <StyledNav>
      <StyledUList>
        <ApplicationList>
          <Logo>WorldWise</Logo>
        </ApplicationList>
        <li>
          <StyleNavLink to="/pricing">pricing</StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/product">product</StyleNavLink>
        </li>
        <li>
          <LoginList to="/login">login</LoginList>
        </li>
      </StyledUList>
    </StyledNav>
  );
};

export default PageNav;
