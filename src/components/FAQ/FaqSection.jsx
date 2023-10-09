const faq = [
  {
    title: "Why should I choose MelodyFest for my music event?",
    content:
      "At MelodyFest, we are more than event organizers; we are architects of musical dreams. Our passion for live music drives us to craft unforgettable experiences where the power of sound meets the magic of moments. Your event isn't just an occasion; it's a symphony waiting to be composed, and we ensure every note resonates with perfection.",
  },
  {
    title: "What makes MelodyFest's concerts and festivals unique?",
    content:
      "Our concerts and festivals are curated with meticulous attention to detail. From artist selection to stage setup, every element is designed to create an immersive and vibrant musical journey. We believe in weaving stories through music, creating memories that echo long after the event ends. Your experience with us is not just an event; it's a narrative waiting to be written.",
  },
  {
    title: "How do MelodyFest's VIP experiences stand out?",
    content:
      "Our VIP experiences offer more than backstage access; they offer a glimpse into the heart of music. Imagine meeting your favorite artist, feeling the energy of the crowd, and immersing yourself in a world where dreams come true. We believe in making dreams tangible, crafting moments that become cherished memories, and ensuring you leave with a heart full of music and memories.",
  },
  {
    title: "What sets MelodyFest's sound equipment rentals apart?",
    content:
      "Our sound equipment rentals aren't just speakers; they are conduits of emotion. With our professional-grade systems, the music caresses your ears, filling the air with the pure essence of melody. We understand the significance of clear, crisp sound, and we provide equipment that elevates your event, turning it into an auditory masterpiece.",
  },
  {
    title: "Can MelodyFest help create a unique theme for my event?",
    content:
      "Absolutely! We don't just create themes; we craft atmospheres. Our themed decor services transform spaces into enchanting realms, each corner telling a different story. Whether it's an elegant backdrop or a vibrant stage setup, our creative touch ensures your event is more than an occasion; it's a visual odyssey that captivates every eye present.",
  },
  {
    title: "How does MelodyFest ensure a seamless event execution?",
    content:
      "Seamlessness is our promise. Behind every event, there's a team dedicated to orchestrating perfection. We sweat the small stuff so you can revel in the big moments. From sound and lighting setup to artist coordination, we handle it all. Your event isn't just an event; it's a masterpiece in the making, and we ensure every stroke is impeccable.",
  },
  {
    title: "What can I expect from MelodyFest's ticketing solutions?",
    content:
      "Our ticketing solutions are designed with simplicity and convenience in mind. Buying tickets for your dream event should be as effortless as enjoying it. With our user-friendly online system, you can secure your spot with a few clicks. We believe in removing barriers between you and the music, ensuring your journey from ticket purchase to event experience is seamless.",
  },
  {
    title: "How does MelodyFest create engaging interactive activities?",
    content:
      "Engagement is more than just a buzzword for us; it's a commitment. Our interactive activities aren't just distractions; they are connections waiting to be made. From workshops that inspire to interactive sessions that spark creativity, we believe in crafting experiences where you actively participate. Your event isn't just a gathering; it's a community where passions converge and friendships are born.",
  },
  {
    title: "Can MelodyFest help coordinate artists for my event?",
    content:
      "Absolutely! We understand that artists are the heartbeat of any music event. Our coordination goes beyond schedules; it's about understanding their essence and weaving it seamlessly into the event fabric. We ensure artists are not just performers but storytellers who contribute to the narrative of your event. Your event isn't just a platform; it's a canvas where artists paint emotions, and we curate the palette.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-[#181A1B]  p-5 md:p-10 lg:px-20">
      <h1 className="font-bold uppercase text-xl md:text-2xl  text-blue-500 mb-5" data-aos="fade-up">
        faq
      </h1>
      <p className="font-semibold text-xl  md:text-3xl lg:text-5xl text-slate-300 mb-5" data-aos="fade-up">
        The Most Common Questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {faq.map((aq, idx) => (
          <div
            key={idx}
            className="card lg:w-96 bg-black bg-opacity-50 shadow-xl" data-aos="fade-up"
          >
            <div className="card-body">
              <h2 className="card-title text-white text-2xl">{aq.title}</h2>
              <p>{aq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
