import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTaskList }) {
  function removeTask(e) {
    setTaskList(
      tasks.filter((task) => {
        return task.text !== e.target.parentElement.children[1].textContent;
      })
    );
  }
  const taskElement = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        removeTask={removeTask}
      ></Task>
    );
  });
  return <div className="tasks">{taskElement}</div>;
}

export default TaskList;
