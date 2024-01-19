export const getCurrentOld = (birthyear: number): number => {
  const date = new Date();
  const res = date.getFullYear() - birthyear;

  return res;
};
