"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import styled from "styled-components";

export default function TaskForm() {
  const [taskText, setTaskText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodoItem = (e) => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Math.random(),
      text: taskText,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskText("");
  };

  return (
    <Container>
      <InputStyled
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task..."
      />
      <Button onClick={handleAddTodoItem}>Add</Button>
    </Container>
  );
}

const InputStyled = styled.input`
  padding: 15px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 14px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
