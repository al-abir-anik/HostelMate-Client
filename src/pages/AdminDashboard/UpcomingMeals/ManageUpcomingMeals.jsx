import { useContext } from "react";
import AddUpcomingMeal from "./AddUpcomingMeal";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUpcomingMeals = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const upcomingMeals = useLoaderData();

  const handlePublish = (id) => {
    fetch("https://hostel-mate-server-ten.vercel.app/all-meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        rating: 5,
      }),
    })
      .then((res) => res.json())
      .then((addResponse) => {
        if (addResponse.insertedId) {
          fetch(`https://hostel-mate-server-ten.vercel.app/upcoming-meals/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((deleteResponse) => {
              if (deleteResponse.deletedCount > 0) {
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  },
                });
                Toast.fire({
                  icon: "success",
                  title:
                    "Upcoming Meal successfully moved to all meals",
                });
                navigate("/dashboard");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Upcoming Meals</h1>
      </header>

      <div className="w-5/6 mx-auto mt-8">
        <div className="flex justify-end">
          <AddUpcomingMeal user={user}></AddUpcomingMeal>
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
              {upcomingMeals.map((meal) => (
                <tr key={meal._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{meal.title}</td>
                  <td className="px-4 py-2 border">{meal.likes}</td>
                  <td className="px-4 py-2 border">{meal.distributorName}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handlePublish(meal._id)}
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
