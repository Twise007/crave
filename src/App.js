import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {
  Hero,
  Navbar,
  About,
  Chefs,
  FoodMenu,
  Testimonies,
  Specials,
  Locations,
  Footers,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-white text-bg-black">
        <div className="bg-center bg-no-repeat bg-cover hero">
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
