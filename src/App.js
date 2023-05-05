import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import {
  About,
  Cakes,
  Coffee,
  Fastfood,
  FoodMenu,
  Footers,
  Hero,
  Naijamenu,
  Navbar,
  Pizza,
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
          <Routes>
            <Route
              path="/"
              element={
                <Sidebar>
                  <Coffee />
                </Sidebar>
              }
            />
            <Route
              path="/coffee"
              element={
                <Sidebar>
                  <Coffee />
                </Sidebar>
              }
            />
            <Route
              path="/cakes"
              element={
                <Sidebar>
                  <Cakes />
                </Sidebar>
              }
            />
            <Route
              path="/pizza"
              element={
                <Sidebar>
                  <Pizza />
                </Sidebar>
              }
            />
            <Route
              path="/fastfood"
              element={
                <Sidebar>
                  <Fastfood />
                </Sidebar>
              }
            />
            <Route
              path="/naijamenu"
              element={
                <Sidebar>
                  <Naijamenu />
                </Sidebar>
              }
            />
          </Routes>
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
