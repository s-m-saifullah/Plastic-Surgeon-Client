import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // Login with credentials
    login(email, password)
      .then(() => {
        toast.success("Log In Successful.");
      })
      .catch((err) => console.log(err));
  };

  //   Login with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Log In Successful.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="mt-10">
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
    </section>
  );
};

export default Login;