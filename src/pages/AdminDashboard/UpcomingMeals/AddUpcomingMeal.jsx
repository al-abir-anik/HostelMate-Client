import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddUpcomingMeal = ({ user }) => {
  const handleAddUpcomingMeal = () => {
    MySwal.fire({
      html: `
        <div class="text-left">
          <div class="mb-2">
            <label class="font-bold">Title:</label>
            <input id="swal-title" class="w-full bg-gray-200 rounded p-2" type="text"/>
          </div>
          <div class="mb-2">
            <label class="font-bold">Image URL:</label>
            <input id="swal-image-url" class="w-full bg-gray-200 rounded p-2" type="text" placeholder="Enter correct image URL" />
          </div>
          <div class="flex gap-3">
            <div class="mb-2">
                <label class="font-bold">Category:</label>
                <input id="swal-category" class="w-full bg-gray-200 rounded p-2" type="text"/>
            </div>
            <div class="mb-2">
                <label class="font-bold">Price:</label>
                <input id="swal-price" class="w-full bg-gray-200 rounded p-2" type="number"/>
            </div>
          </div>
          <div class="mb-2">
          <label class="font-bold">Ingredients:</label>
          <textarea id="swal-ingredients" class="w-full bg-gray-100 border border-gray-300 rounded p-2" placeholder="Enter ingredients"></textarea>
          </div>
          <div class="mb-2">
          <label class="font-bold">Description:</label>
          <textarea id="swal-description" class="w-full bg-gray-100 border border-gray-300 rounded p-2" placeholder="Enter description"></textarea>
          </div>
          <div class="flex gap-3">
            <div class="mb-2 w-1/2">
                <label class="font-bold">Donator Name:</label>
                <input class="w-full bg-gray-200 rounded p-2" type="text" value="${user.displayName}" disabled />
            </div>
            <div class="mb-2 w-1/2">
                <label class="font-bold">User Email:</label>
                <input class="w-full bg-gray-200 rounded p-2" type="text" value="${user.email}" disabled />
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const title = document.getElementById("swal-title").value;
        const imageUrl = document.getElementById("swal-image-url").value;
        const category = document.getElementById("swal-category").value;
        const price = document.getElementById("swal-price").value;
        const ingredients = document.getElementById("swal-ingredients").value;
        const description = document.getElementById("swal-description").value;

        if (!title || !category || !price || !ingredients || !description) {
          Swal.showValidationMessage("Please fill in all required fields.");
          return false;
        }

        return { title, imageUrl, category, price, ingredients, description };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleAddRequest(result.value);
      }
    });
  };

  const handleAddRequest = (newMeal) => {
    fetch("http://localhost:3000/upcoming-meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMeal),
    })
      .then((res) => res.json())
      .then((addResponse) => {
        if (addResponse.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "An Upcoming Meal Successfully Added",
          });
        }
      })
      .catch((error) => {
        console.error("Error handling meal adding:", error);
      });
  };

  return (
    <button
      onClick={handleAddUpcomingMeal}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      + Add Upcoming Meal
    </button>
  );
};

export default AddUpcomingMeal;
