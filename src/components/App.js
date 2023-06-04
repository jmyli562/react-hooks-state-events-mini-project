import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  function handleButtonClick(e) {
    e.target.className = "selected";
    const filter = e.target.textContent;

    if (filter === "All") {
      setTaskList(
        taskList.filter((task) => {
          return true;
        })
      );
    } else {
      setTaskList(
        taskList.filter((task) => {
          return task.category === filter;
        })
      );
    }
  }

  function onTaskFormSubmit(task) {
    setTaskList([...taskList, task]);
  }

  const [taskList, setTaskList] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleButtonClick={handleButtonClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
