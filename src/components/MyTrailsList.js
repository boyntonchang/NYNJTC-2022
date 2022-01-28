import React, { useContext, useState } from "react";
import { TrailDataContext } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

const MyTrailsList = () => {
 
const { myTrails } = useContext(TrailDataContext);
  return (
    <>
      <h2 className="main-title">MY trails</h2>

      {myTrails.length > 0 &&
        myTrails.map((trail, id) => {
          return (
            <>
              <Link to={`/myTrails/${trail.Title}`} key={trail.id}>
                <h4 className="trail--data-label"  >
                  {trail.Title}
                </h4>
              </Link>
            </>
          );
        })}
    </>
  );
};

export default MyTrailsList;
