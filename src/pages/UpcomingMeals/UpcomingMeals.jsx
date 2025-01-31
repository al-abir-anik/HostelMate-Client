import { useContext } from "react";
import AuthContext from "./../../context/AuthContext/AuthContext";
import MealCard from "../../components/Meal/MealCard";
import { useLoaderData } from "react-router-dom";

const UpcomingMeals = () => {
  const { loading } = useContext(AuthContext);
  const upcomingMeals = useLoaderData();

  if (loading) {
    return (
      <div className="flex justify-center flex-grow items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto">
      <header className="p-6 rounded-lg text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Upcoming Meals
        </h1>
        <p className="text-gray-700 mt-3 text-base sm:text-lg">
          Discover a wide selection of delicious meals ready for donation. Use
          the tools below to search, sort, and customize your view.
        </p>
      </header>

      {/* Main Content */}
      <main className="mt-14 mb-20 space-y-14">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6 md:gap-10 lg:gap-12 justify-center"
        >
          {upcomingMeals.map((meal) => (
            <MealCard key={meal._id} meal={meal}></MealCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UpcomingMeals;
