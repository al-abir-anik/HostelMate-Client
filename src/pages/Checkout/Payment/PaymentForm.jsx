import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const stripe = useStripe();
  const elements = useElements();

  const onPaymentSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      Swal.fire({
        title: "Payment Successful",
        icon: "success"
      });
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onPaymentSubmit)}
      className="mx-auto w-2/3 my-15"
    >
      {/* Title */}
      {/* <div>
        <label className="block text-gray-700 font-medium mb-1">Title *</label>
        <input
          type="text"
          placeholder="Enter meal title"
          required
          {...register("title", {
            minLength: {
              value: 2,
              message: "Title should be at least 2 characters",
            },
          })}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
      </div> */}

      {/* card and expiry date input */}
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>

      {/* Submit Button */}
      <div className="col-span-1 md:col-span-2 text-center">
        <button
          className="w-full bg-blue-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-blue-600 transition"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
