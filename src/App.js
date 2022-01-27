import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Region from "./components/Region";
import TrailTitleList from "./components/TrailTitleList";
import Difficulty from "./components/Difficulty";
import Park from "./components/Park";
import NYNJTC from "./components/NYNJTC";
import MyTrails from "./components/MyTrails";
import TrailDetail from "./components/TrailDetail";
import RegionArea from "./components/RegionArea";
import ParkArea from "./components/ParkArea";
import Donate from "./components/Donate";
import { GolbalContextProvider} from './context/GlobalContext'


function App() {
 const [trails, setTrails] = useState([]);
  const [isLoading, setIsLoading ] = useState(false)

  const navigate = useNavigate();

  const [myTrails, setMyTrails] = useState([]);
  

  const [selectedTrail, setSelectedTrail] = useState(false);
  
  function saveTrails(trail) {
    setMyTrails((myTrails) => {
      return [...myTrails, trail ];
    });
  }

   function deleteTrail(newTrail) {
     const updatedTrails = myTrails.filter((item) => item.id !== newTrail.id);
     setMyTrails(updatedTrails)
     setSelectedTrail(false);
     console.log('updated trail', updatedTrails);
   }

 

  return (
    <div className="trail">
      <Header />
      <Sidebar myTrails={myTrails} />
      {isLoading && <p>Loading...</p>}
      <GolbalContextProvider value={trails}>
        {!isLoading && (
          <div className="container">
            <Routes navigate={navigate}>
              <Route path="/" element={<Home />} />
              <Route path="/region" element={<Region />} />
              <Route path="/region/:region" element={<RegionArea />} />
              <Route
                path="/region/:region/:name"
                element={
                  <TrailDetail
                    addMyTrail={saveTrails}
                    myTrails={myTrails}
                    deleteTrail={deleteTrail}
                    selectedTrail={selectedTrail}
                    setSelectedTrail={setSelectedTrail}
                  />
                }
              />
              <Route path="/title" element={<TrailTitleList />} />
              <Route
                path="/title/:name"
                element={
                  <TrailDetail
                    trails={trails}
                    addMyTrail={saveTrails}
                    myTrails={myTrails}
                    deleteTrail={deleteTrail}
                    selectedTrail={selectedTrail}
                    setSelectedTrail={setSelectedTrail}
                  />
                }
              />
              <Route
                path="/difficulty"
                element={<Difficulty trails={trails} />}
              />
              <Route
                path="/difficulty/:name"
                element={
                  <TrailDetail
                    trails={trails}
                    addMyTrail={saveTrails}
                    myTrails={myTrails}
                    deleteTrail={deleteTrail}
                    selectedTrail={selectedTrail}
                    setSelectedTrail={setSelectedTrail}
                  />
                }
              />
              <Route path="/park" element={<Park trails={trails} />} />
              <Route
                path="/park/:park"
                element={<ParkArea trails={trails} />}
              />
              <Route
                path="/park/:park/:name"
                element={
                  <TrailDetail
                    trails={trails}
                    addMyTrail={saveTrails}
                    myTrails={myTrails}
                    deleteTrail={deleteTrail}
                    selectedTrail={selectedTrail}
                    setSelectedTrail={setSelectedTrail}
                  />
                }
              />
              {/* <Route path="/nynjtc" element={<NYNJTC />} /> */}
              <Route path="/donate" element={<Donate />} />
              <Route
                path="/mytrails"
                element={<MyTrails myTrails={myTrails} />}
              />
              <Route
                path="/mytrails/:name"
                element={
                  <TrailDetail
                    addMyTrail={saveTrails}
                    myTrails={myTrails}
                    deleteTrail={deleteTrail}
                    selectedTrail={selectedTrail}
                    setSelectedTrail={setSelectedTrail}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </GolbalContextProvider>
    </div>
  );
}

export default App;
