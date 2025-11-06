import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PiPillFill } from "react-icons/pi";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { googleSigninAPI, signinAPI, signupAPI } from "../../services/allAPI";

const Login = ({ onLoginClick }) => {
  const [signup, setSignup] = useState(true);

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(userDetails);

  // const googleSignin = useGoogleLogin({
  //   onSuccess: (credentialResponse) => {
  //     console.log(credentialResponse);
  //     handleGoogleLogin(credentialResponse);
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  // });

  const handleSignup = async () => {
    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      toast.info("Please fill the detail Completely");
    } else {
      const result = await signupAPI({ username, email, password });
      console.log(result);
      if (result.status == 200) {
        toast.success("Sign Up Succesful");
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
        const result = await signinAPI({ email, password });
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem(
            "existingUser",
            JSON.stringify(result.data.existingUser)
          );
          sessionStorage.setItem("token", result.data.token);
          setTimeout(() => {
            onLoginClick();
          }, 2500);
        } else if (result.status == 401 || result.status == 404) {
          toast.warning(result.response.data);
        } else {
          toast.error("Something went wrong");
        }
      } else if (result.status == 400) {
        toast.warning(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const handleSignin = async () => {
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.info("Please fill the detail Completely");
    } else {
      const result = await signinAPI({ email, password });
      console.log(result);
      if (result.status == 200) {
        toast.success("Sign Ip Succesful");
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        setTimeout(() => {
          if (result.data.existingUser.email == "admin@medsfinder.com") {
            navigate("/admin-dashboard");
          } else {
            onLoginClick();
          }
        }, 2500);
      } else if (result.status == 401 || result.status == 404) {
        toast.warning(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      } else {
        toast.error("Something went wrong");
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    console.log(credentialResponse);

    const details = jwtDecode(credentialResponse.credential);
    console.log(details);

    const result = await googleSigninAPI({
      username: details.name,
      email: details.email,
      password: "googlepswd",
      profile: details.picture,
    });
    console.log(result);
    if (result.status == 200) {
      toast.success("Login Successful");
      sessionStorage.setItem(
        "existingUser",
        JSON.stringify(result.data.existingUser)
      );
      sessionStorage.setItem("token", result.data.token);
      setTimeout(() => {
        if (result.data.existingUser.email == "admin@medsfinder.com") {
          navigate("/admin-dashboard");
        } else {
          onLoginClick();
        }
      }, 2500);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="w-auto lg:w-200">
        {/* signup */}
        {signup && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150">
            <div className="hidden md:flex col-span-1 bg-teal-600 items-center justify-center p-8 lg:p-0">
              <div className="absolute top-0 left-0">
                <button
                  onClick={onLoginClick}
                  className="relative left-5 top-5 text-3xl text-white font-semibold hover:transition-transform hover:scale-105 duration-300 hover:font-bold"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="z-10 text-white text-center p-4">
                <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                  Find medicines faster nearby you
                </h2>
                <p className="text-lg text-teal-100 drop-shadow-sm">
                  No more queues to just hear the medicine is out of stock.
                </p>
              </div>
            </div>
            <div className="col-span-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="absolute top-0 right-0">
                <button
                  onClick={onLoginClick}
                  className=" md:hidden relative top-3 right-4 text-xs text-gray-500 font-semibold hover:text-gray-700"
                >
                  Close
                </button>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 my-6 text-center">
                Join MedsFinder
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    value={userDetails.username}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        username: e.target.value,
                      });
                    }}
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-500 focus:outline-teal-500 bg-gray-200"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    value={userDetails.email}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      });
                    }}
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-500 focus:outline-teal-500 bg-gray-200"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Set a Password
                  </label>
                  <input
                    value={userDetails.password}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      });
                    }}
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-500 focus:outline-teal-500 bg-gray-200 "
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                <button
                  onClick={handleSignup}
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="button"
                >
                  Sign Up
                </button>

                {/* Google Signup */}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-center text-xs md:text-sm text-gray-600 mb-3 -mt-3 cursor-default">
                    or
                  </p>
                  <div className="bg-teal-600 p-0.5 rounded-full flex items-center justify-center w-fit">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        handleGoogleLogin(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      theme="outline"
                      text="signup_with"
                      size="large"
                      shape="circle"
                    />
                  </div>
                </div>

                {/* Custom Google button */}
                {/* <button
                  onClick={() => googleSignin()}
                  className="flex items-center justify-center gap-4 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="button"
                >
                  <FaGoogle className="text-xl" />
                  Sign Up with Google
                </button> */}
              </div>
              <p className="mt-6 text-center text-xs md:text-sm text-gray-600 cursor-default">
                Already have an account?
                <a
                  className="font-medium text-teal-600 hover:text-teal-700 transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setSignup(false);
                  }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        )}

        {/* signin */}
        {!signup && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150">
            <div className="col-span-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="absolute top-0 right-0">
                <button
                  onClick={onLoginClick}
                  className=" md:hidden relative top-3 right-4 text-xs text-gray-500 font-semibold hover:text-gray-700"
                >
                  Close
                </button>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 my-6 text-center">
                Welcome Back
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    value={userDetails.email}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      });
                    }}
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-500 focus:outline-teal-500 bg-gray-200"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    value={userDetails.password}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      });
                    }}
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-500 focus:outline-teal-500 bg-gray-200 "
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <a className="block text-teal-700 text-sm pt-4 text-right underline hover:cursor-pointer hover:text-teal-600">
                    Forgot Password
                  </a>
                </div>

                <button
                  onClick={handleSignin}
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="button"
                >
                  Sign In
                </button>

                {/* Google Signin */}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-center text-xs md:text-sm text-gray-600 mb-3 -mt-3 cursor-default">
                    or
                  </p>
                  <div className="bg-teal-600 p-0.5 rounded-full flex items-center justify-center">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        handleGoogleLogin(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      theme="outline"
                      size="large"
                      text="signin_with"
                      shape="pill"
                    />
                  </div>
                </div>

                {/* Custom Google Signin */}
                {/* <button
                  onClick={() => googleSignin()}
                  className="flex items-center justify-center gap-4 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="button"
                >
                  <FaGoogle className="text-xl" />
                  Sign In with Google
                </button> */}
              </div>
              <p className="mt-6 text-center text-xs md:text-sm text-gray-600 cursor-default">
                Don't have an account?
                <a
                  className="font-medium text-teal-600 hover:text-teal-700 transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setSignup(true);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="hidden md:flex col-span-1 bg-teal-600 items-center justify-center p-8 lg:p-0">
              <div className="absolute top-0 right-0 hover:transition-transform hover:scale-105 duration-300 hover:font-bold">
                <button
                  onClick={onLoginClick}
                  className="relative top-5 right-5 text-3xl text-white font-semibold"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="z-10 text-white text-center p-4">
                <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                  <PiPillFill />
                  MedsFinder
                </h2>
                <p className="text-lg text-teal-100 drop-shadow-sm">
                  Find medicines faster nearby you.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2500} />
    </>
  );
};

export default Login;
