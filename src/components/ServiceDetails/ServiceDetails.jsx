import {useContext} from "react";
import {ServiceContext} from "./../../context/ServiceProvider";
import {Link, useParams} from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import {FaLocationDot, FaPhone} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import Footer from "../Footer/Footer";
const ServiceDetails = () => {
  const services = useContext(ServiceContext);
  const {id} = useParams();
  const intID = Number(id);
  const service = services.find((item) => item.id === intID);
  return (
    <section>
      <Navbar />
      <div
        className="hero min-h-[28rem] w-full"
        style={{
          backgroundImage: `url(${service?.photo})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{service?.name}</h1>
          </div>
        </div>
      </div>
      <div className=" bg-[#181A1B] p-5 md:p-10 lg:p-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="w-fit">
            <h1 className="text-5xl font-bold">{service?.short_description}</h1>
            <p className="py-6">{service?.full_description}</p>
          </div>
          <div className="w-fit h-80  bg-opacity-50 rounded-2xl p-5 flex flex-col justify-between items-center border-blue-500 border">
            <h1 className="text-center font-bold text-2xl">
              Have Additional Questions?
            </h1>
            <div className="flex flex-col justify-start gap-4">
              <div className="flex gap-3 items-center ">
                <FaLocationDot className="text-blue-500" />
                <p>
                  23 Harmonious Avenue, <br /> Dhaka, 1205, Bangladesh
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhone className="text-blue-500" />
                <Link to={"tel:+880 2 1234567"}>Phone: +880 2 1234567</Link>
              </div>
              <div className="flex gap-3 items-center">
                <MdEmail className="text-blue-500" />
                <Link to={"mailto:hey@melodyfest.com"}>hey@melodyfest.com</Link>
              </div>
            </div>
            <button className="btn font-bold bg-opacity-20 border-none bg-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 text-base normal-case rounded-2xl hover:border-none">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ServiceDetails;
