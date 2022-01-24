import React from 'react';


const MyTrailsList = ({ myTrails }) => {
  console.log("MyTrailsList", myTrails);

  //   const trailElements = myTrails.map((myTrail)=>{

  //       return <div key={myTrail.id}>{myTrail.Title}</div>;
  //   })

  return (
    <>
      <div>{myTrails}</div>
    </>
  );
};

export default MyTrailsList;
