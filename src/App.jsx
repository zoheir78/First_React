
import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Site from "./components/Site/Site";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {

  const [val, setVal] = useState(3);  
const navelems = ["Home", "Product", "About", "Contact us"];


const [todo, setTodo] = useState([])
console.log(todo);

const getInp = () => {
const val = document.getElementById("input").value;
const tmp = [...todo, val];
setTodo (tmp);
document.getElementById("input").value = "";
};

const deleteItem = (idx) => {
  const tmp = [...todo];
  tmp.splice(idx, 1)
  setTodo(tmp);
}

const editItem =(idx) => {
  let tmp = todo[idx]
  
}


  
  return (
    <>
      <NavBar elems = {navelems}/>
      
      <Site/>

      <button
        onClick={()=> { 
          setVal(val + 1);
        }}>
          click
        </button>
        <div>val is {val}</div>

        ////////////////////////////////

        <div >
          <input id="input" type='text'/>
          <button className='add'
          onClick={() => {
            getInp(); }}>
            add to list
          </button>
          
        </div>

        <div className='container2'>
          {todo.map((e, idxe) => 
          {
            return < TodoItem todo = {e} idx = {idxe} func= {deleteItem}/>
          })}
        </div>

      
    </>
  )
}

export default App
