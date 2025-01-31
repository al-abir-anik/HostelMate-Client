import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ServeMeals = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [requestMeals, setRequestMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/request-meals?search=${search}`)
      .then((res) => res.json())
      .then((data) => setRequestMeals(data))
      .catch((error) => console.log(error.message));
  }, [search]);

  const handleServe = (id) => {
    fetch(`http://localhost:3000/request-meal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setRequestMeals((prevMeals) =>
            prevMeals.map((meal) =>
              meal._id === id ? { ...meal, status: "delivered" } : meal
            )
          );
          Swal.fire({
            text: "Meal successfully served.",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Serve Meals</h1>
      </header>

      <div className="w-5/6 mx-auto mt-10">
        <div className="mb-10 flex items-center">
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by email..."
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <div className="w-10 h-10 ml-4 rounded-lg bg-gray-100 flex justify-center items-center">
            <CiSearch className="text-2xl text-gray-500"></CiSearch>
          </div>
        </div>

        {/* Table */}
        <div className="rounded overflow-x-auto my-8">
          <table className="min-w-full bg-white border border-gray-200 text-center align-middle rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">User Email</th>
                <th className="px-4 py-2 border">User Name</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestMeals.map((meal) => (
                <tr key={meal._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{meal.title}</td>
                  <td className="px-4 py-2 border">{meal.requestUserEmail}</td>
                  <td className="px-4 py-2 border">{meal.requestUserName}</td>
                  <td className="px-4 py-2 border">{meal.status}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleServe(meal._id)}
                      disabled={meal.status === "delivered"}
                      className={`px-4 py-1 rounded-lg transition ${
                        meal.status === "delivered"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      {meal.status === "delivered" ? "Served" : "Serve"}
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

export default ServeMeals;
