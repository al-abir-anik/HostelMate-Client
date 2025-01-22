const MealCard = ({ meals }) => {
  return (
    <div className="card group hover:shadow sm:max-w-sm">
      <figure>
        <img
          src="https://cdn.flyonui.com/fy-assets/components/card/image-8.png"
          alt="Shoes"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5">Nike Air Max</h5>
        <p className="text-sm text-gray-600 mb-1">Rating: ⭐⭐⭐⭐⭐</p>
        <p className="text-lg font-bold mb-2">$120.00</p>
        <p className="mb-6">
          Nike Air Max is a popular line of athletic shoes that feature Nike's
          signature Air cushioning technology in the sole.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Meal Details</button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
