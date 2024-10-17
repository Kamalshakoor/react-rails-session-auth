import React from "react";
import { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.signup(
        username,
        email,
        password,
        confirmPassword
      );
      toast.success("Account created successfully");
      navigate('/login');
    } catch (error) {
      toast.error('Something went wrong.Please try again later');
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mb-5 p-4 rounded shadow  ">
            <h1 className="text-center">Signup</h1>
            <hr className="w-25 mx-auto" />
            <form onSubmit={handleSignup} className="form form-control">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary mt-3">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
