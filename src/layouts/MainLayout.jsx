import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const MainLayout = () => {
  return (
    <main className="font-manrope">
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </main>
  );
};

export default MainLayout;
