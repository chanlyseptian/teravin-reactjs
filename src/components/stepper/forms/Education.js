import React, { useState } from "react";
import { addRiwayatAsync } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function Education() {
  const [formValues, setFormValues] = useState([
    { namaSekolah: "", tahunMasuk: "", tahunLulus: "" },
  ]);
  const dispatch = useDispatch();

  const handleChange = (i) => (e) => {
    const { name, value } = e.target;
    let items = [...formValues];
    items[i] = { ...items[i], [name]: value };
    setFormValues(items);
  };

  const tambahRiwayat = () => {
    setFormValues((formValues) => [
      ...formValues,
      { namaSekolah: "", tahunMasuk: "", tahunLulus: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRiwayatAsync(formValues));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formValues.map((item, i) => (
          <div key={i} className="md:grid md:grid-cols-3 md:gap-4">
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 leading-8 capitalize text-base ">
                nama sekolah
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange(i)}
                  type="text"
                  value={item.namaSekolah}
                  name="namaSekolah"
                  id="namaSekolah"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 leading-8 capitalize text-base ">
                tahun Masuk
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange(i)}
                  type="number"
                  value={item.tahunMasuk}
                  name="tahunMasuk"
                  id="tahunMasuk"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 leading-8 capitalize text-base ">
                tahun lulus
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange(i)}
                  type="number"
                  value={item.tahunLulus}
                  name="tahunLulus"
                  id="tahunLulus"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className=" mt-3">
          <button
            onClick={tambahRiwayat}
            className="bg-gray-400 hover:bg-gray-500 py-2.5 px-3 rounded text-white "
          >
            + Add Data
          </button>
          <button
            onClick={() => alert("Data berhasil disimpan")}
            className="bg-green-500 hover:bg-green-700 py-2.5 px-3 ml-2 rounded text-white"
          >
            Save Data
          </button>
        </div>
      </form>
    </>
  );
}
