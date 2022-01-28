import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TrailDataContext } from "../context/GlobalContext";

const ParkArea = () => {
  let { park } = useParams();
  const { trails } = useContext(TrailDataContext);
  const newTrail = trails.filter((trail) => trail.Park === park);

  return (
    <>
      <h4 className="med-title">{park}</h4>
      {newTrail.length > 0 &&
        newTrail.map((trail, id) => {
          return (
            <Link to={`/park/${park}/${trail.Title}`} key={trail.id}>
              <h4 className="trail--data-label">{trail.Title}</h4>
            </Link>
          );
        })}
    </>
  );
};

export default ParkArea;
