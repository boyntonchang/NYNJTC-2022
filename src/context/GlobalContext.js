import { createContext } from "react";

//const [trails, setTrails] = useState([]);

const TrailDataContext = createContext();

const GolbalContextProvider = ({ children }) => {
  return (
    <TrailDataContext.Provider>
      {children}
    </TrailDataContext.Provider>
  );
};


export { TrailDataContext, GolbalContextProvider}
