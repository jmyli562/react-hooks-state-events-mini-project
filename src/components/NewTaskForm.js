import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [textInput, setText] = useState("");
  const [slctedCategory, setCategory] = useState("Code");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function createNewTask(e) {
    e.preventDefault();
    const newTask = {
      text: textInput,
      category: slctedCategory,
    };

    setText("");
    setCategory("Code");
    onTaskFormSubmit(newTask);
  }

  const categoryElements = categories.map((category) => {
    return category === "All" ? null : (
      <option key={category}>{category}</option>
    );
  });
  return (
    <form className="new-task-form" onSubmit={createNewTask}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={textInput}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={slctedCategory}
          onChange={handleCategoryChange}
        >
          {categoryElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
