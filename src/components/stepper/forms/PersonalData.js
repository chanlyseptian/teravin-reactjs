import { useStepperContext } from "../../../contexts/StepperContext";

export default function PersonalData() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form action="">
      <div className="flex flex-col mt-4">
        <div className="grid grid-cols-2  ">
          <div className="mt-3 h-6 text-base font-bold capitalize leading-8 text-gray-500">
            nama lengkap
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["namaLengkap"] || ""}
              name="namaLengkap"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="mt-3 h-6 text-base font-bold capitalize leading-8 text-gray-500">
            email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["email"] || ""}
              name="email"
              type="email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="mt-3 h-6 text-base font-bold capitalize leading-8 text-gray-500">
            telepon
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["telepon"] || ""}
              name="telepon"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="mt-3 h-6 text-base font-bold capitalize leading-8 text-gray-500">
            alamat
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["alamat"] || ""}
              name="alamat"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="mt-3 h-6 text-base font-bold capitalize leading-8 text-gray-500">
            github
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["github"] || ""}
              name="github"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
