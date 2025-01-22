import { useContext, useEffect, useState } from "react";
import AuthContext from "./../../context/AuthContext/AuthContext";
import { CiSearch } from "react-icons/ci";
import MealCard from "../../components/Meal/MealCard";

const Meals = () => {
  const { loading } = useContext(AuthContext);
  const [search, setSearch] = useState([]);
  // const [sortExpiry, setSortExpiry] = useState(false);
  const [column, setColumn] = useState(false);
  // const [foods, setFoods] = useState([]);

  const meals = [
    {
      _id: 1,
      title: "Spaghetti Bolognese",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
      rating: 4.5,
      price: 12.99,
    },
    {
      _id: 2,
      title: "Chicken Alfredo",
      image: "https://via.placeholder.com/400x300",
      rating: 4.7,
      price: 14.49,
    },
    {
      _id: 3,
      title: "Grilled Salmon",
      image: "https://via.placeholder.com/400x300",
      rating: 4.9,
      price: 18.99,
    },
  ];

  // useEffect(() => {
  //   fetch(
  //     `https://food-bridge-server-hazel.vercel.app/foods?sort=${sortExpiry}&search=${search}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data))
  //     .catch((error) => console.log(error.message));
  // }, [sortExpiry, search]);

  if (loading) {
    return (
      <div className="flex justify-center flex-grow items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto">
      {/* Header Section */}
      <header className="p-6 rounded-lg mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
          Available Foods
        </h1>
        <p className="text-gray-700 mt-3 text-base sm:text-lg">
          Discover a wide selection of delicious meals ready for donation. Use
          the tools below to search, sort, and customize your view.
        </p>
      </header>

      {/* Sorting, Toggle, and Search */}
      <div className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="w-3/5 flex gap-2 items-center sm:w-auto flex-grow">
          <div className="w-10 h-10 ml-4 rounded-lg bg-gray-100 flex justify-center items-center">
            <CiSearch className="text-2xl text-gray-500"></CiSearch>
          </div>
          <div className="join w-full shadow-sm">
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              className="input join-item px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Search by food name"
            />
            <select
              className="select join-item w-2/6 border-gray-300"
              aria-label="select"
            >
              <option disabled selected>
                Category
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
          </div>
        </div>

        {/* Price range filter */}
        <select className="select max-w-sm appearance-none border-gray-300 shadow-sm" aria-label="select">
          <option disabled selected>
            Filter by Price Range
          </option>
          <option>$0 - $10</option>
          <option>$10 - $20</option>
          <option>$20 - $50</option>
          <option>$50+</option>
        </select>
      </div>

      {/* Main Content */}
      <main className="mt-14 mb-20 space-y-14">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  
          ${column ? "lg:grid-cols-2" : "lg:grid-cols-3"}
          gap-6 md:gap-10 lg:gap-12 justify-center`}
        >
          {meals.map((meal) => (
            <MealCard key={meal._id} meals={meals}></MealCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Meals;
