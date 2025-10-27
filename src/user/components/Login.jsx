import React, { useState } from "react";
import { PiPillFill } from "react-icons/pi";

const Login = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <main className="grow flex items-center justify-center p-4 md:p-8 bg-gray-200 ">
        {/* signup */}
        {!login && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150">
            <div className="hidden md:flex col-span-1 bg-teal-500 items-center justify-center p-8 lg:p-0">
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
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Join MedsFinder
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100 "
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    for="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <button
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-6 text-center text-xs md:text-sm text-gray-600 cursor-default">
                Already have an account?
                <a
                  className="font-medium text-teal-600 hover:text-teal-700 transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        )}

        {/* login */}
        {login && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full min-h-80 md:min-h-150">
            <div className="col-span-1 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Welcome Back
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-xs md:text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100"
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
                    className="mt-1 text-sm md:text-base block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 placeholder:text-gray-400 focus:outline-teal-500 bg-gray-100 "
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                <button
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-6 text-center text-xs md:text-sm text-gray-600 cursor-default">
                Don't have an account?
                <a
                  className="font-medium text-teal-600 hover:text-teal-700 transition-colors ml-2 underline cursor-pointer"
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="hidden md:flex col-span-1 bg-teal-500 items-center justify-center p-8 lg:p-0">
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
      </main>
    </>
  );
};

export default Login;
