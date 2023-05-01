import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {
  FoodMenu,
  Hero,
  Navbar,
  Specials,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-white text-bg-black font">
        <div className="min-h-screen bg-center bg-no-repeat bg-cover hero">
          <Navbar />
          <Hero />
        </div>
        <Specials/>
        <FoodMenu/>
      </div>
    </BrowserRouter>
  );
}

export default App;
