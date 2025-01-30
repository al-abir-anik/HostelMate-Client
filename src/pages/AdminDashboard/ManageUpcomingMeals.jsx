import { useEffect, useState } from "react";

const ManageUpcomingMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://hostel-mate-server-ten.vercel.app/all-meals`)
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Upcoming Meals</h1>
      </header>

      <div className="w-5/6 mx-auto mt-8">
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Add Upcoming Meal
          </button>
        </div>

        {/* Table */}
        <div className="rounded overflow-x-auto my-8">
          <table className="min-w-full bg-white border border-gray-200 text-center align-middle rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Likes</th>
                <th className="px-4 py-2 border">distributor</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal) => (
                <tr key={meal._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{meal.title}</td>
                  <td className="px-4 py-2 border">{meal.likes}</td>
                  <td className="px-4 py-2 border">{meal.distributorName}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleDelete(meal._id)}
                      className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition"
                    >
                      Publish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUpcomingMeals;
