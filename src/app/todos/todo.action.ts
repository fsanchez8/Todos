import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Create todo',
    props<{text:string}>()
);
export const toogle = createAction(
    '[TODO] Toogle todo',
    props<{id:number}>()
);
export const editTodo = createAction(
    '[TODO] Edit todo',
    props<{text:string, id: number}>()
);

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{id:number}>()
);

export const toogleALl = createAction(
    '[TODO] Marcar todo',
    props<{completed:boolean}>()
);