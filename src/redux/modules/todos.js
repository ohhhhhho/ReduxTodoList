/**
 * modules에는 액션타입, 액션 생성 함수, 리듀서를 한파일에 관리하는 Ducks패턴을 모아놓는 디렉터리이다.
 */

//Action Value
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

//Action Creator
export const addTodo = (payload) => {
  //   console.log("payload", payload);
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};

//Initial State
const initialState = {
  todos: [],
};

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DEL_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    default:
      return state;
  }
};

export default todos;
