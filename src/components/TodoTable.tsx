import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FC } from 'react'

interface Todo {
  id: number;
  description: string;
  assigned: string;
}

interface TodoTableProps {
  todos: Todo[];
}

const TodoTable: FC<TodoTableProps> = ({ todos }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Todo table">

        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assigned</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            todos.map(todo =>
              <TableRow hover key={todo.id}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell>{todo.assigned}</TableCell>
              </TableRow>,
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodoTable
