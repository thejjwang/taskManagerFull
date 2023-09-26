import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div>
        {tasks.map((task, index) => {
        <li key={index}>
            <h2>{task.title}</h2>
            <h3>{task.description}</h3>
            <p>{task.status}</p>
        </li>})
    }
    </div>
  )
}

export default TaskList