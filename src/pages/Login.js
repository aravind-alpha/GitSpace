import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";

const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="GitSpace" />
        <h2>Git-Space</h2>
        <button className="btn">Login</button>
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
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
