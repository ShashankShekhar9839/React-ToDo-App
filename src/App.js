
import { useState } from 'react';
import './App.css';
import ToDoComponent from './ToDoComponent';

function App() {

const [input,setInput]=useState('');
const [items,setItems]=useState([]);

const inputChange =(event)=>{
         setInput(event.target.value);
}

const add =()=>{
 
  setItems((olditems)=>{
    return [...olditems,input];
  });
  setInput('');
}

const Delete = (id)=>{
  alert('item deleted');
  setItems((olditems)=>{
    return olditems.filter((arrElement,index)=>{
          return id!==index;
    })
  })
   
}

  return (
    <div className="container">
        <div className='todo-container'>
          <h2>Create Your ToDo List</h2>
          <div className='input-container'>
          <input type='text' placeholder="Enter habit" value={input} onChange={inputChange}/>
          <button className='add' onClick={add}>Add</button>


        </div>
         {
          items.map((item,index)=>{
            return(
              <ToDoComponent text = {item} id={index} key={index}
              delete={Delete}/>
            )
          })
         }
       
        </div>
      
    
    </div>
  );
}

export default App;
