import React from "react";
import Navbar from "./Navbar";
// import Hero from "./Hero";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Cards from "./Cards";
import Footer from "./Footer";
function App() {
 

  return (
    <>
      <div>
      <Navbar />
      {/* <Hero /> */}
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
    </>
  )
}

export default App
