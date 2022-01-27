import React, { useContext, useState } from "react";
//import { TrailDataContext } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

const MyTrailsList = ({ myTrails, selectedTrail }) => {
  //console.log("MyTrailsList", myTrails);

  //const trails = useContext(TrailDataContext);

  //console.log(myTrails);

  return (
    <>
      <h2 className="main-title">MY trails</h2>

      {myTrails.length > 0 &&
        myTrails.map((trail, id) => {
          return (
            <>
              <Link to={`/myTrails/${trail.Title}`} key={trail.id}>
                <h4 className="trail--data-label" selectedTrail={selectedTrail} >
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
