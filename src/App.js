import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Region from "./components/Region";
import TrailTitleList from "./components/TrailTitleList";
import Difficulty from "./components/Difficulty";
import Park from "./components/Park";
// import NYNJTC from "./components/NYNJTC";
import MyTrails from "./components/MyTrails";
import TrailDetail from "./components/TrailDetail";
import RegionArea from "./components/RegionArea";
import ParkArea from "./components/ParkArea";
import Donate from "./components/Donate";
import DonateInfo from "./components/DonateInfo";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="trail">
      <Header />
      <Sidebar />
      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/region" element={<Region />} />
            <Route path="/region/:region" element={<RegionArea />} />
            <Route path="/region/:region/:name" element={<TrailDetail />} />
            <Route path="/title" element={<TrailTitleList />} />
            <Route path="/title/:name" element={<TrailDetail />} />
            <Route path="/difficulty" element={<Difficulty />} />
            <Route path="/difficulty/:name" element={<TrailDetail />} />
            <Route path="/park" element={<Park />} />
            <Route path="/park/:park" element={<ParkArea />} />
            <Route path="/park/:park/:name" element={<TrailDetail />} />
            {/* <Route path="/nynjtc" element={<NYNJTC />} /> */}
            <Route path="/donate" element={<Donate />} />
            <Route path='/donateinfo' element={<DonateInfo />} />
            <Route path="/mytrails" element={<MyTrails />} />
            <Route path="/mytrails/:name" element={<TrailDetail />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
