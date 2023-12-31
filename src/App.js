import "./App.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import List from "./Components/Lists/Lists";
import ParticlesBg from "./Components/Particles/ParticlesBg";
function App() {
  const [text, setText] = useState("");
  const [todolist, setTodolist] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodolist((storedTodoList));
    }
  }, []);

  // useEffect(() => {
  //   console.log("Saved to localStorage:", todolist);
  //   localStorage.setItem("todoList", JSON.stringify(todolist));
  //   console.log("Saved to localStorage:", todolist);
  // }, [todolist]);

  const addItem = () => {
    const newTodoItem = {
      id: uuidv4(),
      item: text,
      done: false,
    };
    setTodolist([...todolist, newTodoItem]);
    // localStorage.setItem("todoList", JSON.stringify(todolist))
    setText("");
  }
  useEffect(() => {
    if(initialRender.current){
      initialRender.current = false;
      return;
    }
    console.log("Saved to localStorage:", todolist);
    localStorage.setItem("todoList", JSON.stringify(todolist));
    console.log("Saved to localStorage:", todolist);
  }, [todolist]);
  const handleToggle = (itemId) => {
    const newTodoList = todolist.map((listitem) => {
      if (listitem.id === itemId) {
        return { ...listitem, done: !listitem.done };
      }
      return listitem;
    })
    setTodolist(newTodoList);
  }

  const handleDelete = (itemId) => {
    const newTodoList = todolist.filter((listItem) => listItem.id !== itemId);
    setTodolist(newTodoList);
  }

  // console.log("todolist:",todolist );
  return (
    <div className="App">

      <h1>Todo List</h1>
      <div className="adder">
        <textarea
          type="text"
          placeholder="Add items to your List"
          value={text}
          onChange={(e) => setText(e.target.value)}

        />
        <span onClick={addItem}>+</span>
      </div>
      <List todolist={todolist} handleToggle={handleToggle} handleDelete={handleDelete} />
      <ParticlesBg></ParticlesBg>
    </div>
  );
}

export default App;
