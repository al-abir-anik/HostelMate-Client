import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="w-5/6 lg:w-3/4 mx-auto mt-20 mb-20 space-y-14">
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
          id="tabs-fill-item-3"
          data-tab="#tabs-fill-3"
          aria-controls="tabs-fill-3"
          role="tab"
          aria-selected="false"
        >
          Breakfast
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
          Lunch
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
          Dinner
        </button>
      </nav>

      <div className="mt-3">
        <div
          id="tabs-fill-1"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-1"
        >
          <p className="text-base-content/80">
            Welcome to the{" "}
            <span className="text-base-content font-semibold">Home tab!</span>{" "}
            Explore the latest updates and news here.
          </p>
        </div>
        <div
          id="tabs-fill-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-2"
        >
          <p className="text-base-content/80">
            This is your{" "}
            <span className="text-base-content font-semibold">Profile</span>{" "}
            tab, where you can update your personal information and manage your
            account details.
          </p>
        </div>
        <div
          id="tabs-fill-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-fill-item-3"
        >
          <p className="text-base-content/80">
            <span className="text-base-content font-semibold">Messages:</span>{" "}
            View your recent messages, chat with friends, and manage your
            conversations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* {allFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))} */}
      <Link to={"mealDetails"}><button className="btn">Meal Details</button></Link>
      </div>

      <Link to={"/availableFoods"}>
        <button className="btn mt-10 uppercase">Explore All Foods</button>
      </Link>
      
    </div>
  );
};

export default Category;
