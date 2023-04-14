import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

/**
 * useSelector - Redux Store로부터 state를 가져올때 사용
 * useDispatch - action을 dispatch할때 사용
 */

const AddForm = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log("todos", todos);

  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (title === "") return;
    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
      })
    );
    setTitle("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandeler}>
        <h1>Todo List</h1>
        <p>오늘의 할일 {todos.length}개</p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <AddBtn>추가하기</AddBtn>
      </form>
    </>
  );
};

const AddBtn = styled.button`
  background-color: #333;
  color: #fff;
  border: solid 1px #333;
  padding: 5px 10px;
  border-radius: 5px;
`;

export default AddForm;
