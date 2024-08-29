// src/App.js
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'; // Importing the CSS module

function App() {
  return (
    <div className="app-container"> {/* Optional: Apply a CSS class to the container */}
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
