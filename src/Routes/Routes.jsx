import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/order/:category",
        element: <Orders></Orders>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard></Dashboard>{" "}
          </PrivateRoute>
        ),
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
     

          // admin routes
     {
            path: "addItems",
            element: (
              <AdminRoute>
                {" "}
                <AddItem></AddItem>
              </AdminRoute>
            ),
          },
          {
            path: "manageItems",
            element: (
              <AdminRoute>
                <ManageItem></ManageItem>
              </AdminRoute>
            ),
        
          },
          {
            path: "payment",
            element: (
             
              <Payment></Payment>
      
            ),
          },
          
          {
            path: "updateItem/:id",
            element: (
              <AdminRoute>
                <UpdateItem></UpdateItem>
              </AdminRoute>
            ),
            loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
          },
          {
            path: "allUsers",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
