import PropTypes from "prop-types";

const EventCard = ({event}) => {
  return (
    <div className="card card-compact w-full lg:w-96 bg-black bg-opacity-50 shadow-xl" data-aos="fade-up">
      <figure className="relative ">
        <img
          src={event?.imageUrl}
          className="h-64 w-full object-cover object-center"
        />
        <div className="bg-black bg-opacity-40 absolute w-full h-full"></div>
        <h1 className="absolute bottom-4 text-2xl font-black left-4 text-slate-300">
          {event?.title}
        </h1>
      </figure>
      <div className="card-body">
        <p className="text-lg">{event?.venue}</p>
        <p className="text-base mb-2 text-gray-400 text-opacity-60">
          {event?.shortDescription}
        </p>
        <button className="btn font-bold text-blue-500 text-base rounded-2xl bg-black bg-opacity-30 border-none cursor-default hover:bg-black hover:bg-opacity-30">
          {event?.date}
        </button>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
};

export default EventCard;
