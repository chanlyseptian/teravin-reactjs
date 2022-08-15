import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ListData = () => {
  const navigate = useNavigate();

  return (
    <div>
      <table className="w-full text-sm lg:text-base shadow-sm" cellSpacing="0">
        <thead>
          <tr className="h-12 border bg-gray-50 ">
            <th className="text-center text-gray-600 border-r">ID No.</th>

            <th className="text-center text-gray-600 border-r">Nama</th>
            <th className="text-center text-gray-600 border-r">Alamat</th>

            <th className="text-center text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border relative hover:bg-gray-100">
            <td className="p-3 text-center border-r md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium text-gray-600 ">
                123
              </span>
            </td>
            <td className="p-3 text-center border-r md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium text-gray-600 ">
                123
              </span>
            </td>
            <td className="p-3 text-center border-r md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium text-gray-600 ">
                123
              </span>
            </td>
            <td className="p-3 text-center border-r md:table-cell pb-3 ">
              <span className="text-base lg:text-xl font-medium  flex justify-center">
                <AiOutlineEye
                  className="cursor-pointer text-gray-400 hover:text-gray-900"
                  onClick={() => {
                    navigate(`/details/1`);
                  }}
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListData;
