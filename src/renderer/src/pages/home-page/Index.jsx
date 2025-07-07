import React, { useState } from 'react';
import commingsoon from '../../assets/img/coming-soon.png';
function HomePage() {
  return (
    <div className="w-[90%] mx-auto my-5 h-[200px] bg-white rounded-md flex flex-col items-center justify-center">
      <img src={commingsoon} alt="" className="w-[100px] h-[100px]" />
      <p className="text-center">Comming Soon Feature</p>
    </div>
  );
}

export default HomePage;
