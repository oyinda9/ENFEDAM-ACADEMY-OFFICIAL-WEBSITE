import React from "react";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="root" className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
