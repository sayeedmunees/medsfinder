import React from "react";

const Header = () => {
  return (
    <>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Overview
        </h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons text-gray-600 dark:text-gray-400">
              notifications
            </span>
          </button>
          <div className="flex items-center">
            <img
              alt="Admin Avatar"
              className="h-10 w-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz6umEPlfbAhNMHO4bIymBtEwvzqDqGqHNZKlsKWoXLUSTDbwFZJtn02W-OZKYqkZkGkNIcDB16VwTxuLjG3OTJetLzds1gX6jMo0bxEhlcn4qwgsU8aGUSuAuqV-AzpvHHz-gVG05rF5WbFUnRY6rxCm3wNcB8-8pnFLn4i0KMf0gZLux8AlJDEnXzmmp8HTWNAA6pUnS9UkLsSnvCsUcFeqhgjfGDmMjNmf8ewRbPNE-t6OWi7h-yvao2A0QAuu-eIGsII8DioG7"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@medsfinder.com
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
