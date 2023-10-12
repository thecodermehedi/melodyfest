import NavbarSecond from "./../../components/NavbarSecond/NavbarSecond";
import Footer from "./../../components/Footer/Footer";
import {Helmet} from "react-helmet-async";
import EventPageCard from "../../components/EventPageCard/EventPageCard";
import EventCard from "../../components/EventCard/EventCard";
const eventsData = [
  {
    id: 1,
    title: "Soulful Jazz Night",
    date: "November 20, 2023",
    venue: "Downtown Jazz Club",
    imageUrl: "https://i.ibb.co/JkCJh21/jazznight-1.jpg",
    shortDescription:
      "An enchanting night of soulful jazz music with talented musicians.",
    longDescription:
      "Join us for a magical evening of soulful jazz music at Downtown Jazz Club. Immerse yourself in the melodic tunes played by some of the most talented jazz musicians. Experience the soothing ambiance and let the music take you on a journey.",
  },
  {
    id: 2,
    title: "Rock the City: Live Band Night",
    date: "December 5, 2023",
    venue: "Rock Arena",
    imageUrl: "https://i.ibb.co/Wcdvz5w/band-night-1.jpg",
    shortDescription:
      "A high-energy night featuring live bands rocking the stage.",
    longDescription:
      "Get ready to rock the night away at Rock Arena! Experience the electrifying energy of live bands as they perform your favorite rock hits. The venue will be alive with music, excitement, and unforgettable performances.",
  },
  {
    id: 3,
    title: "Electro Beats Festival",
    date: "January 15, 2024",
    venue: "Electro Park",
    imageUrl: "https://i.ibb.co/4F0d6TT/electro-beast-festival-1.jpg",
    shortDescription:
      "An electrifying festival showcasing cutting-edge electronic beats.",
    longDescription:
      "Join us at Electro Park for an electrifying festival that celebrates the world of electronic beats. Experience the latest in electronic music trends, featuring renowned DJs and artists. Immerse yourself in the pulsating rhythms and visually stunning performances.",
  },
  {
    id: 4,
    title: "Classical Symphony Evening",
    date: "February 10, 2024",
    venue: "City Opera House",
    imageUrl: "https://i.ibb.co/Xt6ZjX8/classical-1.jpg",
    shortDescription:
      "A sophisticated evening featuring classical symphonies performed by a grand orchestra.",
    longDescription:
      "Indulge in the elegance of classical music at City Opera House. Join us for an enchanting evening featuring a grand orchestra performing timeless classical symphonies. Let the music transport you to an era of sophistication and artistic brilliance.",
  },
  {
    id: 5,
    title: "Indie Vibes Showcase",
    date: "March 3, 2024",
    venue: "Indie Lounge",
    imageUrl: "https://i.ibb.co/RY2dtY8/indie-vibes-1.jpg",
    shortDescription:
      "A showcase of indie music talents in a cozy lounge setting.",
    longDescription:
      "Discover the soulful melodies and creative sounds of indie music at Indie Lounge. Our Indie Vibes Showcase features talented indie artists and bands performing their original compositions. Experience the intimate atmosphere and connect with the artists on a musical journey.",
  },
  {
    id: 6,
    title: "EDM Extravaganza",
    date: "April 18, 2024",
    venue: "EDM Arena",
    imageUrl: "https://i.ibb.co/tqxhP31/edm-1.jpg",
    shortDescription:
      "An extravagant EDM event with world-class DJs and mind-blowing visuals.",
    longDescription:
      "Prepare for an unforgettable night at EDM Arena's EDM Extravaganza! Dive into a world of pulsating beats, vibrant visuals, and electrifying performances by world-class DJs. This event is a sensory feast, combining music and visuals to create an immersive EDM experience.",
  },
];

const Events = () => {
  return (
    <section>
      <Helmet>
        <title>
          MelodyFest Events - Discover Unforgettable Music Experiences
        </title>
      </Helmet>
      <NavbarSecond />
      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col items-center">
        <h1 className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5" data-aos="fade-down">
          MelodyFest Events
        </h1>
        <p className="ont-bold text-slate-300 text-opacity-50 text-center   md:text-lg mb-5" data-aos="fade-up">
          Explore our diverse range of MelodyFest events, from intimate concerts
          to vibrant festivals, tailored to amplify your musical journey.
        </p>
        <div className="grid-cols-1 place-items-center gap-10 my-10 hidden lg:grid">
          {eventsData.map((event) => (
            <EventPageCard key={event?.id} event={event} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:hidden place-items-center lg:place-items-start gap-10">
          {eventsData.map((event) => (
            <EventCard key={event?.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Events;
