import React from 'react'

const ToDoComponent = (props) => {
  return (
    <div className='todo-component'>
      
        <h4>{props.text}</h4>
        <button className='delete' onClick={()=>props.delete(props.id)}>Delete</button>
    </div>
  )
}

export default ToDoComponent;