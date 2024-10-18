import React from 'react'
import authService from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = ( { isLoggedIn, setIsLoggedIn } ) => {

  const navigate = useNavigate();
  const handleLogout = async (e) => {
      e.preventDefault();
      try {
        const response = await authService.logout();
        // console.log(response);
        toast.success("Logout successful");
        setIsLoggedIn(response.data.logged_in);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 text-center ">
            {
              isLoggedIn ? (
                <>
                  <h1>Welcome back!</h1>
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <button onClick={()=>authService.checkAuthStatus()}>
                  Check Session
                </button>
                </>
              ) : (
                <>
                <h1>Welcome to the app!</h1>
                <Link to="/login">
                  <button className="btn btn-outline-secondary mr-2">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-outline-success">Signup</button>
                </Link>
              
                </>

              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home