import React,  { useState, useContext } from 'react'
import Title from './Title'
import { TrailDataContext } from "../context/GlobalContext";

const TrailTitleList = () => {

    const [ search, setSearch] = useState('')
    
    const {trails} = useContext(TrailDataContext);
    
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
 
    const filteredTrails = trails.filter((trail) =>
      trail.Title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <h2 className="main-title">Search By Trail Name</h2>
      <form>
          <input 
          className='input-field'
          type="text"
          placeholder='Search...'
          onChange={handleChange} />
      </form>
      {
          filteredTrails.map(trail=>{
              
              return (
                  <Title 
                  trail={trail}
                  key={trail.id} />
              )

          })
      }
   
    </>
  );
};

export default TrailTitleList;
