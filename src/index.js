import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Soon
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/soon" element={<Soon />} />
      {/* <Route path="/Pages" element={<Pages />}> */}
        {/* <Route path="" element={<Soon />} /> */}
      {/* </Route> */}
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();