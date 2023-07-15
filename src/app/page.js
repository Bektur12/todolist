"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { styled } from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <TaskForm />
      <TaskList />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: greenyellow;
  height: 100vh;
  width: 100%;
  padding: 50px;
`;
