const initialState = {
  namaLengkap: "",
  email: "",
  telepon: "",
  alamat: "",
  github: "",
  riwayatPendidikan: [],
  pengalamanKerja: [],
  skills: [],
};

function getPersonalDataReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "add-personal-data":
      console.log(payload.obj1, "obj1");
      return {
        ...state,
        namaLengkap: payload.obj1.namaLengkap,
        email: payload.obj1.email,
        telepon: payload.obj1.telepon,
        alamat: payload.obj1.alamat,
        github: payload.obj1.github,
      };
    case "add-riwayat-pendidikan":
      console.log(payload.obj2, "obj2");

      return {
        ...state,
        riwayatPendidikan: payload.obj2,
      };
    case "add-pengalaman-kerja":
      console.log(payload.obj3, "obj3");

      return {
        ...state,
        pengalamanKerja: payload.obj3,
      };
    case "add-skills":
      console.log(payload.obj4, "obj4");

      return {
        ...state,
        skills: payload.obj4,
      };
    default:
      return state;
  }
}

export default getPersonalDataReducer;
