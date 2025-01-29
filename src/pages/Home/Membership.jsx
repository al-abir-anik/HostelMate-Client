import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Membership = () => {
  const packages = [
    {
      id: 1,
      name: "Silver",
      price: "$29/month",
      features: [
        "Access to basic meal plans",
        "1 review per day",
        "Email support",
      ],
      bgColor: "bg-gray-100",
      borderColor: "border-gray-400",
    },
    {
      id: 2,
      name: "Gold",
      price: "$49/month",
      features: [
        "Access to premium meal plans",
        "5 reviews per day",
        "Priority support",
        "Special event invites",
      ],
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
    },
    {
      id: 3,
      name: "Platinum",
      price: "$79/month",
      features: [
        "Unlimited meal plans",
        "Unlimited reviews",
        "24/7 dedicated support",
        "Exclusive discounts",
      ],
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 space-y-10">
        <SectionTitle
          heading={"Membership"}
          description={"this is the way how i do my hostelmate membership"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border-2 ${pkg.borderColor} rounded-lg p-6 shadow-sm transform hover:scale-105 transition duration-300 ${pkg.bgColor}`}
            >
              <h3 className="text-xl font-semibold text-center mb-4">
                {pkg.name}
              </h3>
              <p className="text-2xl font-bold text-center text-gray-800 mb-6">
                {pkg.price}
              </p>
              <ul className="mb-6 space-y-2 text-gray-700">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={"checkout"}>
                <button
                  className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
                    pkg.name === "Silver"
                      ? "bg-gray-500 hover:bg-gray-600"
                      : pkg.name === "Gold"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } transition duration-300`}
                >
                  Upgrade to {pkg.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
