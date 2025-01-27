import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MealCard from "../../components/Meal/MealCard";
import { useEffect, useState } from "react";

const Category = () => {
  const allMeals = useLoaderData();
  const [breakfastMeals, setBreakfastMeals] = useState([]);
  const [lunchMeals, setLunchMeals] = useState([]);
  const [dinnerMeals, setDinnerMeals] = useState([]);

  useEffect(() => {
    const breakfastCategory = allMeals.filter(
      (m) => m.category === "Breakfast"
    );
    setBreakfastMeals(breakfastCategory);
  }, [allMeals]);
  useEffect(() => {
    const lunchCategory = allMeals.filter((m) => m.category === "Lunch");
    setLunchMeals(lunchCategory);
  }, [allMeals]);
  useEffect(() => {
    const dinnerCategory = allMeals.filter((m) => m.category === "Dinner");
    setDinnerMeals(dinnerCategory);
  }, [allMeals]);

  return (
    <div className="w-5/6 lg:w-3/4 mx-auto mt-20 mb-10 space-y-14">
      <SectionTitle
        heading={"Category"}
        description={"this is the way how i do my hostelmate category"}
      ></SectionTitle>

      <nav
        className="tabs w-5/6 mx-auto space-x-10 rtl:space-x-reverse overflow-x-auto"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-primary/20"
          id="tabs-fill-item-1"
          data-tab="#tabs-fill-1"
          aria-controls="tabs-fill-1"
          role="tab"
          aria-selected="false"
        >
          All Meals
        </button>
        <button
          type="button"
          className="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20"
          id="tabs-fill-item-2"
          data-tab="#tabs-fill-2"
          aria-controls="tabs-fill-2"
          role="tab"
          aria-selected="false"
        >
          Breakfast
        </button>
        <button
          type="button"
          className="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20"
          id="tabs-fill-item-3"
          data-tab="#tabs-fill-3"
          aria-controls="tabs-fill-3"
          role="tab"
          aria-selected="false"
        >
          Lunch
        </button>
        <button
          type="button"
          className="grow btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20"
          id="tabs-fill-item-4"
          data-tab="#tabs-fill-4"
          aria-controls="tabs-fill-4"
          role="tab"
          aria-selected="false"
        >
          Dinner
        </button>
      </nav>

      <div className="h-auto mt-3">
        <div
          id="tabs-fill-1"
          className=" mx-auto my-10"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allMeals.map((meal) => (
              <MealCard key={meal._id} meal={meal}></MealCard>
            ))}
          </div>
        </div>
        <div
          id="tabs-fill-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {breakfastMeals.map((meal) => (
              <MealCard key={meal._id} meal={meal}></MealCard>
            ))}
          </div>
        </div>
        <div
          id="tabs-fill-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {lunchMeals.map((meal) => (
              <MealCard key={meal._id} meal={meal}></MealCard>
            ))}
          </div>
        </div>
        <div
          id="tabs-fill-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {dinnerMeals.map((meal) => (
              <MealCard key={meal._id} meal={meal}></MealCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
