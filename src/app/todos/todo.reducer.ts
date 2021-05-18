import { createReducer, on } from '@ngrx/store';
import { createTodo } from './todo.action';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(
  estadoInicial,
  on(createTodo, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
