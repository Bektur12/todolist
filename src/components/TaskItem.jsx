"use client";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/actions";
import { styled } from "styled-components";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <TaskContainer>
      <CompletedText completed={task.completed} onClick={handleToggle}>
        {task.text}
      </CompletedText>
      <ButtonDelete onClick={handleDelete}>delete</ButtonDelete>
    </TaskContainer>
  );
}

const CompletedText = styled("span")`
  text-decoration: ${(p) => (p.completed ? "line-through" : "")};
  margin-top: 20px;
`;
const ButtonDelete = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: center;
`;
