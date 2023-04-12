export const formatTime = (inputDateString) => {
  const time = new Date(inputDateString);
  const yyyy = time.getFullYear();
  let mm = time.getMonth() + 1; // Months start at 0!
  let dd = time.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};
