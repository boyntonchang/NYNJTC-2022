import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TrailDataContext } from "../context/GlobalContext";

const Region = () => {
  const {trails} = useContext(TrailDataContext);

  const newRegion = trails.map((trail) => trail.Region);
  const sortedRegion = newRegion.filter(
    (item, index) => newRegion.indexOf(item) === index
  );

  let { regionName } = useParams();
  return (
    <>
      <h2 className="main-title">Search by Region</h2>
      {sortedRegion.map((region, index) => {
        return (
          <Link to={`/region/${region}`} key={index}>
            <h4 className="trail--data-label">{region}</h4>
          </Link>
        );
      })}
    </>
  );
};

export default Region;
