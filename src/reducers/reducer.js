import camelCase from "lodash/camelCase";

export default function reducer(ent) {
  return (entity = ent, action = {}) => reducerFunction(entity, action);
}

export function reducerFunction(entity, action) {
  if (action.type && action.type.indexOf("@@") !== 0) {
    const fn = entity[camelCase(action.type)];
    if (fn) {
      return fn.call(entity, action.payload);
    }
  }
  return entity;
}
