import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mt-2 mb-2"
    >
      {children}
    </button>
  );
}

export default Button;
