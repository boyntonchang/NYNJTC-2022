import React, { useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TrailDataContext } from "../context/GlobalContext";

const RegionArea = () => {

    let { region } = useParams();

const {trails} = useContext(TrailDataContext);

    const newTrail = trails.filter((trail) => trail.Region === region);


  return (
    <>
      <h4 className="med-title">{region}</h4>
      {newTrail.map((trail, id) => {
        return (
          <Link to={`/region/${region}/${trail.Title}`} key={trail.id}>
            <h4 className="trail--data-label">{trail.Title}</h4>
          </Link>
        );
      })}
    </>
  );
};

export default RegionArea;
