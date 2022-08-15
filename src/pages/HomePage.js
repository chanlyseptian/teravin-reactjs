import React from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { EmptyData, ListData } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-5 2xl:px-28">
      <h1 className="text-2xl font-semibold text-center text-gray-600 my-8">
        List of Applicants
      </h1>
      <button
        className="rounded shadow-lg p-2 mb-5 flex items-center font-semibold text-sm outline outline-1 hover:outline-2 outline-gray-400 text-gray-600 hover:text-white hover:bg-gray-400"
        onClick={() => navigate("/submission")}
      >
        <RiAddCircleLine className="mr-1 text-md" /> Add Data
      </button>

      {/* <EmptyData/> */}
      <ListData />
    </div>
  );
};

export default HomePage;
