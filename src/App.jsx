// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import PrevEntries from "./components/PrevEntries";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/ThemeContext";
import CounterApp from "./components/CounterApp";
import ErrorBoundary from "./components/ErrorBoundary";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <RootLayout />,
      element: (
        <ErrorBoundary>
          <RootLayout />
        </ErrorBoundary>
      ),
      // errorElement: <ErrorBoundary />, // works if err thrown from loader or actions
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/entries",
          element: <PrevEntries />,
        },
        {
          path: "/counter",
          element: <CounterApp />,
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
// Error Boundaries: Error boundaries in React are designed to catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. However, they do not catch errors for asynchronous code (like data fetching) or errors that occur in event handlers.
// React Router: When using React Router, the components rendered by the router (like your RootLayout, HomePage, PrevEntries, and CounterApp) are not directly children of the ErrorBoundary if you wrap the RouterProvider with it. Instead, you should wrap the individual routes or the components that might throw errors.
// The Route component's errorElement is useful for the specific occasions an error is thrown during processing a route's loader or action functions or when rendering the routed component and you can render more specific and useful UI whereas the regular React error boundaries are more for unexpected errors. You can narrow the scope of a React error boundary to display specific UI, but the benefit of the errorElement is the easier to use API abstraction. You don't need to implement the catch/handling logic yourself in a custom error boundary component (React class component only), but rather you can use the useRouteError hook to access the error that was thrown and you can focus more on the UI.
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
