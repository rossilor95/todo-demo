import TodoTable from './TodoTable';
import { Box, Button, Stack } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import NewTodoForm from './NewTodoForm';

const TodoDemoApp = () => {

  const [todos, setTodos] = useState([
    { id: 1, description: 'Feed puppy', assigned: 'User One' },
    { id: 2, description: 'Water plants', assigned: 'User Two' },
    { id: 3, description: 'Make dinner', assigned: 'User One' },
    { id: 4, description: 'Charge phone battery', assigned: 'User One' },
  ]);

  const addTodo = (assigned: string, description: string) => {
    const newTodo = {
      id: todos.length + 1,
      description: description,
      assigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      <Header/>
      <Box mx={40} my={8}>
        <Stack spacing={4}>
          <TodoTable todos={todos}/>
          <Stack flexDirection="row">
            <Button variant="contained">
              Add new todo
            </Button>
          </Stack>
        </Stack>
        <NewTodoForm addTodo={addTodo}/>
      </Box>
    </>
  );
};

export default TodoDemoApp;