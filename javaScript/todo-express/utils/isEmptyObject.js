const isPlainObject = o => typeof o === 'object' && o.constructor === Object;
const isEmpty = o => !Object.keys(o).length;

const isEmptyObject = o => isPlainObject(o) && isEmpty(o);

export default isEmptyObject;