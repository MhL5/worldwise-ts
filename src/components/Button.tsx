import { ComponentPropsWithoutRef, ReactNode, type FC } from "react";
import { Link } from "react-router-dom";
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
    color: var(--color-dark--0) !important;
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

type Button = {
  el: "button";
  to?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type Anchor = {
  el: "a";
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type ButtonType = Button | Anchor;

const Button: FC<ButtonType> = function (props) {
  if (props.el === "a") {
    // el can cause react console errors in DOM so we have to destructure it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { el, to, ...otherProps } = props;

    return (
      <StyledLink to={to} {...otherProps}>
        {props.children}
      </StyledLink>
    );
  }

  // el can cause react console errors in DOM so we have to destructure it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { el, ...otherProps } = props;

  return <StyledButton {...otherProps}> {props.children} </StyledButton>;
};

export default Button;
