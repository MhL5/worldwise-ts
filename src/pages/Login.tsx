import { FormEvent, type FC } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PageContainer = styled.div`
  min-height: 100dvh;
`;
const Container = styled.section`
  height: 70dvh;
  display: grid;
  place-items: center;
`;
const StyledForm = styled.form`
  background-color: var(--color-dark--2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: start;
  padding: 5rem;
  border-radius: 1rem;
`;

const InputBox = styled.div`
  & > label {
    margin-block: 0.9rem;
    display: block;
  }
  & > input {
    border: none;
    color: var(--color-dark--1);
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
  }
`;

const Login: FC = function () {
  const navigate = useNavigate();
  const [, setLogin] = useLocalStorage({ initialState: false, key: `login` });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLogin(true);

    navigate("/application");
  }

  return (
    <PageContainer>
      <PageNav />

      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor="email">Email address </label>
            <input type="email" name="" id="email" />
          </InputBox>

          <InputBox>
            <label htmlFor="password"> Password </label>
            <input type="password" name="" id="password" />
          </InputBox>

          <Button el="button">LOGIN</Button>
        </StyledForm>
      </Container>
    </PageContainer>
  );
};

export default Login;
