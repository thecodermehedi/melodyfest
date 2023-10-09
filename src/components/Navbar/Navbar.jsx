import {CgMenuLeft} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthProvider";
import userPlaceholder from "../../assets/images/user.png";
import {IoSettingsOutline, IoLogOutOutline} from "react-icons/io5";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const NavLinks = (
    <>
      <NavLink
        to={"/"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active border-b-2 font-semibold px-2 py-1 border-white"
            : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active border-b-2 font-semibold px-2 py-1 border-white"
            : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
        }
      >
        Services
      </NavLink>
      {user && (
        <NavLink
          to={"/events"}
          className={({isActive, isPending}) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 font-semibold px-2 py-1 border-white"
              : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
          }
        >
          Events
        </NavLink>
      )}
      {user && (
        <NavLink
          to={"/vip-experiences"}
          className={({isActive, isPending}) =>
            isPending
              ? "pending"
              : isActive
              ? "active border-b-2 font-semibold px-2 py-1 border-white"
              : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
          }
        >
          VIP
        </NavLink>
      )}
      <NavLink
        to={"/about"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active border-b-2 font-semibold px-2 py-1 border-white"
            : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active border-b-2 font-semibold px-2 py-1 border-white"
            : "font-semibold px-2 py-1 border-transparent hover:border-white border-b-2"
        }
      >
        Contact
      </NavLink>{" "}
    </>
  );
  return (
    <nav className="absolute top-0 z-[999] w-full p-2 md:p-5 lg:px-20">
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent hover:bg-transparent border-none hover:border-none text-white lg:hidden text-2xl md:text-3xl"
            >
              <CgMenuLeft />
            </label>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-white text-black rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          >
            MELODYFEST
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-16">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-sm border-transparent md:btn-md hover:bg-transparent bg-transparent  hover:border-white btn-circle avatar"
              >
                <div className="w-5 md:w-9 lg:w-10 rounded-full">
                  <img src={user?.photoURL || userPlaceholder} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-white text-black rounded-box w-36 md:w-52"
              >
                <li>
                  <Link className="ml-2 font-semibold" to={"#"}>
                    {user?.displayName || "Your Name"}
                  </Link>
                </li>
                <li>
                  <Link to={"/settings"}>
                    {" "}
                    <IoSettingsOutline /> Settings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    {" "}
                    <IoLogOutOutline /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border-white text-white min-h-0 h-8 md:h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
