export const SET_USER = "SET_USER";
export const SET_TO_DOS = "SET_TO_DOS";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setTodos(todos) {
  return {
    type: SET_TO_DOS,
    payload: todos
  };
}