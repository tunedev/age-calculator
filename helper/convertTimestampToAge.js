const convertTimeStampToAge = (timestamp) => {
  try {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (Number.isNaN(age)) throw new Error("Invalid timestamp");
    return age;
  } catch (err) {
    return null;
  }
};
module.exports = { convertTimeStampToAge };
