import React from "react";
import { TbNotesOff } from  'react-icons/tb'

const EmptyData = () => {
  return (
    <div className="flex flex-col items-center mt-16 space-y-5">
      <TbNotesOff className="text-8xl text-gray-600" />
      <h1 className="text-xl font-semibold text-gray-600">
        Data masih kosong, silahkan tambah data
      </h1>
    </div>
  );
};

export default EmptyData;
