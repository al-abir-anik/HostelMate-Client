import { useContext, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  const { user, loading, setLoading } = useContext(AuthContext);
  const userEmail = user.email;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [userEmail]);

  if (loading || !currentUser) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="menu md:w-1/6 bg-lime-200 p-4 shadow-sm rounded-none">
        <div className="drawer-header">
          <Link to={"/"}>
            <div className="flex items-center gap-3">
              <h3 className="drawer-title text-xl font-semibold">HostelMate</h3>
            </div>
          </Link>
        </div>
        {currentUser.role === "admin" && (
          <ul className="text-white space-y-1 p-0 uppercase">
            <li>
              <NavLink to={"adminProfile"}>Admin Profile</NavLink>
            </li>
            <li>
              <NavLink to={"ManageUsers"}>Manage Users</NavLink>
            </li>
            <li>
              <NavLink to={"addMeal"}>Add Meal</NavLink>
            </li>
            <li>
              <NavLink to={"allMeals"}>All Meals</NavLink>
            </li>
            <li>
              <NavLink to={"allReviews"}>All Reviews</NavLink>
            </li>
            <li>
              <NavLink to={"serveMeals"}>Serve Meals</NavLink>
            </li>
            <li>
              <NavLink to={"upcomingMeals"}>Upcoming Meals</NavLink>
            </li>

            <div className="divider text-base-content/50 py-6 after:border-0">
              Account
            </div>
            <li>
              <a href="#">
                <span className="icon-[tabler--logout-2] size-5"></span>
                Sign Out
              </a>
            </li>
          </ul>
        )}

        {currentUser.role === "user" && (
          <ul className="text-white space-y-1 p-0 uppercase">
            <li>
              <NavLink to={"myProfile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink to={"requestedMeals"}>Requested Meals</NavLink>
            </li>
            <li>
              <NavLink to={"myReviews"}>My Reviews</NavLink>
            </li>
            <li>
              <NavLink to={"paymentHistory"}>Payment History</NavLink>
            </li>

            <div className="divider text-base-content/50 py-6 after:border-0">
              Account
            </div>
            <li>
              <a href="#">
                <span className="icon-[tabler--logout-2] size-5"></span>
                Sign Out
              </a>
            </li>
          </ul>
        )}
      </aside>

      {/* Main Content */}

      <div className="flex flex-col md:w-5/6 min-h-screen">
        {/* <Navbar></Navbar> */}
        <main className="flex flex-col flex-grow">
          <Outlet></Outlet>
        </main>
        {/* <Footer></Footer> */}
        <footer className="bg-[#2A3042] text-white py-4 text-center">
          <p>&copy; 2025 HostelMate. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
