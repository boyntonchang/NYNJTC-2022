import React from "react";
import { Link } from "react-router-dom";

const Park = ({ trails }) => {
  const newPark = trails.map((trail) => trail.Park);
  const sortedPark = newPark.filter(
    (item, index) => newPark.indexOf(item) === index
  );

  return (
    <>
      <h2 className="main-title">Search by Park</h2>
      {sortedPark.map((park) => {
        return (
          <Link to={`/park/${park}`} key={park}>
            <h4 className="trail--data-label">{park}</h4>
          </Link>
        );
      })}
    </>
  );
  

};

export default Park;
