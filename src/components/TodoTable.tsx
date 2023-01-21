import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { FC } from 'react';
import { Delete } from '@mui/icons-material';
import { Todo } from '../types/Todo';



interface TodoTableProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  // editTodo: (id: string) => void;
}

const TodoTable: FC<TodoTableProps> = ({ todos, deleteTodo }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Todo table">

        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assigned</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            todos.map((todo, index) =>
              <TableRow hover key={todo.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell>{todo.assigned}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteTodo(todo.id)}>
                    <Delete fontSize="small"/>
                  </IconButton>
                </TableCell>
              </TableRow>,
            )
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
