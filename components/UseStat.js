import React, { useState } from 'react';

export default function UseStat() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [count,setCount]=useState(1);
  // Add new task
  const addTask = () => {
    if (text.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    const newTask = {
      id: count,
      text: text.trim(),
      done: false,
    };
    setTasks([...tasks, newTask]);
    setCount(count+1);
    setText('');
  };

  // Toggle done
  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };
console.log(tasks);
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
      <h2>Todo List</h2>
      
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{width:'30%',margin:'1rem'}}
      />
      <button onClick={addTask}>Add</button>

      {tasks.map((task) => (
        <p
          key={task.id}
          onClick={() => toggleDone(task.id)}
          style={{
            textDecorationLine: task.done ? 'line-through' : 'none',
          }}
        >
          {task.text}
        </p>
      ))}
    </div>
  );
}
