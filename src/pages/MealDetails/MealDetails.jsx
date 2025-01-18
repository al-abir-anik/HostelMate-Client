

const MealDetails = () => {
  const meal = {
    image: "https://via.placeholder.com/600x400",
    name: "Delicious Spaghetti Bolognese",
    distributor: "Chef's Kitchen",
    description:
      "A classic Italian pasta dish made with a rich, meaty tomato sauce and freshly cooked spaghetti.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Garlic", "Onion", "Parmesan Cheese"],
    postTime: "Posted on January 13, 2025",
    rating: 4.8,
    reviewsCount: 23,
    likes: 150,
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Meal Image and Basic Details */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Meal Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{meal.name}</h1>
            <p className="text-gray-500 mb-2">
              <strong>Distributor:</strong> {meal.distributor}
            </p>
            <p className="text-gray-600 mb-6">{meal.description}</p>
            <p className="text-gray-500 mb-6">
              <strong>Ingredients:</strong> {meal.ingredients.join(", ")}
            </p>
            <p className="text-gray-500 mb-6">
              <strong>Post Time:</strong> {meal.postTime}
            </p>

            {/* Rating and Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold text-xl">{meal.rating}</span>
                <span className="text-gray-500 text-sm">({meal.reviewsCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
                  disabled
                >
                  ❤️ {meal.likes} Likes
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
                  disabled
                >
                  Request Meal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
          {/* Add a Review */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add a Review</h3>
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
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                <strong>User1:</strong> This meal was absolutely delicious!
              </p>
              <p className="text-sm text-gray-400">Posted on January 12, 2025</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                <strong>User2:</strong> Perfectly cooked and flavorful. Highly recommend!
              </p>
              <p className="text-sm text-gray-400">Posted on January 11, 2025</p>
            </div>
            {/* Add more reviews here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
