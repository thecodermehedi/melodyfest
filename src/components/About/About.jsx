import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
const About = () => {
  return (
    <section className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20">
      <h1
        className="font-bold uppercase text-xl md:text-2xl  text-blue-500 mb-5"
        data-aos="fade-up"
      >
        about us
      </h1>
      <p
        className="font-semibold text-xl  md:text-3xl lg:text-5xl text-slate-300 mb-5"
        data-aos="fade-up"
      >
        We at MelodyFest craft unforgettable musical experiences with passion
        and precision. Join our extraordinary journey where moments echo long
        after applause.
      </p>
      <div className="block lg:flex justify-between items-center my-10" data-aos="fade-up">
        <p
          className="font-bold text-white text-opacity-50  md:text-lg  w-80 md:w-full mb-5"
          data-aos="fade-up"
        >
          Dive into our world of musical wonders. Click to discover the magic
          behind our unforgettable events.
        </p>
        <Link
          to={"/about"}
          className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-blue-500 text-white min-h-0 h-10 lg:h-12 hover:bg-blue-500 hover:text-white hover:border-blue-500 normal-case font-bold text-xl"
          data-aos="fade-up"
        >
          About Us
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start gap-10">
        <div
          className="w-full h-fit lg:h-[21rem] bg-black bg-opacity-50 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <div className="p-5 mb-5 rounded-2xl bg-[#181A1B] w-fit">
            <Icon
              icon="solar:music-note-outline"
              className="text-blue-500 text-3xl md:text-5xl lg:text-7xl" data-aos="fade-up"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Harmonious
          </h1>
          <p className=" text-lg md:text-xl lg:text-2xl font-semibold text-white text-opacity-50" data-aos="fade-up">
            Experience harmonious celebrations and musical wonders at
            MelodyFest.
          </p>
        </div>
        <div
          className="w-full h-fit lg:h-[21rem] bg-black bg-opacity-50 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <div className="p-5 mb-5 rounded-2xl bg-[#181A1B] w-fit" data-aos="fade-up">
            <Icon
              icon="iconoir:lens"
              className="text-blue-500 text-3xl md:text-5xl lg:text-7xl"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Captivating
          </h1>
          <p className=" text-lg md:text-xl lg:text-2xl font-semibold text-white text-opacity-50" data-aos="fade-up">
            Explore captivating concerts and immersive festivals that linger in
            your heart.
          </p>
        </div>
        <div
          className="w-full h-fit lg:h-[21rem] bg-black bg-opacity-50 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <div className="p-5 mb-5 rounded-2xl bg-[#181A1B] w-fit" data-aos="fade-up">
            <Icon
              icon="fluent-emoji-high-contrast:left-speech-bubble"
              className="text-blue-500 text-3xl md:text-5xl lg:text-7xl"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">
            Memorable
          </h1>
          <p className=" text-lg md:text-xl lg:text-2xl font-semibold text-white text-opacity-50" data-aos="fade-up">
            Create memorable moments with us, where melodies echo long after the
            applause.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
