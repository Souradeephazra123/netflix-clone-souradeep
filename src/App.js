import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderForMobile from "./components/HeaderForMobile";
import TvShows from "./routes/TvShows";
import Movie from "./routes/Movie";
function App() {
  return (
    <div className="App font-sans">
      <Suspense>
        <Header />
        <HeaderForMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
// 8894115041
