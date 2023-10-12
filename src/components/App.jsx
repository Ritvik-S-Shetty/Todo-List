import React, { useState } from "react";

function App() {

  const [inputText, setInputText]= useState("")
  const [items, setItems]=useState([]);


  function handleChange(event){
    const newValue= event.target.value;
    setInputText(newValue);
  }
  
  function addItem(){
    setItems((prevItems) => {  
      // we use the spread items i.e ... to add the new items to the previous items list 
      return [...prevItems, inputText];
    })
    setInputText("")
  }

  function EmptytheList() {
    window.location.reload(false);
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((todoItem) => {
            return <li>{todoItem}</li>
          } )
          }
        </ul>
      </div>

      <button onClick={EmptytheList}> <span>Empty the list</span></button>

    </div>
  );
}

export default App;
