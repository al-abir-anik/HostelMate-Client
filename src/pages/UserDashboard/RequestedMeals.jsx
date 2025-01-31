import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const RequestedMeals = () => {
  const { user } = useContext(AuthContext);
  const [requestedMeals, setRequestedMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/user-requested-meals?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequestedMeals(data))
      .catch((error) => console.log(error.message));
  }, [user.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, calcel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/requested-meals/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                text: "Your request meal Canceled.",
                icon: "success",
              });
              const remainingMeals = requestedMeals.filter((m) => m._id !== id);
              setRequestedMeals(remainingMeals);
            }
          });
      }
    });
  };

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">My Food Requestd</h1>
      </header>
      {requestedMeals.length > 0 ? (
        <div className="overflow-x-auto w-5/6 mx-auto my-15">
          <table className="min-w-full text-center bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Likes</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Request Date</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestedMeals.map((meal) => (
                <tr key={meal._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{meal.title}</td>
                  <td className="px-4 py-2 border">{meal.likes}</td>
                  <td className="px-4 py-2 border">{meal.status}</td>
                  <td className="px-4 py-2 border">{meal.requestDate}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleCancel(meal._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 my-20">
          No food requests found.
        </p>
      )}
    </div>
  );
};

export default RequestedMeals;
