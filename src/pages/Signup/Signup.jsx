import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AuthContext} from "../../context/AuthProvider";
import {updateProfile} from "firebase/auth";
import NavbarSecond from "../../components/NavbarSecond/NavbarSecond";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {signUpWithEmail, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const termsandcon = e.target.termsandcon.checked;
    setShowPassword(false);
    setShowConfirmPassword(false);
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must include at least one special character.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password don't match");
      return;
    }

    if (!termsandcon) {
      toast.error("You must accept terms and conditions");
      return;
    }
    signUpWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          updateProfile(user, {displayName: name})
            .then(() => {
              toast.success("Profile updated!");
            })
            .catch((error) => {
              toast.error(error.message);
              console.log(error);
            });
        }
        e.target.reset();
        navigate("/login");
        toast.success("Signup successful! Please login.");
      })
      .catch((error) => {
        if (error?.message.includes("email-already-in-use")) {
          toast.error("Email already in use");
        }
        toast.error(error.message);
        console.log(error);
      });
    setLoading(false);
  };
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="/icon/signup.svg" type="image/x-icon" />
        <title>Signup  - MelodyFest</title>
      </Helmet>
      <section className="min-h-screen bg-[#181A1B]  text-slate-300">
        <NavbarSecond buttonText={"login"} buttonLink={"/login"} />
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img src="./164.svg" className="w-full" alt="login-image" />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
              <h1 className="text-center text-4xl font-bold text-blue-500 mb-6">
                Create Your Account
              </h1>
              <form onSubmit={handleRegister} className="flex flex-col gap-2">
                {/* <!-- Email input --> */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                  required
                />
                {/* <!-- Password input --> */}
                <div className="flex flex-col relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10 placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                    required
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                {/* <!-- Confirm Password input --> */}
                <div className="flex relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10 placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                    required
                  />
                  {showConfirmPassword ? (
                    <FaEyeSlash
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowConfirmPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowConfirmPassword(true)}
                    />
                  )}
                </div>
                {/* Terms & Conditions */}
                <div className="ml-3 my-2 flex items-center">
                  <input
                    type="checkbox"
                    name="termsandcon"
                    id="termsandcon"
                    className=" checkbox checkbox-sm checkbox-info mr-2"
                  />
                  <label htmlFor="termsandcon">
                    I agree to the{" "}
                    <Link to="/terms" className="text-blue-500" target="_blank">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer text-white rounded-2xl border-none focus:outline-none text-xl"
                >
                  Sign Up
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <span className="text-blue-500">
                    <Link to="/login">Sign in</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Signup;
