import { createAction, props } from '@ngrx/store';

export type filtrosValidos = "all"| "completed"| "pendding";

export const setFiltro = createAction(
    '[filtro] Set filtro',
    props<{filtro: string }>()
    
);