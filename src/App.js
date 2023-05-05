import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {
  About,
  FoodMenu,
  Footers,
  Hero,
  Navbar,
  Specials,
  Testimonies,
} from "./pages";
import { styles } from "./styles";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-white text-bg-black font">
        <div className="bg-center bg-no-repeat bg-cover hero">
          <Navbar />
          <Hero />
        </div>
        <div className={`${styles.padding}`}>
          <Specials />
          <Sidebar />
          <FoodMenu />
          <About />
          <Testimonies />
        </div>
        <Footers />
      </div>
    </BrowserRouter>
  );
}

export default App;
