import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Crear todo',
    props<{text:string}>()
);