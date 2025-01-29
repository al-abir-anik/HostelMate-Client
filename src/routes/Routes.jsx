import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Meals from "../pages/Meals/Meals";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import MealDetails from "../pages/MealDetails/MealDetails";
import Dashboard from "./../layouts/Dashboard";
import AdminProfile from "../pages/Dashboard/AdminProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import AddMeal from "../pages/Dashboard/AddMeal";
import AllMeals from "../pages/Dashboard/AllMeals";
import AllReviews from "../pages/Dashboard/AllReviews";
import ServeMeals from "../pages/Dashboard/ServeMeals";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://hostel-mate-server-ten.vercel.app/categoryMeals"),
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(`https://hostel-mate-server-ten.vercel.app/meal/${params.id}`),
      },
      {
        path: "/upcomingMeals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addMeal",
        element: <AddMeal></AddMeal>,
      },
      {
        path: "allMeals",
        element: <AllMeals></AllMeals>,
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "serveMeals",
        element: <ServeMeals></ServeMeals>,
      },
    ],
  },
]);

export default Routes;
