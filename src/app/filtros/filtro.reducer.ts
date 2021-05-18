import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtros.action';
 
export const estadoInicial  = "all";
 
const _filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, { filtro }) => filtro ),
);
 
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
} 