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
import ServeMeals from "../pages/AdminDashboard/ServeMeals";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardPage from "../pages/UserDashboard/DashboardPage";
import MyProfile from "../pages/UserDashboard/MyProfile";
import RequestedMeals from "../pages/UserDashboard/RequestedMeals";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import ManageUpcomingMeals from "../pages/AdminDashboard/UpcomingMeals/ManageUpcomingMeals";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/upcoming-meals/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://hostel-mate-server-ten.vercel.app/upcoming-meals/${params.id}`
          ),
      },
      {
        path: "/upcomingMeals",
        element: <UpcomingMeals></UpcomingMeals>,
        loader: () =>
          fetch("https://hostel-mate-server-ten.vercel.app/upcoming-meals"),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
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
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
      },

      // Admin dashboard Pages
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
      {
        path: "manageUpcomingMeals",
        element: <ManageUpcomingMeals></ManageUpcomingMeals>,
        loader: () =>
          fetch("https://hostel-mate-server-ten.vercel.app/upcoming-meals"),
      },

      // User dashboard Pages
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "requestedMeals",
        element: <RequestedMeals></RequestedMeals>,
      },
    ],
  },
]);

export default Routes;
