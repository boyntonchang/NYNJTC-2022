import { createContext, useState, useEffect } from "react";

import axios from "axios";

const TrailDataContext = createContext();

const GolbalContextProvider = ({ children }) => {

    const [trails, setTrails] = useState([]);

      useEffect(() => {
        
        axios
          .get("../../trailData.json")
          .then((res) => setTrails(res.data))
          
      }, []);
  return (
    <TrailDataContext.Provider value={trails}>
      {children}
    </TrailDataContext.Provider>
  );
};


export { TrailDataContext, GolbalContextProvider}
