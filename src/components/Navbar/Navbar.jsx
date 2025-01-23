import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/logIn"))
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <nav className="navbar lg:px-20 rounded-box shadow">
      <div className="navbar-start">
        <Link
          to={"/"}
          className="link text-base-content link-neutral text-xl font-semibold no-underline"
        >
          HostelMate
        </Link>
      </div>
      <div className="navbar-center max-md:hidden">
        <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
          <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-md:[--placement:bottom]">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/meals"}>Meals</NavLink>
          </li>
          <li>
            <NavLink to={"/upcomingMeals"}>Upcoming Meals</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/adminProfile"}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end items-center gap-4">
        {/* Nav Menu for mobile screen */}
        <div className="dropdown relative inline-flex md:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <li className="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-md:[--placement:bottom]">
              <button
                id="dropdown-end-2"
                className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                Products
                <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="nested-dropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Templates
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI kits
                  </a>
                </li>
                <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                  <button
                    id="nested-dropdown-2"
                    className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Components
                    <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown-2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Basic
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Advanced
                        <span className="badge badge-sm badge-soft badge-primary rounded-full">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                      <button
                        id="nested-dropdown-2"
                        className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Vendor
                        <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="nested-dropdown-2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Data tables
                            <span className="badge badge-sm badge-soft badge-primary rounded-full">
                              Pro
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Apex charts
                            <span className="badge badge-sm badge-soft badge-primary rounded-full">
                              Pro
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Clipboard
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {user ? (
          <button onClick={handleSignOut} className="btn btn-soft">
            Log Out
          </button>
        ) : (
          <Link to={"/logIn"} className="btn btn-primary">
            Join Us
          </Link>
        )}

        {/* Notification */}
        <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
          <button
            id="dropdown-scrollable"
            type="button"
            className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 size-10"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <div className="indicator">
              <span className="indicator-item bg-error size-2 rounded-full"></span>
              <span className="icon-[tabler--bell] text-base-content size-[1.375rem]"></span>
            </div>
          </button>
          <div
            className="dropdown-menu dropdown-open:opacity-100 hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-scrollable"
          >
            <div className="dropdown-header justify-center">
              <h6 className="text-base-content text-base">Notifications</h6>
            </div>
            <div className="vertical-scrollbar horizontal-scrollbar rounded-scrollbar text-base-content/80 max-h-56 overflow-auto max-md:max-w-60">
              <div className="dropdown-item">
                <div className="avatar away-bottom">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar 1"
                    />
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">Charles Franklin</h6>
                  <small className="text-base-content/50 truncate">
                    Accepted your connection
                  </small>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                      alt="avatar 2"
                    />
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">
                    Martian added moved Charts & Maps task to the done board.
                  </h6>
                  <small className="text-base-content/50 truncate">
                    Today 10:00 AM
                  </small>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="avatar online-bottom">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png"
                      alt="avatar 8"
                    />
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">New Message</h6>
                  <small className="text-base-content/50 truncate">
                    You have new message from Natalie
                  </small>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full p-2">
                    <span className="icon-[tabler--user] size-full"></span>
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">
                    Application has been approved 🚀
                  </h6>
                  <small className="text-base-content/50 text-wrap">
                    Your ABC project application has been approved.
                  </small>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png"
                      alt="avatar 10"
                    />
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">New message from Jane</h6>
                  <small className="text-base-content/50 text-wrap">
                    Your have new message from Jane
                  </small>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                      alt="avatar 3"
                    />
                  </div>
                </div>
                <div className="w-60">
                  <h6 className="truncate text-base">
                    Barry Commented on App review task.
                  </h6>
                  <small className="text-base-content/50 truncate">
                    Today 8:32 AM
                  </small>
                </div>
              </div>
            </div>
            <a href="#" className="dropdown-footer justify-center gap-1">
              <span className="icon-[tabler--eye] size-4"></span>
              View all
            </a>
          </div>
        </div>
        {/* Avatar */}
        {user && (
          <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
            <button
              id="dropdown-scrollable"
              type="button"
              className="dropdown-toggle flex items-center"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <div className="avatar relative group">
                <div className="size-9.5 rounded-full">
                  <img src={user.photoURL} alt="avatar 1" />
                </div>
                {user && (
                  <span className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-max bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {user?.displayName}
                  </span>
                )}
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-avatar"
            >
              <li className="dropdown-header gap-2">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="avatar" />
                  </div>
                </div>
                <div>
                  <h6 className="text-base-content text-base font-semibold">
                    John Doe
                  </h6>
                  <small className="text-base-content/50">Admin</small>
                </div>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--user]"></span>
                  My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--settings]"></span>
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--receipt-rupee]"></span>
                  Billing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--help-triangle]"></span>
                  FAQs
                </a>
              </li>
              <li className="dropdown-footer gap-2">
                <a className="btn btn-error btn-soft btn-block" href="#">
                  <span className="icon-[tabler--logout]"></span>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
