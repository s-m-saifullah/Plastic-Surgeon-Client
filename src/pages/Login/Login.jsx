import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";

const Login = () => {
  const { login, googleSignIn, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // Login with credentials
    login(email, password)
      .then((result) => {
        toast.success("Log In Successful.");
        const user = result.user;
        const currentUser = {
          uid: user.uid,
        };

        // Get JWT Token
        fetch("https://plastic-surgeon-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jwtToken", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };

  //   Login with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Log In Successful.");
        const user = result.user;
        const currentUser = {
          uid: user.uid,
        };

        // Get JWT Token
        fetch("https://plastic-surgeon-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("jwtToken", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setError(err.message);
          setLoading(false);
        }
      });
  };

  return (
    <section className="w-11/12 lg:w-10/12 mx-auto mt-10">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full gap-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={loginImg} className="w-full" alt="" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSignIn}>
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    required
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Don't Have an Account? Sign Up.
                  </Link>
                </div>

                {/* Show Error */}
                {error ? <p className="mb-6 text-error">{error}</p> : undefined}

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                  Sign in
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  className="px-7 py-3 text-white font-medium text-sm leading-snug bg-blue-600 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  role="button"
                >
                  <FaGoogle className="mr-3" />
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <Helmet>
        <title>Login | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </section>
  );
};

export default Login;
