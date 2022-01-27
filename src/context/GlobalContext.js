import { createContext, useState, useEffect } from "react";

import axios from "axios";

const TrailDataContext = createContext();

const GolbalContextProvider = ({ children }) => {

    const [trails, setTrails] = useState([]);

      useEffect(() => {
        //setIsLoading(true);
        axios
          .get("../../trailData.json")
          .then((res) => setTrails(res.data))
          //.finally(() => setIsLoading(false));
      }, [axios, setTrails]);
  return (
    <TrailDataContext.Provider value={trails}>
      {children}
    </TrailDataContext.Provider>
  );
};


export { TrailDataContext, GolbalContextProvider}
