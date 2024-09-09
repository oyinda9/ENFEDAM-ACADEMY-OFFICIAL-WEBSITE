import React from "react";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="root" className="flex flex-col ">
      <Topbar />
      <Navbar />

      <main className="">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
