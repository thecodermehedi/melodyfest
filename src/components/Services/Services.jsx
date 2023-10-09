import PropTypes from "prop-types";
import ServiceCard from "../ServiceCard/ServiceCard";
import {useContext} from "react";
import {ServiceContext} from "../../context/ServiceProvider";

const Services = () => {
  const services = useContext(ServiceContext);
  return (
    <section className="min-h-[30rem] bg-[#181A1B]  p-5 md:p-10 lg:p-20">
      <h1 className="font-bold capitalize text-xl  md:text-3xl lg:text-5xl text-white mb-10" data-aos="fade-up">
        our services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start gap-10">
        {services.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </section>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
