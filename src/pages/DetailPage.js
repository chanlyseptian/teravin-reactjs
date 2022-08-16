import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let local = JSON.parse(localStorage.getItem("teravin"));

  return (
    <div className="container mx-auto p-5 2xl:px-28">
      <button
        className="mb-4 flex items-center font-semibold text-gray-600 hover:text-gray-900 hover:font-bold"
        onClick={() => navigate(-1)}
      >
        {"<"} Back
      </button>
      <h1 className="text-2xl font-semibold text-center text-gray-600 mb-8">
        Applicant Details
      </h1>

      <div className="space-y-2">
        <h4 className="text-xl text-gray-500 font-semibold mb-3">
          Personal Data
        </h4>
        <div className="grid grid-cols-2 capitalize">
          <div>Name : </div>
          <div>{local[id].namaLengkap}</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Email : </div>
          <div>{local[id].email}</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Nomor Hp : </div>
          <div>{local[id].telepon}</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Alamat : </div>
          <div>{local[id].alamat}</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Github Link : </div>
          <div>{local[id].github}</div>
        </div>
        <hr />
      </div>

      <h4 className="text-xl text-gray-500 font-semibold mb-3 mt-6 ">
        Riwayat Pendidikan
      </h4>
      {local[id].riwayatPendidikan.map((pendidikan, i) => (
        <div key={i} className="space-y-2">
          {local[id].riwayatPendidikan.length > 1 ? (
            <h5 className="text-lg text-gray-900 my-4">{i + 1}.</h5>
          ) : (
            <div></div>
          )}

          <div className="grid grid-cols-2 ">
            <div>Nama Institusi : </div>
            <div>{pendidikan.namaSekolah}</div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div>Tahun Masuk : </div>
            <div>{pendidikan.tahunMasuk}</div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div>Tahun Keluar : </div>
            <div>{pendidikan.tahunLulus}</div>
          </div>
        </div>
      ))}
      <hr />

      <h4 className="text-xl text-gray-500 font-semibold mb-3 mt-6 ">
        Pengalaman Kerja
      </h4>
      {local[id].pengalamanKerja.map((kerja, i) => (
        <div key={i} className="space-y-2">
          {local[id].riwayatPendidikan.length > 1 ? (
            <h5 className="text-lg text-gray-900 my-3">{i + 1}.</h5>
          ) : (
            <div></div>
          )}

          <div className="grid grid-cols-2 ">
            <div>Nama Institusi : </div>
            <div>{kerja.namaPerusahaan}</div>
          </div>
          <hr />
          <div className="grid grid-cols-2 ">
            <div>Role Kerja : </div>
            <div>{kerja.roleKerja}</div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div>Tahun Masuk : </div>
            <div>{kerja.tahunMasuk}</div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div>Tahun Keluar : </div>
            <div>{kerja.tahunSelesai}</div>
          </div>
        </div>
      ))}
      <hr />

      <h4 className="text-xl text-gray-500 font-semibold mb-3 mt-6 ">
        Skills
      </h4>
      {local[id].skills.map((skill, i) => (
        <div key={i} className="space-y-2">
          {local[id].skills.length > 1 ? (
            <h5 className="text-lg text-gray-900 my-4">{i + 1}.</h5>
          ) : (
            <div></div>
          )}

          <div className="grid grid-cols-2 ">
            <div>Skill Name : </div>
            <div>{skill.skillName}</div>
          </div>
          <hr />
          
        </div>
      ))}
      <hr />
    </div>
  );
};

export default DetailPage;
