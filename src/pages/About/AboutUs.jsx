import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";

const AboutUs = () => {
  return (
    <section>
      <Helmet>
        <link rel="shortcut icon" href="/icon/about.svg" type="image/x-icon" />
        <title>About Us - MelodyFest</title>
      </Helmet>
      <NavbarSecond buttonText={"login"} buttonLink={"/login"} />

      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col items-center">
        <h1
          className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5"
          data-aos="fade-down"
        >
          About Us
        </h1>
        <p
          className="font-bold text-slate-300 text-opacity-50  md:text-lg mb-5"
          data-aos="fade-up"
        >
          Crafting Harmonious Experiences
        </p>
        <p className="mb-5 text-center" data-aos="fade-up">
          At MelodyFest, music isn&#39;t just a sound; it&#39;s an emotion, a
          celebration, and a journey. We are the architects of harmonious
          experiences, where melodies come to life and dreams find their rhythm.
          Established by passionate music enthusiasts, MelodyFest is more than
          an event organizing company; it&#39;s a symphony of creativity,
          dedication, and the love for live music.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 my-20"
          data-aos="fade-left"
        >
          <div>
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
              Our Story: A Symphony of Passion
            </p>
            <p>
              Our journey began with a shared passion for creating unforgettable
              moments through music. MelodyFest was born out of a vision to
              bring music enthusiasts together, providing them with immersive
              experiences and a platform to celebrate their love for melodies.
              Over the years, we have curated a plethora of events, each crafted
              with meticulous attention to detail and a deep understanding of
              the soul-stirring power of music.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          data-aos="fade-right"
        >
          <div></div>
          <div className="text-right">
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
              What Sets Us Apart: Crafting Memories, One Note at a Time
            </p>
            <p>
              MelodyFest stands apart in the world of event management because
              we don&#39;t just organize events; we craft memories. Our team of
              dedicated professionals believes in the magic of live music and
              its ability to transcend boundaries. We specialize in creating
              tailor-made experiences, whether it&#39;s an intimate concert, a
              lively music festival, or an exclusive VIP event. With us, every
              event is an opportunity to create something extraordinary.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          data-aos="fade-left"
        >
          <div>
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
              Our Approach: Passion, Precision, Perfection
            </p>
            <p>
              At MelodyFest, we approach every project with unwavering passion,
              precision, and a commitment to perfection. From conceptualization
              to execution, we pour our heart and soul into every detail,
              ensuring that each event is a true reflection of the client&#39;s
              vision. We collaborate with renowned artists, sound experts, and
              creative minds to curate events that leave a lasting impression.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          data-aos="fade-right"
        >
          <div></div>
          <div className="text-right">
            <p className="font-bold text-slate-300 border-b-2 border-b-blue-500  md:text-lg mb-5">
              Our Promise: Where Dreams Find Their Rhythm
            </p>
            <p>
              When you choose MelodyFest, you are not just booking an event
              organizer; you are embarking on a musical journey. We promise to
              transform your ideas into reality, infusing each moment with the
              essence of live music. Whether you&#39;re an artist looking to
              connect with your audience or an audience member eager to be swept
              away by melodies, MelodyFest is your destination.
            </p>
          </div>
        </div>
        <div className="text-center" data-aos="fade-up">
          <p className="font-bold text-slate-300 text-opacity-50  md:text-lg mb-5">
            Join Us in the Melodic Celebration
          </p>
          <p>
            Come, join us in this melodic celebration where dreams find their
            rhythm, and every beat tells a story. Let MelodyFest be the backdrop
            to your most cherished musical memories. Together, let&#39;s create
            harmonious experiences that resonate in your heart long after the
            music fades. Welcome to MelodyFest – where music meets magic, and
            dreams come alive.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
