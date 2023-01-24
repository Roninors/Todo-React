import "./App.css";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ListBody } from "./ListBody";

function App() {
  let [listTodo, pushTodo] = useState([]);
  let [todo, setTodo] = useState("");

  let changeHandler = (event) => {
    setTodo(event.target.value);
  };

  let addToList = () => {
    let objectholder = {
      id: listTodo.length === 0 ? 1 : listTodo[listTodo.length - 1].id + 1,
      todoName: todo,
    };
    pushTodo([...listTodo, objectholder]);
  };

  let deleteTodo = (id) => {
    const todoIdentifier = listTodo.filter((todoName) => {
      if (todoName.id === id) {
        return "";
      } else {
        return todoName;
      }
    });
    pushTodo(todoIdentifier);
  };

  let editTodo = (id) => {
    const editFinder = listTodo.filter((todoName)=>{
      if (todoName.id === id) {
        let ValReplace = prompt()
        if(ValReplace === null) {
          return
         }
         
        let newVal = todoName.todoName = ValReplace;
        
      setTodo(newVal)
      } 
    })
  }

  return (
    <div className="App">
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "25ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Todo"
            variant="outlined"
            onChange={changeHandler}
            className="upperComponent"
          />
        </Box>

        <Stack
          spacing={2}
          direction="row"
          display="flex"
          position="relative"
          left="230px"
          top="-50px"
        >
          <Button
            className="upperComponent"
            variant="contained"
            onClick={addToList}
          >
            Add
          </Button>
        </Stack>
      </div>
      
      <div className="list-body">
        {listTodo.map((todos, key) => {
          return <ListBody todoName = {todos.todoName} id = {todos.id}  deleteTodo = {deleteTodo} 
          editTodo = {editTodo}/>
        })}
      </div>
    </div>
  );
}
export default App;
