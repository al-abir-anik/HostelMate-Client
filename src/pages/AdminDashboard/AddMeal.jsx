import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";

const AddMeal = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   const onAddFoodSubmit = (data) => {
  //     const {
  //       foodName,
  //       imageUrl,
  //       quantity,
  //       location,
  //       status,
  //       expireDate,
  //       notes,
  //     } = data;
  //     const newFood = {
  //       foodName,
  //       imageUrl,
  //       quantity,
  //       location,
  //       status,
  //       expireDate,
  //       notes,
  //       userName: user.displayName,
  //       userEmail: user.email,
  //       userPhotoUrl: user.photoURL,
  //     };

  //     fetch("https://food-bridge-server-hazel.vercel.app/foods", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newFood),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           const Toast = Swal.mixin({
  //             toast: true,
  //             position: "top-end",
  //             showConfirmButton: false,
  //             timer: 3000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //               toast.onmouseenter = Swal.stopTimer;
  //               toast.onmouseleave = Swal.resumeTimer;
  //             },
  //           });
  //           Toast.fire({
  //             icon: "success",
  //             title: "New Food Added Successfully",
  //           });
  //           navigate("/manageMyFoods");
  //         }
  //       });
  //   };

  return (
    <div>
      <header className="bg-[#556EE6] text-white py-6 px-4 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Add Meal</h1>
      </header>
      <form
        // onSubmit={handleSubmit(onAddFoodSubmit)}
        className="mx-auto w-2/3 my-15 gap-5 grid grid-cols-1 md:grid-cols-2"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Title *
          </label>
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
          {errors.title && (
            <p className="text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Upload Image *
          </label>
          <input
            type="file"
            accept="image/*"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("image")}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category *
          </label>
          <input
            type="text"
            placeholder="Enter category"
            required
            {...register("category", {
              minLength: {
                value: 2,
                message: "Category should be at least 2 characters",
              },
            })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.category && (
            <p className="text-red-600">{errors.category.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Price *
          </label>
          <input
            type="number"
            placeholder="Enter price"
            required
            {...register("price", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Price must be at least 1.",
              },
            })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients *
          </label>
          <textarea
            placeholder="Enter ingredients (comma-separated)"
            rows="2"
            required
            {...register("ingredients", {
              minLength: {
                value: 5,
                message: "Ingredients should be at least 5 characters.",
              },
            })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500">{errors.ingredients.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Description *
          </label>
          <textarea
            placeholder="Enter meal description"
            rows="3"
            required
            {...register("description", {
              minLength: {
                value: 10,
                message: "Description should be at least 10 characters.",
              },
            })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Post Time */}
        {/* <div>
          <label className="block text-gray-700 font-medium mb-1">
            Post Time *
          </label>
          <input
            type="datetime-local"
            required
            {...register("postTime")}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        {/* Distributor Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Distributor Name
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Distributor Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-2 mt-6 rounded-md shadow hover:bg-blue-600 transition"
          >
            Add Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
