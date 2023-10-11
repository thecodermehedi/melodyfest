import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ServicePageCard = ({service}) => {
  return (
    <div className="card w-full card-side h-[26rem] shadow-xl bg-black bg-opacity-50" data-aos="fade-up">
      <figure className="overflow-hidden">
        <img
          src={service?.photo}
          className="w-[50rem] h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-4xl">{service?.name}</h2>
        <p className="text-xl text-slate-300 text-opacity-60">
          {service?.long_description}
        </p>
        <h3 className="font-bold text-white mb-2">
          Duration: {service?.duration}
        </h3>
        <div className="flex items-center gap-10">
          <button className="btn font-bold text-blue-500 text-base rounded-2xl bg-black bg-opacity-30 border-none cursor-default hover:bg-black hover:bg-opacity-30">
            {service?.price}
          </button>
          <Link
            to={`/services/${service?.id}`}
            className="btn font-bold bg-opacity-20 border-none bg-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 text-base capitalize rounded-2xl hover:border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ServicePageCard.propTypes = {
  service: PropTypes.object,
};

export default ServicePageCard;
