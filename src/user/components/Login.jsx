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
            JSON.stringify(result.data.existingUser),
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
        toast.success("Sign In Succesful");
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser),
        );
        sessionStorage.setItem("token", result.data.token);
        setTimeout(() => {
          const adminRoles = ["assistant", "editor", "admin"];
          if (adminRoles.includes(result.data.existingUser.role)) {
            navigate("/dashboard");
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
      idToken: credentialResponse.credential
    });
    console.log(result);
    if (result.status == 200) {
      toast.success("Sign In Successful");
      sessionStorage.setItem(
        "existingUser",
        JSON.stringify(result.data.existingUser),
      );
      sessionStorage.setItem("token", result.data.token);
      setTimeout(() => {
        const adminRoles = ["assistant", "editor", "admin"];
        if (adminRoles.includes(result.data.existingUser.role)) {
          navigate("/dashboard");
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
          <div className="grid grid-cols-1 md:grid-cols-2 bg-card rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150 transition-colors duration-300">
            <div className="hidden md:flex col-span-1 bg-brand-primary items-center justify-center p-8 lg:p-0 relative">
              <div className="absolute top-0 left-0">
                <button
                  onClick={onLoginClick}
                  className="relative left-5 top-5 text-3xl text-brand-text font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="z-10 text-brand-text text-center p-4">
                <h2 className="flex flex-col items-center gap-2 text-3xl md:text-4xl font-bold mb-4 drop-shadow-md text-brand-text">
                  Find medicines faster nearby you
                </h2>
                <p className="text-lg text-brand-muted drop-shadow-sm">
                  No more queues to just hear the medicine is out of stock.
                </p>
              </div>
            </div>
            <div className="col-span-1 p-8 md:p-12 flex flex-col justify-center bg-card">
              <div className="absolute top-0 right-0">
                <button
                  onClick={onLoginClick}
                  className="md:hidden relative top-3 right-4 text-xs text-muted-foreground font-semibold hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-foreground my-6 text-center">
                Join MedsFinder
              </h1>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border border-border shadow-sm px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-foreground transition-all"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border border-border shadow-sm px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-foreground transition-all"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border border-border shadow-sm px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-foreground transition-all"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                <button
                  onClick={handleSignup}
                  className="btn-primary w-full text-base"
                  type="button"
                >
                  Sign Up
                </button>

                {/* Google Signup */}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-center text-xs md:text-sm text-muted-foreground mb-3 -mt-3 cursor-default">
                    or
                  </p>
                  <div className="p-0.5 rounded-full flex items-center justify-center w-fit border border-border">
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
              </div>
              <p className="mt-6 text-center text-xs md:text-sm text-muted-foreground cursor-default">
                Already have an account?
                <button
                  className="font-medium text-primary hover:text-primary-hover transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setSignup(false);
                  }}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        )}

        {/* signin */}
        {!signup && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-card rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150 transition-colors duration-300">
            <div className="col-span-1 p-8 md:p-12 flex flex-col justify-center bg-card">
              <div className="absolute top-0 right-0">
                <button
                  onClick={onLoginClick}
                  className="md:hidden relative top-3 right-4 text-xs text-muted-foreground font-semibold hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-foreground my-6 text-center">
                Welcome Back
              </h1>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
                    htmlFor="email-in"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border border-border shadow-sm px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-foreground transition-all"
                    id="email-in"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
                    htmlFor="password-in"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border border-border shadow-sm px-4 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-foreground transition-all"
                    id="password-in"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button className="block text-primary text-sm pt-4 ml-auto underline hover:cursor-pointer hover:text-primary-hover transition-colors">
                    Forgot Password
                  </button>
                </div>

                <button
                  onClick={handleSignin}
                  className="btn-primary w-full text-base"
                  type="button"
                >
                  Sign In
                </button>

                {/* Google Signin */}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-center text-xs md:text-sm text-muted-foreground mb-3 -mt-3 cursor-default">
                    or
                  </p>
                  <div className="p-0.5 rounded-full flex items-center justify-center border border-border">
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
              </div>
              <p className="mt-6 text-center text-xs md:text-sm text-muted-foreground cursor-default">
                Don't have an account?
                <button
                  className="font-medium text-primary hover:text-primary-hover transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setSignup(true);
                  }}
                >
                  Sign Up
                </button>
              </p>
            </div>
            <div className="hidden md:flex col-span-1 bg-brand-primary items-center justify-center p-8 lg:p-0 relative">
              <div className="absolute top-0 right-0">
                <button
                  onClick={onLoginClick}
                  className="relative top-5 right-5 text-3xl text-brand-text font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="z-10 text-brand-text text-center p-4">
                <h2 className="flex flex-col items-center gap-2 text-3xl md:text-4xl font-bold mb-4 drop-shadow-md text-brand-text">
                  <PiPillFill className="text-5xl" />
                  MedsFinder
                </h2>
                <p className="text-lg text-brand-muted drop-shadow-sm">
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
