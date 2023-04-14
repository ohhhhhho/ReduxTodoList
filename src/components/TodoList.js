import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delTodo } from "../redux/modules/todos";
import styled from "styled-components";

/**
 * map 등등 사용할때 중괄호{} 쓰면 return 적어야하고 소괄호쓰면() return 생략가능
 */
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const onClickHandlerDelete = (id) => {
    dispatch(delTodo(id));
  };
  //   console.log(todos);
  return (
    <>
      <ListWrap>
        {todos.map((ele) => (
          <li key={ele.id}>
            <span>{ele.title}</span>
            <button onClick={() => onClickHandlerDelete(ele.id)}>
              삭제하기
            </button>
          </li>
        ))}
      </ListWrap>
    </>
  );
};

const ListWrap = styled.ul`
  margin: 0;
  padding: 0;
`;

export default TodoList;
