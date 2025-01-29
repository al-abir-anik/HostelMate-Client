import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Admin Profile</h1>
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
            <h2 className="text-4xl font-semibold text-gray-800">{user?.displayName}</h2>
            <p className="text-gray-600 text-lg mt-3">{user?.email}</p>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* Meals Information */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Meals Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h4 className="text-lg font-medium text-gray-700">
                Total Meals Added
              </h4>
              <p className="text-4xl font-bold text-blue-600 mt-2">42</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow">
              <h4 className="text-lg font-medium text-gray-700">
                Meals Approved
              </h4>
              <p className="text-4xl font-bold text-green-600 mt-2">0</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow">
              <h4 className="text-lg font-medium text-gray-700">
                Pending Approval
              </h4>
              <p className="text-4xl font-bold text-red-600 mt-2">0</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminProfile;
