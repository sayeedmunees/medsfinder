import React from "react";

const Login = () => {
  return (
    <>
      <main className="grow flex items-center justify-center p-4 md:p-8 bg-gray-200">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
          <div className="lg:w-1/2 relative bg-teal-500 flex items-center justify-center p-8 lg:p-0">
            <div className="relative z-10 text-white text-center p-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                Your Health Journey Starts Here
              </h2>
              <p className="text-lg text-teal-100 drop-shadow-sm">
                Find the care you need, when you need it.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Join MedsFinder
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 "
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 focus:outline-teal-500 bg-gray-100"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 "
                  for="email"
                >
                  Email Address
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 focus:outline-teal-500 bg-gray-100"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 focus:outline-teal-500 bg-gray-100 "
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  for="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2 focus:outline-teal-500 bg-gray-100"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <button
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600 ">
              Already have an account?
              <a
                className="font-medium text-teal-600 hover:text-teal-700 transition-colors ml-2 underline"
                href="#"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
