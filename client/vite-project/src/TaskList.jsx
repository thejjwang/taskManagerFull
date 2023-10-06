import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className='mx-4 mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {tasks.map((task) => (
        <div key={task.id} className='bg-white p-4 shadow-md rounded-lg'>
          <h2 className='text-xl font-semibold'>{task.title}</h2>
          <h3 className='text-gray-600'>{task.description}</h3>
          <p className='text-blue-500'>{task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
