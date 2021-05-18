import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions  from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  constructor(private store:Store<AppState>) {
    this.completado = false;
   }

  completado:boolean;

  ngOnInit(): void {
  }

  toogleAll(){
    this.completado = !this.completado;
    this.store.dispatch(actions.toogleALl({completed: this.completado}))
  }
}
