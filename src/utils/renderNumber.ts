export const renderNumber = (number: number): string => {
  return number ? number.toLocaleString() : "unreported";
};
