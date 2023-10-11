import PropTypes from "prop-types";
const EventPageCard = ({event}) => {
  return (
    <div className="card card-side w-full h-[26rem] shadow-xl bg-black bg-opacity-50" data-aos="fade-up">
      <figure className="overflow-hidden">
        <img
          src={event?.imageUrl}
          className="w-[50rem] h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-4xl">{event?.title}</h2>
        <p className="text-xl text-slate-300 text-opacity-60">{event?.venue}</p>
        <p className="text-xl text-slate-300 text-opacity-60 w-1/2">
          {event?.longDescription}
        </p>
        <h3 className="font-bold text-blue-500 text-xl mb-2">{event?.date}</h3>
      </div>
    </div>
  );
};

EventPageCard.propTypes = {
  event: PropTypes.object,
};
export default EventPageCard;
