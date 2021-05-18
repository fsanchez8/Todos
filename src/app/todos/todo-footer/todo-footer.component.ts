import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  filtroActual:string

  constructor(private store : Store<AppState>) { 
    this.filtroActual = "";
  }

  ngOnInit(): void {
    this.store.select('filtros').subscribe(filtro =>{
      this.filtroActual = filtro
    })
  }

}
