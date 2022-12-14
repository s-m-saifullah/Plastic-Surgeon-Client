import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/images/signup.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../shared/Spinner";

const SignUp = () => {
  const [error, setError] = useState("");
  const {
    createUserWithEmail,
    profileUpdate,
    googleSignIn,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password length validation

    if (password.length < 8) {
      setError("Password must contain at least 8 characters");
      return;
    }

    // Password uppercase validation
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must contain at least one capital letter");
      return;
    }

    // Password number validation
    if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    // Password special character validation
    if (!/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    // Sign up with email password
    createUserWithEmail(email, password)
      .then(() => {
        profileUpdate(name, photoUrl)
          .then(() => {
            toast.success("You're registered. Please RELOAD the page.", {
              duration: 5000,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  //   Sign up with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("You are signed in. YAY!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error) {
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
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap h-full gap-6 text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 lg:mr-20 mb-12 md:mb-0">
              <form onSubmit={handleSignUp}>
                {/* <!-- Name input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full Name"
                    required
                  />
                </div>

                {/* <!-- Photo url input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    name="photoUrl"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Photo URL"
                  />
                </div>

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

                {/* Show Error */}
                {error && <p className="mb-6 text-red-600">{error}</p>}

                <div className="flex justify-end items-center mb-6">
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Already Have an Account? Sign In.
                  </Link>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                  Sign up
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  className="px-7 py-3 text-white font-medium text-sm leading-snug bg-blue-600 uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  href="#!"
                  role="button"
                >
                  <FaGoogle className="mr-3" />
                  Continue with Google
                </button>
              </form>
            </div>
            <div className="md:w-8/12 lg:w-6/12">
              <img src={signup} className="w-full" alt="" />
            </div>
          </div>
        </div>
      )}

      <Helmet>
        <title>Sign Up | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </section>
  );
};

export default SignUp;
