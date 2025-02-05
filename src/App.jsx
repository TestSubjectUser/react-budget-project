// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import PrevEntries from "./components/PrevEntries";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/entries",
          element: <PrevEntries />,
        },
      ],
    },
  ]);

  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  );
};

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router";
// import "./App.css";
// import HomePage from "./components/HomePage";
// import RootLayout from "./components/RootLayout";
// import PrevEntries from "./components/PrevEntries";
// import store from "./store/store";
// import { Provider } from "react-redux";
// // import { ThemeContextProvider } from "./context/ThemeContext.jsx";
// import { createContext, useState } from "react";

// // Create the Theme Context
// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//         },
//         {
//           path: "/entries",
//           element: <PrevEntries />,
//         },
//       ],
//     },
//   ]);

//   const ThemeContext = createContext();
//   const [themeState, setThemeState] = useState("Light");
//   const switchTheme = () => {
//     setThemeState((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
//   };

//   return (
//     // <ThemeContextProvider>
//     <ThemeContext.Provider value={themeState}>
//       {/* <ThemeContext.Provider value={{ themeState, switchTheme }}> */}
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </ThemeContext.Provider>
//     //  </ThemeContextProvider>
//   );
// };

// export default App;
