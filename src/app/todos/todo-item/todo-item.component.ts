import { AppState } from './../../app.reducer';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from './../models/todo.model';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: Boolean;
  constructor(private store:Store<AppState>) {
    this.editando = false;
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.chkCompletado.valueChanges.subscribe(check =>{
      console.log(check);
      this.store.dispatch(actions.toogle({id: this.todo.id}))
    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion(){
    this.editando= false;
    this.store.dispatch(actions.editTodo({text: this.txtInput.value, id: this.todo.id}))
  }

  eliminar(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}))
  }
}
