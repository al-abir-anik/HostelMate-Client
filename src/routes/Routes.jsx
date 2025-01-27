import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Meals from "../pages/Meals/Meals";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import MealDetails from "../pages/MealDetails/MealDetails";
import Dashboard from "./../layouts/Dashboard";
import AdminProfile from "../pages/AdminDashboard/AdminProfile";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import AddMeal from "../pages/AdminDashboard/AddMeal";
import AllMeals from "../pages/AdminDashboard/AllMeals";
import AllReviews from "../pages/AdminDashboard/AllReviews";
import ServeMeals from "./../pages/AdminDashboard/ServeMeals";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/all-meals"),
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-meals/${params.id}`),
      },     
      {
        path: "/upcomingMeals",
        element: <UpcomingMeals></UpcomingMeals>,
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
    element: <Dashboard></Dashboard>,
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
