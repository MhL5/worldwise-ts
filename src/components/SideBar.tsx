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

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 3rem;
    margin-inline: auto;

    font-size: 2.5rem;

    > h2,
    i {
      margin: 1rem;
    }
    > i {
      font-size: 6rem;
    }
  }
`;
// Cities Countries Forms
const SideBar: FC = function () {
  return (
    <StyledSideBar>
      <div>
        <Logo /> <h2> WorldWise</h2>
      </div>
      <SideBarNavigation />

      <Outlet />
    </StyledSideBar>
  );
};

export default SideBar;
