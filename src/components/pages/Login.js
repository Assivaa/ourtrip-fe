import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import styled from "styled-components";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
// import { Alert } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

// checklogin function for form validation
  const checkLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      handleLogin();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    // Make form validation for login
    <>
      <LoginContainer>
        <div className="login-container">
          <h1>Login</h1>
          <LForm
            // Make form validation for login
            onSubmit={checkLogin}
          >
            <LLabel htmlFor="email">Email</LLabel>
            <LInput
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Enter your email"
            />
            <LLabel htmlFor="password">Password</LLabel>
            <LInput
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Enter your password"
            />

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <LButton type="submit" onClick={handleLogin} disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span> Login</span>
            </LButton>
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
