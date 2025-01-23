import { CiSearch } from "react-icons/ci";

const ManageUsers = () => {
  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Manage Users</h1>
      </header>
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 m-10">
        {/* Search Bar */}
        <div className="mb-10 flex items-center">
          <input
            type="text"
            placeholder="Search by username or email..."
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <div className="w-10 h-10 ml-4 rounded-lg bg-gray-100 flex justify-center items-center">
            <CiSearch className="text-2xl text-gray-500"></CiSearch>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Username
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border border-gray-200 px-4 py-2 text-center">
                  Subscription
                </th>
                <th className="border border-gray-200 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example User */}
              <tr>
                <td className="border border-gray-200 px-4 py-2">JohnDoe123</td>
                <td className="border border-gray-200 px-4 py-2">
                  john@example.com
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-500 font-medium">
                  Active
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Make Admin
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">JaneDoe456</td>
                <td className="border border-gray-200 px-4 py-2">
                  jane@example.com
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-500 font-medium">
                  Inactive
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Make Admin
                  </button>
                </td>
              </tr>
              {/* Add more users as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
