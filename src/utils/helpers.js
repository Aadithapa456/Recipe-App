export const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
export const formatMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours > 0 && remainingMinutes > 0) {
    return hours, remainingMinutes;
  } else if (hours > 0) {
    return `${hours}`;
  } else {
    return `${remainingMinutes}`;
  }
};
