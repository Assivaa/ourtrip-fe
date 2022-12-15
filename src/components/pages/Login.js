import React from "react";
import "../../App.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { Alert } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  return (
    // Make form validation for login
    <>
      <LoginContainer>
        <div className="login-container">
          <h1>Login</h1>
          <LForm
            onSubmit={(e) => {
              e.preventDefault();
              if (
                e.target.email.value === "" ||
                e.target.password.value === ""
              ) {
                alert("Please fill out all fields");
                return;
              } else {
                alert("Login successful");
                navigate("/");
              }
            }}
          >
            <LLabel htmlFor="email">Email</LLabel>
            <LInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <LLabel htmlFor="password">Password</LLabel>
            <LInput
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <LButton type="submit">Login</LButton>
          </LForm>
          <P>
            Don't have an account? <LLink to="/sign-up">Sign Up</LLink>
          </P>
        </div>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 400px;
    padding: 40px;
    background: #fff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

const LForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

const LButton = styled.button`
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
  background: blue;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: darkblue;
    color: #fff;
    border: 1px solid #eee;
  }
`;

const LLabel = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

const LLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  &:hover {
    color: darkblue;
  }
`;

const P = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
