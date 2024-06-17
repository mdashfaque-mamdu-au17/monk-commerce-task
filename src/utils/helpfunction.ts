export const getFirstProperty = (obj: any) => {
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    return obj[keys[0]];
  }
  return null;
};
