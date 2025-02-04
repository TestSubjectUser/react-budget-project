import { createBrowserRouter, RouterProvider } from "react-router"; // Import from react-router-dom
import "./App.css";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import PrevEntries from "./components/PrevEntries";

function App() {
  const router = createBrowserRouter([
    // Moved router definition inside the component
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
          element: <PrevEntries />, // Conditional rendering
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
