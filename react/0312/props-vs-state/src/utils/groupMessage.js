export const groupCollapsed = (id, message) => {
  console.groupCollapsed(id);
  console.log(message);
  console.groupEnd(id);
};

export const group = (id, message) => {
  console.groupStart(id)
  console.log(message);
  console.groupEnd(id)
};