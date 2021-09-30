export const toCamelCase = (text) => {
  return text
    .split(' ')
    .map((elem, index) => {
      if (index === 0) return elem.toLowerCase();
      return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
    })
    .join('');
};
