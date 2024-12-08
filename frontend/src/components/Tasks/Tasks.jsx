import React from 'react'
import './Tasks.css'
import {useState } from 'react'

const Tasks = () => {


  const [task, setTask] = useState([]);

  const handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const addTask = async () => {
    const response =  await fetch(`https://localhost:8080/api/tasks/newTask/${task._id}`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Nueva tarea creada: ', data);
      setTask({
        title: '',
        description: '',
        status: '',
        dueDate: '',
        priority: ''
      });
    } else{
      console.log("Error creando tarea en front");
    }
  }
  return (
    <div>
      <form className="task-form" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input
          type="title"
          name="title"
          placeholder="Tarea"
          value={task.title}
          onChange={handleInputChange}
        />
        <input
          type="description"
          name="description"
          placeholder="description"
          value={task.description}
          onChange={handleInputChange}
        />
        <input
          type="status"
          name="status"
          placeholder="Estado"
          value={task.status}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          placeholder="Fecha de cumplimiento"
          value={task.dueDate}
          onChange={handleInputChange}
        />
        <input
          type="priority"
          name="priority"
          placeholder="Prioridad"
          value={task.priority}
          onChange={handleInputChange}
        />
        <button type="submit">Añadir tarea</button>
      </form>
    </div>
  )
}

export default Tasks