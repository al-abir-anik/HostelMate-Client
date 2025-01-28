import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const MealDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const specificMeal = useLoaderData();
  const { _id, title, imageUrl, category, likes, ingredient, description } =
    specificMeal;

  const [likeCount, setLikeCount] = useState(likes);
  const handleLikeCount = () => {
    if (user && user.email) {
      fetch(`http://localhost:3000/meal/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: likeCount + 1 }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to update like count");
          }
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            setLikeCount(data);
          } else {
            console.error("Error updating like count:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in before liking this meal",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/logIn");
        }
      });
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-15">
          <div className="lg:w-1/2">
            <img
              src={imageUrl}
              alt="meal image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-500 mb-2">
              <strong>Category :</strong> {category}
            </p>
            <p className="text-gray-600 mb-6">{description}</p>
            <p className="text-gray-500 mb-6">
              <strong>Ingredients:</strong> {ingredient}
            </p>
            <p className="text-gray-500 mb-6">
              <strong>Post Time:</strong> time here
            </p>

            {/* Rating and Actions */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-500 font-bold text-xl">
                rating here
              </span>
              <span className="text-gray-500 text-sm">
                (count here Reviews)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <button
                  onClick={handleLikeCount}
                  className="bg-gray-200 hover:bg-red-200 text-gray-500 py-2 px-4 rounded-lg transition duration-100 active:scale-95"
                  // disabled
                >
                  ❤️ <span>{likes}</span> Likes
                </button>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                disabled
              >
                Request Meal
              </button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
          {/* Add a Review */}
          <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Add a Review
            </h3>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              placeholder="Write your review here..."
            ></textarea>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
              disabled
            >
              Submit Review
            </button>
          </div>

          {/* Display Reviews */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                <strong>User1:</strong> This meal was absolutely delicious!
              </p>
              <p className="text-sm text-gray-400">
                Posted on January 12, 2025
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                <strong>User2:</strong> Perfectly cooked and flavorful. Highly
                recommend!
              </p>
              <p className="text-sm text-gray-400">
                Posted on January 11, 2025
              </p>
            </div>
            {/* Add more reviews here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
