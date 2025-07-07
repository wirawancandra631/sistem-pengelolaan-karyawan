import React from 'react';
import emptyIcon from '../assets/img/empty-icon.png';
function EmptyData() {
  return (
    <div className="w-full mt-5">
      <img src={emptyIcon} className="w-[100px] h-[100px] block mx-auto" />
      <p className="text-center">Tidak ada data untuk ditampilkan</p>
    </div>
  );
}

export default EmptyData;
