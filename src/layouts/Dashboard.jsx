import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="menu w-1/6 bg-lime-200 p-4 shadow-sm rounded-none">
        <div className="drawer-header">
          <Link to={"/"}>
            <div className="flex items-center gap-3">
              <h3 className="drawer-title text-xl font-semibold">HostelMate</h3>
            </div>
          </Link>
        </div>
        <ul className="text-white space-y-1 p-0 uppercase">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"adminProfile"}>Admin Profile</Link>
          </li>
          <li>
            <Link to={"ManageUsers"}>Manage Users</Link>
          </li>
          <li>
            <Link to={"addMeal"}>Add Meal</Link>
          </li>
          <li>
            <Link to={"allMeals"}>All Meals</Link>
          </li>
          <li>
            <Link to={"allReviews"}>All Reviews</Link>
          </li>
          <li>
            <Link to={"serveMeals"}>Serve Meals</Link>
          </li>
          <li>
            <Link to={"upcomingMeals"}>Upcoming Meals</Link>
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
      </aside>

      {/* Main Content */}

      <main className="flex flex-col min-h-screen">
        {/* <Navbar></Navbar> */}
        <div className="flex flex-col flex-grow">
          <Outlet></Outlet>
        </div>
        {/* <Footer></Footer> */}
      </main>
    </div>
  );
};

export default Dashboard;
