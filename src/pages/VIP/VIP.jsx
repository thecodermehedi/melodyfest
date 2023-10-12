import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import VipCard from "./../../components/VipCard/VipCard";

const Vip = () => {
  const vipExperiences = [
    {
      id: 1,
      title: "Backstage Pass",
      description:
        "Get an exclusive behind-the-scenes tour, interact with artists, and witness the magic up close.",
      price: "$500 - $1,500",
      duration: "1 hour",
      availability: "Limited spots available",
      perks: [
        "Backstage tour",
        "Artist interactions",
        "Complimentary drinks",
        "VIP lounge access",
      ],
      reviews: [
        {
          user: "SuperFan1",
          comment:
            "Meeting my favorite artist backstage was a dream come true! MelodyFest made it happen.",
        },
        {
          user: "VIPGuest123",
          comment:
            "The VIP lounge was luxurious, and the staff was incredibly accommodating. Highly recommended!",
        },
      ],
    },
    {
      id: 2,
      title: "Private Meet-and-Greet",
      description:
        "Enjoy one-on-one time with your favorite artist, take photos, and receive personalized memorabilia.",
      price: "$1,000 - $3,000",
      duration: "45 minutes",
      availability: "Limited slots per event",
      perks: [
        "Personalized autographs",
        "Professional photos",
        "Exclusive merchandise",
        "Front-row seating",
      ],
      reviews: [
        {
          user: "Fanatic23",
          comment:
            "Meeting my favorite band was a dream come true! MelodyFest made it an unforgettable experience.",
        },
        {
          user: "MusicLover22",
          comment:
            "The artists were so friendly and accommodating. A must-do for any fan!",
        },
      ],
    },
    {
      id: 3,
      title: "VIP Lounge Access",
      description:
        "Relax in a luxurious lounge, enjoy gourmet catering, and mingle with fellow music enthusiasts.",
      price: "$200 - $500",
      duration: "Full event duration",
      availability: "Limited lounge passes available",
      perks: [
        "Gourmet catering",
        "Comfortable seating",
        "Dedicated staff",
        "Exclusive event viewing area",
      ],
      reviews: [
        {
          user: "EventPro123",
          comment:
            "The VIP lounge experience was fantastic! MelodyFest's hospitality added to the event's charm.",
        },
        {
          user: "MusicEnthusiast",
          comment:
            "Professional-grade lounge facilities. Highly recommended for any music event!",
        },
      ],
    },
  ];
  return (
    <section>
      <Helmet>
        <title>MelodyFest VIP - Exclusive VIP Experiences</title>
      </Helmet>
      <NavbarSecond />
      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col items-center">
        <h1
          className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5"
          data-aos="fade-down"
        >
          Unlock Unforgettable Moments
        </h1>
        <p
          className="ont-bold text-slate-300 text-opacity-50  md:text-lg mb-5 text-center "
          data-aos="fade-up"
        >
          Elevate Your Event Experience with MelodyFest VIP Packages
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start gap-10">
          {vipExperiences.map((experience) => (
            <VipCard key={experience?.id} experience={experience} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Vip;
