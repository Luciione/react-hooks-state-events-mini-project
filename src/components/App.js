import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const TASKS = [
  { id: 1, text: 'Buy groceries', category: 'Shopping' },
  { id: 2, text: 'Clean room', category: 'House Chores' },
  { id: 3, text: 'Study React', category: 'Study' },
];

const CATEGORIES = ['All', 'Shopping', 'House Chores', 'Study'];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  }

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} />
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
