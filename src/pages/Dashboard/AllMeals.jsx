import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://hostel-mate-server-ten.vercel.app/all-meals`)
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hostel-mate-server-ten.vercel.app/all-meals/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Meal has been deleted.",
                icon: "success",
              });
              const remainingMeals = meals.filter((m) => m._id !== id);
              setMeals(remainingMeals);
            }
          });
      }
    });
  };

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">All Meals</h1>
      </header>
      <div className="w-5/6 mx-auto rounded overflow-x-auto my-10">
        <table className="min-w-full bg-white border border-gray-200 text-center align-middle rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Likes</th>
              <th className="px-4 py-2 border">Total Review</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">distributor</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{meal.title}</td>
                <td className="px-4 py-2 border">{meal.quantity}</td>
                <td className="px-4 py-2 border">{meal.quantity}</td>
                <td className="px-4 py-2 border">{meal.location}</td>
                <td className="px-4 py-2 border">{meal.distributorName}</td>
                <td className="px-4 py-2 border">
                  <Link to={`/updateFood/${meal._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600">
                      View Meal
                    </button>
                  </Link>
                  <Link to={`/updateFood/${meal._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(meal._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
