import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
import bannerOne from "../../assets/images/bannerOne.jpg";
import bannerTwo from "../../assets/images/bannerTwo.jpg";
import bannerThree from "../../assets/images/bannerThree.jpg";
import bannerFour from "../../assets/images/bannerFour.jpg";
import bannerFive from "../../assets/images/bannerFive.jpg";
import bannerSix from "../../assets/images/bannerSix.jpg";
import Navbar from "./../Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <header className="relative">
      <Navbar />
      <Swiper
        centeredSlides={true}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerOne})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1
                  className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold"
                  data-aos="fade-down"
                >
                  Experience the Rhythm of MelodyFest
                </h1>
                <p
                  className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5"
                  data-aos="fade-up"
                >
                  Dive into a world of musical wonders, where every beat tells a
                  story and every note ignites your soul.
                </p>
                <button
                  className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl"
                  data-aos="fade-up"
                >
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerTwo})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Where Dreams Harmonize MelodyFest Unleashed
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  Join us in creating harmonious celebrations, where music,
                  passion, and joy blend seamlessly into unforgettable moments.
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Discover Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerThree})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Your VIP Ticket to Melodic Bliss
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  Indulge in VIP experiences designed for music enthusiasts,
                  offering exclusive access and cherished encounters with your
                  favorite artists.
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Get VIP Pass
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerFour})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Crafting memories One Note at a Time
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  PImmerse in our world of energetic performances, fan
                  engagement, and seamless ticketing, ensuring your event
                  experience is flawless.
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerFive})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Feel the pulse MelodyFest&#39;s Ultimate Musical Soiree
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  Explore a universe of live concerts, immersive experiences,
                  and top-notch sound and lighting equipment, promising an
                  electrifying ambiance.
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Secure Your Spot
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerSix})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Unlock MelodyFest magic Your Musical Playground Awaits
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  Discover an array of vibrant stages, artist meet-and-greets,
                  and expert event planning, guaranteeing your entry into a
                  realm of music fantasies.
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Plan Your Visit
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Banner;
