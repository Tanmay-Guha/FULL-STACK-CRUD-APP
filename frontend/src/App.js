import { useEffect, useState } from 'react';
import './App.css';

const API = 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const loadTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    setTitle('');
    loadTasks();
  };

  const toggleComplete = async (task) => {
    await fetch(`${API}/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: task.title, completed: !task.completed }),
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">🌈 Animated Task Manager</h1>
      <div className="input-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="✨ Add a new task"
        />
        <button onClick={addTask}>➕ Add</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'done' : ''}`}>
            <span
              onClick={() => toggleComplete(task)}
              className="task-text"
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
