import React, { useState, useEffect, useContext, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Region from "./components/Region";
import TrailTitleList from "./components/TrailTitleList";
import Difficulty from "./components/Difficulty";
import Park from "./components/Park";
import NYNJTC from "./components/NYNJTC";
import MyTrails from "./components/MyTrails";
import axios from "axios";
import TrailDetail from "./components/TrailDetail";
import RegionArea from "./components/RegionArea";
import ParkArea from "./components/ParkArea";
import { TrailDataContext, GolbalContextProvider} from './context/GlobalContext'


function App() {
  const [trails, setTrails] = useState([]);
  const [isLoading, setIsLoading ] = useState(false)

  const navigate = useNavigate();


  const [myTrails, setMyTrails] = useState([]);

  function saveTrails(newTrail) {
   console.log('trigger');
    setMyTrails(() => {
      myTrails.push(newTrail);

      return { myTrails };
    });

    console.log("trail", myTrails);
    localStorage.setItem("myData", myTrails);
  }

  useMemo(() => {
    setIsLoading(true)
    axios
      .get("../../trailData.json")
      .then((res) => setTrails(res.data))
      .finally(() => setIsLoading(false));
      
  }, [axios, setTrails]);
console.log(trails);
  return (
    <div className="trail">
      <Header />
      <Sidebar />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="container">
          
            <Routes navigate={navigate}>
              <Route path="/" element={<Home />} />
              <Route path="/region" element={<Region trails={trails} />} />
              <Route
                path="/region/:region"
                element={<RegionArea trails={trails} />}
              />
              <Route
                path="/region/:region/:name"
                element={
                  <TrailDetail trails={trails} addMyTrail={saveTrails} />
                }
              />
              <Route
                path="/title"
                element={<TrailTitleList trails={trails} />}
              ></Route>
              <Route
                path="/title/:name"
                element={<TrailDetail trails={trails} />}
              />
              <Route
                path="/difficulty"
                element={<Difficulty trails={trails} />}
              />
              <Route
                path="/difficulty/:name"
                element={<TrailDetail trails={trails} />}
              />
              <Route path="/park" element={<Park trails={trails} />} />
              <Route
                path="/park/:park"
                element={<ParkArea trails={trails} />}
              />
              <Route
                path="/park/:park/:name"
                element={<TrailDetail trails={trails} />}
              />
              <Route path="/nynjtc" element={<NYNJTC />} />
              <Route
                path="/mytrails"
                element={<MyTrails myTrails={myTrails} />}
              />
            </Routes>
          
        </div>
      )}
    </div>
  );
}

export default App;
