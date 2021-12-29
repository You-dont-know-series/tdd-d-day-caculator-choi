export const calculateDiffDate = (a, b) => {
  return Math.floor((b - a) / (24 * 3600 * 1000));
};
