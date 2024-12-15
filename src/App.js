import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Booking />} />
      </Routes>
    </div>
  );
};

export default App;
