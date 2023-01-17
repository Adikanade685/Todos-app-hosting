import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[] = [];
  localitem:string | null;

  constructor() {
    this.localitem = localStorage.getItem('todos');

    if(this.localitem == null) {
    this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  deletetodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  ToggleToDo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active; ;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
