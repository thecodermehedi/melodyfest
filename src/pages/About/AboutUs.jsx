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
        <h1 className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5">
          About Us
        </h1>
        <p className="ont-bold text-slate-300 text-opacity-50  md:text-lg mb-5">
          Elevate Your Event Experience with MelodyFest VIP Packages
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
