import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import PrevEntries from "./components/PrevEntries";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
