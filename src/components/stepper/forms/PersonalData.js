import React, { useState } from "react";
import { addPersonalDataAsync } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function PersonalData() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    namaLengkap: "",
    email: "",
    telepon: "",
    alamat: "",
    github: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPersonalDataAsync(values));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-4">
          <div className="grid grid-cols-2  ">
            <div className="mt-3 h-6 text-sm md:text-base font-bold capitalize leading-8 text-gray-500">
              nama lengkap
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                value={values.namaLengkap}
                name="namaLengkap"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2  ">
            <div className="mt-3 h-6 text-sm md:text-base font-bold capitalize leading-8 text-gray-500">
              email
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2  ">
            <div className="mt-3 h-6 text-sm md:text-base font-bold capitalize leading-8 text-gray-500">
              telepon
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                value={values.telepon}
                name="telepon"
                type="number"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2  ">
            <div className="mt-3 h-6 text-sm md:text-base font-bold capitalize leading-8 text-gray-500">
              alamat
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                value={values.alamat}
                name="alamat"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2  ">
            <div className="mt-3 h-6 text-sm md:text-base font-bold capitalize leading-8 text-gray-500">
              github
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                value={values.github}
                name="github"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="text-right w-full mt-2">
          <button onClick={() => alert('Data berhasil disimpan')} className="bg-green-500 hover:bg-green-800 p-3 rounded text-white w-full md:w-1/2">
            Save Data
          </button>
        </div>
      </form>
    </>
  );
}
