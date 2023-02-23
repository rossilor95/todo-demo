import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import TodoTable from './TodoTable';
import { Todo } from '../interfaces/Todo';

const mockTodos: Todo[] = [
  { id: '0001A', description: 'todo 1', assigned: 'test user' },
  { id: '0002B', description: 'todo 2', assigned: 'test user' },
  { id: '0003C', description: 'todo 3', assigned: 'test user' },
];

const mockDeleteTodo = vi.fn();

describe('Todo Table', () => {
  it('should render the table', async () => {
    render(<TodoTable todos={mockTodos} deleteTodo={mockDeleteTodo} />);
    expect(screen.getAllByRole('row')).toHaveLength(4);
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
    expect(screen.getAllByRole('cell')).toHaveLength(12);
  });
  it('should call the delete todo function when a delete row button is clicked', async () => {
    render(<TodoTable todos={mockTodos} deleteTodo={mockDeleteTodo} />);
    const user = userEvent.setup();
    await user.click(screen.getAllByRole('button')[0]);
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
  });
});