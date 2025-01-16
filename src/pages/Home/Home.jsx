import Banner from "./Banner";

const Home = () => {
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

      {/*  */}
    </main>
  );
};

export default Home;
