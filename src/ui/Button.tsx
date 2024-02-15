import { type ComponentPropsWithoutRef, type ReactNode, type FC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const stylesString = `
  display: inline-block;
  border:none;
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  transition: 300ms;

  &.active {
    color: var(--color-dark--0);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }`;
const StyledButton = styled.button`
  ${stylesString}
`;
const StyledLink = styled(Link)`
  ${stylesString}
`;
const StyledNavLink = styled(NavLink)`
  ${stylesString}
  color: var(--color-light--2);

  &.active {
    background-color: var(--color-dark--0);
    color: var(--color-light--2);
  }
`;

type Button = {
  el: "button";
  to?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type Link = {
  el: "link";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type NavLink = {
  el: "NavLink";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type ButtonType = Button | Link | NavLink;

const Button: FC<ButtonType> = function (props) {
  if (props.el === "link") {
    // el can cause react console errors in DOM so we have to destructure it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { el, to, ...otherProps } = props;

    return (
      <StyledLink to={to} {...otherProps}>
        {props.children}
      </StyledLink>
    );
  }

  if (props.el === "NavLink") {
    // el can cause react console errors in DOM so we have to destructure it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { el, to, ...otherProps } = props;

    return (
      <StyledNavLink to={to} {...otherProps}>
        {props.children}
      </StyledNavLink>
    );
  }

  // el can cause react console errors in DOM so we have to destructure it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { el, ...otherProps } = props;

  return <StyledButton {...otherProps}> {props.children} </StyledButton>;
};

export default Button;
