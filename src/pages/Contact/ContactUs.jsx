import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import {toast} from "react-toastify";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully");
    e.target.reset();
  };
  return (
    <section>
      <Helmet>
        <link
          rel="shortcut icon"
          href="/icon/contact.svg"
          type="image/x-icon"
        />
        <title>Contact Us - MelodyFest</title>
      </Helmet>
      <NavbarSecond buttonText={"login"} buttonLink={"/login"} />

      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:p-20  flex flex-col items-center">
        <h1
          className="font-bold capitalize text-xl text-center  md:text-3xl lg:text-5xl text-slate-300 w-fit mb-5"
          data-aos="fade-down"
        >
          Contact Us
        </h1>
        <p
          className="ont-bold text-slate-300 text-opacity-50  md:text-lg mb-5 text-center "
          data-aos="fade-up"
        >
          Reach Out, Let&#39;s Create Harmony
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:my-20">
          <div className="w-1/2 hidden lg:block" data-aos="fade-up">
            <img src="/mailbox.svg" alt="mailbox_picture" />
          </div>
          <form
            className="bg-black bg-opacity-50 text-slate-300 p-8 rounded-2xl shadow-xl w-full  lg:w-1/2"
            onSubmit={handleSubmit}
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-6 ">Get in Touch</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl input focus:outline-none focus:border-blue-500 border-transparent "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl input focus:outline-none focus:border-blue-500 border-transparent "
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl focus:outline-none focus:border-blue-500 border-transparent textarea overflow-hidden resize-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
