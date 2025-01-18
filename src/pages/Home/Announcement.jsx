import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Announcement = () => {
  const events = [
    {
      id: 1,
      title: "Special Dinner Night",
      date: "January 20, 2025",
      description:
        "Join us for a special dinner with a variety of cuisines to celebrate the New Year.",
    },
    {
      id: 2,
      title: "Hostel Cleanliness Drive",
      date: "January 25, 2025",
      description:
        "Participate in making our hostel cleaner and greener. Volunteers are welcome!",
    },
    {
      id: 3,
      title: "Monthly Feedback Meeting",
      date: "February 1, 2025",
      description:
        "Share your feedback about meals and hostel services to help us improve.",
    },
  ];

  return (
    <section className=" py-10">
      <div className="container mx-auto px-4 space-y-10">
        <SectionTitle
          heading={"Category"}
          description={"this is the way how i do my hostelmate category"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-100 shadow-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcement;
