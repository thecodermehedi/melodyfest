import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ServiceCard = ({service}) => {
  return (
    <div className="card card-compact w-full lg:w-96 bg-black bg-opacity-50 shadow-xl" data-aos="fade-up">
      <figure className="relative ">
        <img
          src={service?.photo}
          className="h-64 w-full object-cover object-center"
        />
        <div className="bg-black bg-opacity-40 absolute w-full h-full"></div>
        <h1 className="absolute bottom-4 text-2xl font-black left-4 text-slate-300">
          {service?.name}
        </h1>
      </figure>
      <div className="card-body">
        <p className="text-lg">{service?.short_description}</p>
        <div className="flex justify-between items-center">
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

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
