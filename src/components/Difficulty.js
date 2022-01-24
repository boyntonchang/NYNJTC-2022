import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Difficulty = ({ trails}) => {

  const initialState = 'Easy'
  const [difficulty, setDifficulty] = useState(initialState);

  const newDifficulty = trails.map((trail) => trail.Difficulty);
  const sortedDifficulty = newDifficulty.filter(
    (item, index) => newDifficulty.indexOf(item) === index
  )
  
//console.log(sortedDifficulty);
 
  return (
    <>
      <h2 className="main-title">Search by Difficulty</h2>
      <article className="button-area">
        {sortedDifficulty.map((diffLabel, index) => {
          return (
            <button
              key={index}
              className={
                diffLabel === difficulty
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => setDifficulty(diffLabel)}
            >
              {diffLabel}
            </button>
          );
        })}
      </article>

      {trails.map((trail) => {
        return difficulty === trail.Difficulty ? (
          <Link to={`/difficulty/${trail.Title}`} key={trail.id}>
            <h4 className="trail--data-label">{trail.Title}</h4>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default Difficulty;
