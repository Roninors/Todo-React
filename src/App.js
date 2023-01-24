import "./App.css";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ListBody } from "./ListBody";
import { TodoCounter } from "./TodoCounter";
function App() {
  let [listTodo, pushTodo] = useState([]);
  let counter = listTodo.length;
  let [todo, setTodo] = useState("");

  let changeHandler = (event) => {
    setTodo(event.target.value);
  };

  let addToList = () => {
    console.log(counter);
    let objectholder = {
      id: listTodo.length === 0 ? 1 : listTodo[listTodo.length - 1].id + 1,
      todoName: todo,
    };
    pushTodo([...listTodo, objectholder]);
  };

  let clearTodo = () => {
    pushTodo([]);
  };

  let deleteTodo = (id) => {
    const todoIdentifier = listTodo.filter((todoName) => {
      return todoName.id === id ? "" : todoName;
    });
    pushTodo(todoIdentifier);
  };

  let editTodo = (id) => {
    let ValReplace = prompt();
    const editFinder = listTodo.filter((todoName) => {
      return todoName.id === id ? (todoName.todoName = ValReplace) : todoName;
    });
    setTodo(editFinder);
  };

  return (
    <div className="App">
      <TodoCounter todoCounts={counter} />
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
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          position="relative"
          left="300px"
          top="-85.5px"
        >
          <Button
            className="upperComponent"
            variant="contained"
            onClick={clearTodo}
          >
            Clear
          </Button>
        </Stack>
      </div>

      <div className="list-body">
        {listTodo.map((todos) => {
          return (
            <ListBody
              todoName={todos.todoName}
              id={todos.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
