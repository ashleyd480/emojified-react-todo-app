import Button from "./Button/Button";
import List from "./List/List";
import "./ToDo.css";
import happyGif from "../../assets/happy.gif";
import sighGif from "../../assets/sigh.gif"
import sadGif from "../../assets/sad.gif"
import angryGif from "../../assets/angry.gif"
import { useState } from "react";
import { useEffect } from "react";


// To Do uses the button and list component
// note: use onChange to manage state of the todoText variable 
// and we need that hook for state of that text input b/c in React, when you're dealing with form elements like text inputs, React doesn't automatically keep track of the state of the input fields (unlike vanilla JavaScript)


const ToDo = () => {
  // --- HOOKS ---
  //place hook here and initially we start with an empty todo array
  const [stuffToDo, setStuffToDo] = useState([]);

  // we have todoText as a state variable so we can set its state
  const [newTodoTextInput, setNewToDoTextInput] = useState("");

  // to set error message
  const [errorMessage, setErrorMessage] = useState("");

  // to set react emoji

  const [reactEmotion, setReactEmotion] = useState(happyGif)
  console.log(reactEmotion)


  // --- FUNCTIONS ---


  const handleInput = (event) => {
    setNewToDoTextInput(event.target.value)
  }

  const handleAddTask = () => {
    if (newTodoTextInput != "") {
      console.log("New Task:", newTodoTextInput);
      const updatedToDoListArray = [...stuffToDo, newTodoTextInput];
      setStuffToDo(updatedToDoListArray);
      setNewToDoTextInput("");
      setErrorMessage(""); // Reset error message
    }
    else {
      setErrorMessage("Thou shalt not pass with a blank to-do ")
    
    }

  };

// We always want to make a copy of array b/c principle of immutability and so that React can detect when there are changes.
  const handleDeleteAllTasks = () => {
    if (stuffToDo.length > 0) {
      setStuffToDo([])
      setErrorMessage(""); // Reset error message 
    }
    else {
      setErrorMessage("You have no tasks to delete. Silly human!")
    }
  };

  const handleDeleteOneTask = (index) => {
    const currentTaskList = [...stuffToDo]
    // we want to remove that one element at the index parameter
    currentTaskList.splice(index, 1)
    console.log("deleted");
    setStuffToDo(currentTaskList);
  };


  // little bonus thing I added:
  // see how React's emotion changes based on how many tasks you have! 
  const showReactEmotion = () => {
    if (stuffToDo.length === 0) {
      setReactEmotion(happyGif);
    } else if (stuffToDo.length === 1) {
      setReactEmotion(sighGif);
    } else if (stuffToDo.length > 1 && stuffToDo.length <= 4) {
      setReactEmotion(sadGif);
    } else if (stuffToDo.length > 4) {
      setReactEmotion(angryGif);
    }
  }

  useEffect(() => {
    showReactEmotion();
  }, [stuffToDo]); // Trigger showReactEmotion when stuffToDo changes

  return (
    <div className="to-do-list">
      <h1> My To Do List </h1>
      <p> If you don't get stuff done, React gets unhappy.</p>
      <p> See how React's emotions change based on tasks you have</p>
      <img src={reactEmotion} alt="React Emotion" style={{ width: 50, height: 50 }} />

      <div>
        <input
          id="todo-input"
          name="todo"
          placeholder = "Enter to do here..."
          value={newTodoTextInput}
          type="text"
          onChange={handleInput} //callback to handleInputChange when user enters task
        />
       
        <section className = "main-button-container">
        <Button color={"green"} onClickFunction={handleAddTask}>
        Add Task
        </Button>
        <Button color={"red"} onClickFunction={handleDeleteAllTasks}>
          Delete All
        </Button>
        </section>
        <p id="error-message"> {errorMessage} </p>
        </div>

      <ul id="task-list">
        {stuffToDo.map((toDoItem, index) => (
          <div key={index} className = "to-do-row">
          <List> {toDoItem} </List> 
          <Button color={"red"} onClickFunction={() => handleDeleteOneTask(index)}> Delete </Button>
          </div>
        ))}
      </ul>

    
    </div>
  );
};

export default ToDo;

// handleDeleteOneTask is passed the index of the element as an argument when the corresponding delete button is clicked, allowing you to identify and handle the specific element accordingly.