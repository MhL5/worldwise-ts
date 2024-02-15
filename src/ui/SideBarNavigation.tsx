import { type FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideBarNavigation = styled.nav`
  & > ul {
    --border-radius: 0.5rem;

    display: flex;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.3rem;
    background-color: var(--color-dark--2); // 2 0
    border-radius: var(--border-radius);

    & > li {
      background-color: var(--color-dark--2); // 2 0
      border-radius: var(--border-radius);

      & > a {
        display: block;
        border-radius: var(--border-radius);
        padding: 0.5rem 2rem;

        letter-spacing: 0.1rem;

        &.active {
          border-radius: var(--border-radius);
          background-color: var(--color-dark--0);
        }
      }
    }
  }
`;

const SideBarNavigation: FC = function () {
  return (
    <StyledSideBarNavigation>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
    </StyledSideBarNavigation>
  );
};

export default SideBarNavigation;
