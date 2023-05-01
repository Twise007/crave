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
import { styles } from "./styles";

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
          <FoodMenu />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
