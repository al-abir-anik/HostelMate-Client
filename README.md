# HostelMate

## Objective

This project is a **Hostel Management System** developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to streamline hostel operations for a university. The system allows students to log in, view and review meals, and enables administrators to manage meal data, reviews, and student details efficiently.

---

## Admin Credentials

- **Admin Username:** `anik@abir.com`
- **Admin Password:** `aaaaaA`

---

## Live Website

[http://alabiranik-hostelmate.surge.sh/](#)

---

## Key Features

1. **Student Login:** Students can securely log in and view meals.
2. **Meal Management:** Admins can add, edit, and delete meal records, and manage requested meals.
3. **Meal Reviews:** Students can review meals, edit, and delete their reviews.
4. **Category-Based Meals:** Filter meals by Breakfast, Lunch, Dinner, and All categories.
5. **Upcoming Meals Section:** Displays upcoming meals, accessible only to premium users.
6. **Responsive Design:** Fully responsive for mobile, tablet, and desktop views, including the dashboard.
7. **Secure Payments:** Dynamic checkout system with **Stripe** for purchasing premium packages (Silver, Gold, Platinum).
8. **Persistent Login:** Users stay logged in on private routes even after a page reload.
9. **Notifications:** Sweet alerts/toast notifications for all CRUD operations and authentication events.
10. **Environment Variables:** Sensitive information like Firebase config keys and MongoDB credentials are securely stored in `.env` files and hidden from Git repositories.

---

## Pages and Features

### 1. **Home Page**

- **Navbar:** Includes the logo, navigation links, notification icon, and user profile dropdown.
- **Banner Section:** A search bar with a banner displaying the site's purpose.
- **Meals by Category:** Tabs for Breakfast, Lunch, Dinner, and All Meals, with meal cards showing title, image, rating, price, and details.
- **Membership Section:** Premium packages (Silver, Gold, Platinum) with a checkout option.
- **Footer:** Displays relevant links and contact information.

### 2. **Meal Details Page**

- Meal details include image, distributor name, description, ingredients, post time, rating, and reviews.
- **Like Button:** Requires login. Increases like count on both client and server.
- **Meal Request Button:** For premium users to request meals.

### 3. **Meals Page**

- Search meals by name and filter by category and price range (server-side).
- **Infinite Scrolling:** More meal cards load as the user scrolls.

### 4. **Upcoming Meals**

- Displays cards for upcoming meals, with like functionality restricted to premium users.

### 5. **Checkout Page** _(Private Route)_

- Dynamic package details with **Stripe integration** for payments.
- Shows a toast notification after successful payment and assigns a badge based on the package.

### 6. **Join Us Page** _(Login/Register)_

- Secure login and registration forms with **social login** options.
- New users receive a Bronze Badge upon registration.

### 7. **User Dashboard** _(Private Route)_

- **My Profile:** Displays user info and badges.
- **Requested Meals:** Shows requested meals with status and cancel option.
- **My Reviews:** List of reviews with edit and delete functionality.
- **Payment History:** Displays past payments.

### 8. **Admin Dashboard** _(Private/Admin Route)_

- **Admin Profile:** Displays admin details and meal statistics.
- **Manage Users:** View all users and make users admins. Search users by name or email.
- **Add Meal:** Add meal details with image upload using ImageBB.
- **All Meals:** View, sort, update, and delete meals.
- **All Reviews:** View and delete reviews.
- **Serve Meals:** Manage meal requests and change status to "delivered."
- **Upcoming Meals:** Publish upcoming meals to the main collection.

---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase (Email/Password and Social Login)
- **Payment:** Stripe API
- **Data Fetching:** TanStack Query (for GET requests)

---

## Environment Variables

- Store sensitive credentials like **Firebase config keys** and **MongoDB credentials** in `.env` files.
- Ensure `.env` is added to `.gitignore` to keep credentials secure.

---

## Project Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
