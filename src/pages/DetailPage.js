import React from "react";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

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
        <div className="grid grid-cols-2 ">
          <div>Name : </div>
          <div>Chanly</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Jenis Kelamin : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Nomor Hp : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Email : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Alamat : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Domisili : </div>
          <div>Pria</div>
        </div>
        <hr />

        
      </div>

      <div className="mt-6 space-y-2">
        <h4 className="text-xl text-gray-500 font-semibold mb-3">
          Riwayat Pendidikan
        </h4>
        <h5 className="text-lg text-gray-900 mb-3">1.</h5>
        <div className="grid grid-cols-2 ">
          <div>Jenjang : </div>
          <div>Chanly</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Satuan Pendidikan : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Masa Pendidikan : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Tahun Masuk : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Tahun Keluar : </div>
          <div>Pria</div>
        </div>
        <hr />
              
      </div>

      <div className="mt-6 space-y-2">
        <h4 className="text-xl text-gray-500 font-semibold mb-3">
          Pengalaman Kerja
        </h4>
        <h5 className="text-lg text-gray-900 mb-3">1.</h5>
        <div className="grid grid-cols-2 ">
          <div>Nama Perusahaan : </div>
          <div>Chanly</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Posisi : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Tahun Masuk : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Sampai Sekarang : </div>
          <div>Pria</div>
        </div>
        <hr />
         <div className="grid grid-cols-2">
          <div>Tahun Keluar : </div>
          <div>Pria</div>
        </div>
        <hr />
              
      </div>

      <div className="mt-6 space-y-2">
        <h4 className="text-xl text-gray-500 font-semibold mb-3">
          Keahlian
        </h4>
        <h5 className="text-lg text-gray-900 mb-3">1.</h5>
        <div className="grid grid-cols-2 ">
          <div>Soft Skill : </div>
          <div>Chanly</div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div>Hard Skill : </div>
          <div>Pria</div>
        </div>
        <hr />
       
              
      </div>
    </div>
  );
};

export default DetailPage;
