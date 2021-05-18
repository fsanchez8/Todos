import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.action';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Aprender Ngrx'),
  new Todo('Aprender Rxjs'),
  new Todo('Aprender Todo lo referente a Onnovación'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toogle, (state, { id }) => {
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }else{
        return todo;
      }
    })
  }),
  on(actions.editTodo, (state, { text, id}) => {
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      }else{
        return todo;
      }
    })
  }),

  on(actions.deleteTodo, (state, { id }) => {
    return state.filter(todo => {
      return todo.id !== id
    })
  }),

  on(actions.toogleALl, (state, { completed }) => {
    return state.map(todo =>{
        return {
          ...todo,
          completed: completed
        }

    })
  }),


);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
