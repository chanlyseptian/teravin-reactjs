export const addPersonalDataAsync = (obj1) => ({
    type: "add-personal-data",
    payload: { obj1 },
});

export const addRiwayatAsync = (obj2) => ({
    type: "add-riwayat-pendidikan",
    payload: { obj2 },
});

export const addPengalamanAsync = (obj3) => ({
    type: "add-pengalaman-kerja",
    payload: { obj3 },
});

export const addSkillsAsync = (obj4) => ({
    type: "add-skills",
    payload: { obj4 },
});