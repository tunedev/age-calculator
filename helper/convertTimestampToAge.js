const convertTimeStampToAge = (timestamp) => {
  const today = new Date();
  const birthDate = new Date(timestamp);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
module.exports = { convertTimeStampToAge };
