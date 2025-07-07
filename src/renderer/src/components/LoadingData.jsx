import React from 'react';
import { FadeLoader } from 'react-spinners';

function LoadingData() {
  return (
    <div className="w-full mt-5">
      <FadeLoader className="mx-auto block" color="green" />
      <p className="text-center">Loading data </p>
    </div>
  );
}

export default LoadingData;
