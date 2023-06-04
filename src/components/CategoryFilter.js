import React from "react";

function CategoryFilter({ categories, handleButtonClick }) {
  const categoryElement = categories.map((category) => {
    return (
      <button key={category} onClick={handleButtonClick}>
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryElement}
    </div>
  );
}

export default CategoryFilter;
