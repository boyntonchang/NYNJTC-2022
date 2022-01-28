import { createContext, useState, useEffect } from "react";

import axios from "axios";

const TrailDataContext = createContext();

const GolbalContextProvider = ({ children }) => {

      const [trails, setTrails] = useState([]);
      const [myTrails, setMyTrails] = useState([]);

      const [selectedTrail, setSelectedTrail] = useState(false);

      useEffect(() => {
        axios
          .get("../../trailData.json")
          .then((res) => setTrails(res.data))
          
      }, []);

        function saveTrails(trail) {
          setMyTrails((myTrails) => {
            return [...myTrails, trail];
          });
        }
        console.log(myTrails);

        function deleteTrail(newTrail) {
          const updatedTrails = myTrails.filter(
            (item) => item.id !== newTrail.id
          );
           
          setMyTrails(updatedTrails)
          setSelectedTrail(false);
          console.log("updated trail", updatedTrails);

        }

        
  return (
    <TrailDataContext.Provider
      value={{
        trails,
        saveTrails,
        selectedTrail, 
        deleteTrail,
        setSelectedTrail,
        myTrails,
        setMyTrails,
      }}
    >
      {children}
    </TrailDataContext.Provider>
  );
};


export { TrailDataContext, GolbalContextProvider}
