const SectionTitle = ({ heading, description }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-[#2D2A6E] text-4xl font-semibold text-center tracking-wider">
        {heading}
      </h2>
      <p className="text-[#4D5574] text-base font-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
