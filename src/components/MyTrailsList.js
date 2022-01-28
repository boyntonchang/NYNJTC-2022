import React, { useContext } from "react";
import { TrailDataContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const MyTrailsList = () => {
 
const { myTrails } = useContext(TrailDataContext);
  return (
    <>
      <h2 className="main-title">MY trails</h2>

      {myTrails.length > 0 ?
        myTrails.map((trail) => {
          return (
            <>
              <Link to={`/myTrails/${trail.Title}`} key={trail.id}>
                <h4 className="trail--data-label" key={trail.id}>
                  {trail.Title}
                </h4>
              </Link>
            </>
          );
        }) : <h4>No trail is saved.</h4>}
    </>
  );
};

export default MyTrailsList;
