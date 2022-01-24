import React from "react";
import { Link } from "react-router-dom";

const Title = ({ trail  }) => {
  return (
    <Link to={`/title/${trail.Title}`}>
      <h4 key={trail.id} className="trail--data-label">
        {trail.Title}
      </h4>
    </Link>
  );
};

export default Title;
