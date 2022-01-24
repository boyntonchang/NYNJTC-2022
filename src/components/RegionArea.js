import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RegionArea = ({ trails}) => {

    //let { name } = useParams();
    let { region } = useParams();



    const newTrail = trails.filter((trail) => trail.Region === region);

    // console.log(newTrail);
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
