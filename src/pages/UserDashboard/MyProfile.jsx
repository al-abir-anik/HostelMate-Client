import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">My Profile</h1>
      </header>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-8 m-12">
        <section className="flex items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
            <img
              src={user?.photoURL}
              alt="admin-profile-pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">
              {user?.displayName}
            </h2>
            <p className="text-gray-600 text-lg mt-3">{user?.email}</p>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* Meals Information */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Membership
          </h3>
          <div>
            No Membership available. Buy one from{" "}
            <Link to={"/"}>
              <strong className="underline hover:scale-95">
                Home page membership section.
              </strong>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
