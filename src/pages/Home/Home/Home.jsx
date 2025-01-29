import Banner from "../Banner";
import Category from "../Category";
import Announcement from "../Announcement";
import Membership from "../Membership";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categoryMeals = useLoaderData();
  
  return (
    <main>
      {/* Banner Section */}
      <section>
        <Banner></Banner>
        <div className="w-full h-14 bg-[#2D2A6E] flex justify-center items-center">
          <p className="text-white">
            The perfect place for{" "}
            <span className="font-medium uppercase text-[#96AE00]">food</span>{" "}
            <span className="font-medium uppercase text-[#96AE00]">lovers</span>{" "}
            - FoodBridge...
          </p>
        </div>
      </section>

      {/* Category Section */}
      <section>
        <Category categoryMeals={categoryMeals}></Category>
      </section>

      {/* Announcement Section */}
      <section>
        <Announcement></Announcement>
      </section>

      {/* Membership Section */}
      <section>
        <Membership></Membership>
      </section>
    </main>
  );
};

export default Home;
