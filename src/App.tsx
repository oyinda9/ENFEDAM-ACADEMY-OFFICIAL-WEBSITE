import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import News_and_Events from "./pages/News_and_Events";
import { Creche } from "./pages/Creche";
import { Primary } from "./pages/Primary";
import Sections from "./components/Sections";
import { Secondary } from "./pages/Secondary";
import Nursery from "./pages/Nursery";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="root" className="flex flex-col">
      <Router>
        <Topbar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Admissions" element={<Admissions />} />
            <Route path="/news" element={<News_and_Events />} />
            <Route path="/Creche" element={<Creche />} />
            <Route path="/Primary" element={<Primary />} />
            <Route path="/Secondary" element={<Secondary />} />
            <Route path="/Nursery" element={<Nursery />} />
            <Route path="/Sections" element={<Sections />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
