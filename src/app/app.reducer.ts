import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtros/filtro.reducer';

export interface AppState {
    todos: Todo[],
    filtros: string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtros : filtroReducer
}