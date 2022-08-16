import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Final() {
  const {
    namaLengkap,
    email,
    telepon,
    alamat,
    github,
    riwayatPendidikan,
    pengalamanKerja,
    skills,
  } = useSelector((state) => state.getPersonalDataReducer);

  const itemList = JSON.parse(localStorage.getItem("teravin"));
  let [arrLocal, setArrLocal] = useState(itemList);

  const [newArr, setNewArr] = useState({
    namaLengkap: namaLengkap,
    email: email,
    telepon: telepon,
    alamat: alamat,
    github: github,
    riwayatPendidikan: riwayatPendidikan,
    pengalamanKerja: pengalamanKerja,
    skills: skills,
  });

  useEffect(() => {
    if (itemList === null) {
      return;
    } else {
      setArrLocal([...arrLocal, newArr]);
    }
  }, [newArr]);

  const saveLocal = () => {
    if (itemList === null) {
      let newArr2 = [newArr];
      localStorage.setItem("teravin", JSON.stringify(newArr2));
    } else {
      localStorage.setItem("teravin", JSON.stringify(arrLocal));
    }
    window.location = "/";
  };

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <a className="mt-10" href="/">
          <button
            onClick={saveLocal}
            className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          >
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
