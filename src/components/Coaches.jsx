import React, { useState, useEffect } from 'react';
import Render from './Render'; 
import coachData from '../assets/info.json'; 

function Coaches() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    setCoaches(coachData);
  }, []);

  return (
    <div>
      <Render list={coaches} /> 
    </div>
  );
}

export default Coaches;
