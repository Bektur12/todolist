"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "../store/actions";
import TaskItem from "./TaskItem";
import styled from "styled-components";

export default function TaskList() {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.completed;
    if (filter === "INCOMPLETE") return !task.completed;
    return true;
  });

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <TaskListContainer>
      <FilterContainer>
        <FilterLabel>Filter:</FilterLabel>
        <FilterSelect id="filter" value={filter} onChange={handleFilterChange}>
          <option value="ALL">All</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </FilterSelect>
      </FilterContainer>
      {filteredTasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  );
}

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  font-size: 16px;
`;
