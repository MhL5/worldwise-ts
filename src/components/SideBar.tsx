import { type FC } from "react";
import SideBarNavigation from "./SideBarNavigation";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-dark--1) !important;

  & > i {
    margin-top: 3rem;
    font-size: 8rem;
  }
`;
// Cities Countries Forms
const SideBar: FC = function () {
  return (
    <StyledSideBar>
      <Logo />
      <SideBarNavigation />

      <Outlet />
    </StyledSideBar>
  );
};

export default SideBar;
