import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, AdminLayout } from "./pages";
import "./App.css";

// auth
import Auth from "./components/auth/Auth";

// middlewares
import ProtectedRoutes from "./components/ProtectedRoutes";
import Notfound from "./components/Notfound";
import { Customers, Invoices, Quotes, Dashboard } from "./components/admin";
import AppProvider from "./context/AppContext";

// admin component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoutes>
          <AdminLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "invoices",
          element: <Invoices />,
        },
        {
          path: "quotes",
          element: <Quotes />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
