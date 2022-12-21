import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import { signup } from "../../redux/actions/auth";
import { Alert } from "react-bootstrap";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("Please fill out all fields");
    } else {
      dispatch(signup(firstName, lastName, email, password))
      .then(() => {
        setSuccess(true);
        alert("Sign up successful");
        navigate("/login");
      })
      .catch(() => {
        setSuccess(false);
      });
    }
  };

  return (
    <>
      <SignUpContainer>
        <div className="signup-container">
          <h1>Sign Up</h1>
        {!success && (
          <SForm>
          <SLabel htmlFor="firstName">First Name</SLabel>
          <SInput
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChangeFirstName}
            placeholder="Enter your first name"
          />
          <SLabel htmlFor="lastName">Last Name</SLabel>
          <SInput
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChangeLastName}
            placeholder="Enter your last name"
          />
          <SLabel htmlFor="email">Email</SLabel>
          <SInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Enter your email"
          />
          <SLabel htmlFor="password">Password</SLabel>
          <SInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="Enter your password"
          />
          <SButton type="submit" onClick={handleSignUp}> Sign Up </SButton>
        </SForm>
        )}

        {message && (
          <Alert variant="danger">{message}</Alert>
        )}
        <P> Already have an account? <SLink to="/login">Login</SLink></P>
        </div>
      </SignUpContainer>
    </>
  );
}

export default SignUp;

const SignUpContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .signup-container {
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

const SForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
`;

const SInput = styled.input`
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

const SButton = styled.button`
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  background: blue;
  color: #fff;
  border: 1px solid #eee;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background: darkblue;
    color: #fff;
    border: 1px solid #000;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover {
    text-decoration: underline;
    color: darkblue;
  }
`;


const P = styled.p`
  text-align: center;
  font-size: 14px;
`;
