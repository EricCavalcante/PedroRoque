import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="bg-gradient-to-b from-Bg to-black text-white flex flex-col justify-center">
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path="/fotos/:id" element={<Galeria/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}

