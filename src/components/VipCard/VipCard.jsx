import PropTypes from "prop-types";

const VipCard = ({experience}) => {
  const {title, description, price, duration, availability, perks} = experience;
  return (
    <div className="max-w-xs mx-auto bg-black h-96 border-2 border-transparent cursor-pointer transition-all duration-500 hover:scale-110 hover:border-blue-500 bg-opacity-50 shadow-2xl hover:shadow-blue-500/50 rounded-2xl overflow-hidden my-4">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-blue-500 mb-2">{title}</h2>
        <p className="text-slate-300 text-opacity-50 text-sm mb-4">
          {description}
        </p>
        <div className="mb-2 text-slate-400">
          <strong className="text-blue-500">Price: </strong> {price}
        </div>
        <div className="mb-2 text-slate-400">
          <strong className="text-blue-500">Duration: </strong> {duration}
        </div>
        <div className="mb-2 text-slate-400">
          <strong className="text-blue-500">Availability: </strong>{" "}
          {availability}
        </div>
        <div className="mb-4 text-slate-400">
          <strong className="text-blue-500">Perks: </strong>
          <ul className="list-disc pl-4">
            {perks.map((perk, index) => (
              <li key={index}>{perk}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

VipCard.propTypes = {
  experience: PropTypes.object,
};

export default VipCard;
