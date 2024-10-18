import React from 'react'
import { useState, useEffect } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You are already logged in");
      navigate("/"); // Redirect if already logged in
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log(email, password);
      const response = await authService.login(email, password);
      console.log(response.data);
      toast.success("Login successful");
      setIsLoggedIn(response.data.logged_in);
      navigate("/");
    } catch (error) {
      toast.error("An error occurred while logging in.");
    }
  };
  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5 p-4 rounded shadow border">
        <h5>Welcome Back </h5>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  </>
}

export default Login