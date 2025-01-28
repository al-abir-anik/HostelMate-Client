import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../auth/SocialAuth/Google";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const LogIn = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (

      <div className="mx-auto bg-gray-100 shadow-md rounded p-8 mt-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Log In
        </h2>

        <form onSubmit={handleSubmit(onLoginSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              {...register("email", {
                minLength: {
                  value: 2,
                  message: "Movie Title should be at least 2 characters.",
                },
              })}
              className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              {...register("password", {
                minLength: {
                  value: 2,
                  message: "Movie Title should be at least 2 characters.",
                },
              })}
              className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* {wrongPass && <p className="text-red-600">{wrongPass}</p>} */}
            <a className="flex justify-end mt-2 font-bold text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>

          {/* SignUp Page link */}
          <p className="text-center text-gray-600 mb-4">
            Don’t have an account?{" "}
            <Link to={"/signUp"} className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Social Login */}
        <Google></Google>
      </div>

  );
};

export default LogIn;
