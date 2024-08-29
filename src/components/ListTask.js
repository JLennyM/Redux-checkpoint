// src/components/ListTask.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
  );

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
