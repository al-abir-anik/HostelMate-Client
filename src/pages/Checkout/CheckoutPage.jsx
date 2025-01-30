import Payment from "./Payment/Payment";

const CheckoutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 mb-10">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Silver Plan */}
        <div className="card bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Silver Plan
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Basic access to all features
          </p>
          <p className="text-center text-xl font-bold mb-6">$29/month</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Choose Plan
          </button>
        </div>

        {/* Gold Plan */}
        <div className="card bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Gold Plan</h2>
          <p className="text-center text-gray-600 mb-4">
            Access to premium features
          </p>
          <p className="text-center text-xl font-bold mb-6">$49/month</p>
          <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Choose Plan
          </button>
        </div>

        {/* Platinum Plan */}
        <div className="card bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Platinum Plan
          </h2>
          <p className="text-center text-gray-600 mb-4">
            All features plus VIP support
          </p>
          <p className="text-center text-xl font-bold mb-6">$79/month</p>
          <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
            Choose Plan
          </button>
        </div>
      </div>

      {/* User Info Form */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
        {/* <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Shipping Address
            </label>
            <textarea
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Credit Card Information
            </label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
        </form> */}
        <div>
          <Payment></Payment>
        </div>
      </div>

      {/* Payment Summary */}
      {/* <div className="mt-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <p className="text-lg font-medium">Plan: Gold Plan</p>
          <p className="text-lg font-medium">$39.99/month</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-lg font-medium">Taxes</p>
          <p className="text-lg font-medium">$3.00</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg font-medium">Total</p>
          <p className="text-lg font-medium text-green-600">$42.99</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Complete Purchase
        </button>
      </div> */}
    </div>
  );
};

export default CheckoutPage;
