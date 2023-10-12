import {useContext} from "react";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import Footer from "./../../components/Footer/Footer";
import {ServiceContext} from "./../../context/ServiceProvider";
import ServicePageCard from "../../components/ServicePageCard/ServicePageCard";
import {Helmet} from "react-helmet-async";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const ServicesPage = () => {
  const services = useContext(ServiceContext);
  return (
    <section>
      <Helmet>
        <link
          rel="shortcut icon"
          href="/icon/service.svg"
          type="image/x-icon"
        />
        <title>MelodyFest - Your Gateway to Musical Experiences</title>
      </Helmet>
      <NavbarSecond buttonText={"login"} buttonLink={"/login"} />
      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col items-center">
        <h1 className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5" data-aos="fade-down">
          our services
        </h1>
        <p className="ont-bold text-slate-300 text-opacity-50 text-center  md:text-lg mb-5" data-aos="fade-up">
          Crafting Melodic Experiences Tailored to Your Dreams and Desires: Dive
          into Our Premier Music Event Services.
        </p>
        <div className="grid-cols-1 place-items-center gap-10 my-10 hidden lg:grid">
          {services.map((service) => (
            <ServicePageCard key={service?.id} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:hidden place-items-center lg:place-items-start gap-10">
          {services.map((service) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ServicesPage;
