import React, { FC, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

interface NewTodoFormProps {
  addTodo: (assigned: string, description: string) => void;
}

const NewTodoForm: FC<NewTodoFormProps> = ({ addTodo }) => {
  const [assigned, setAssigned] = useState('');
  const [description, setDescription] = useState('');

  const submitTodo = () => {
    if (assigned.trim().length !== 0 && description.trim().length !== 0) {
      addTodo(assigned, description);
      setAssigned('');
      setDescription('');
    }
  };

  return (
    <Stack mt={10} mb={3} spacing={3}>
      <TextField
        id="assigned-text-field"
        label="Assigned"
        variant="outlined"
        onChange={e => setAssigned(e.target.value)}
        value={assigned}
      />
      <TextField
        id="description-text-field"
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <Stack flexDirection="row">
        <Button variant="contained" onClick={submitTodo}>
          Add todo
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewTodoForm;