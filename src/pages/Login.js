import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <h3>Git Space</h3>
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
        <img src={loginImg} alt="GitSpace" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    height: 540px;
    width: 600px;
  }
  h3 {
    font-size: 25px;
    font-family: var(--ff-secondary);
    font-weight: 400px;
    margin-bottom: 1rem;
  }
`;

export default Login;
