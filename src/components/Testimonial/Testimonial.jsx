// import PropTypes from "prop-types";

import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Testimonial = () => {
  return (
    <section className="bg-[#181A1B]  p-5 md:p-10 lg:p-20">
      <h1 className="font-bold uppercase text-xl md:text-2xl  text-blue-500 mb-5 " data-aos="fade-up">
        our customers
      </h1>
      <p className="font-semibold text-xl  md:text-3xl lg:text-5xl text-slate-300 mb-5 " data-aos="fade-up">
        Testimonials
      </p>
      <p className="font-bold text-white text-opacity-50  md:text-lg  w-80 md:w-full mb-5 " data-aos="fade-up">
        Crafting Moments, Creating Memories: Your Event, Our Expertise
      </p>
      <SwiperSlider />
    </section>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
