import React from 'react';

function Task({ task }) {
  function handleDeleteClick() {
    
    
  }

  return (
    <div>
      <span>{task.text}</span> | <span>{task.category}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Task;
