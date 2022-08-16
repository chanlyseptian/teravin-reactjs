import React, { useState } from "react";
import { addSkillsAsync } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function Skills() {
  const dispatch = useDispatch();
  let [skills, setSkills] = useState([
    {
      id: 1,
      skillName: "",
    },
  ]);

  const handleChange = (i) => (e) => {
    const { name, value } = e.target;
    let items = [...skills];
    items[i] = { ...items[i], [name]: value };
    setSkills(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkillsAsync(skills));
  };

  const tambahSkills = () => {
    let idCount = skills[skills.length - 1].id + 1;
    setSkills((skills) => [
      ...skills,
      {
        id: idCount,
        skillName: "",
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {skills.map((input, i) => (
          <div key={i} className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-base leading-8 capitalize">
                Skills
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange(i)}
                  value={input.skillName}
                  name="skillName"
                  id="skillName"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
        ))}
        <div className=" mt-3">
          <button
            onClick={tambahSkills}
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
