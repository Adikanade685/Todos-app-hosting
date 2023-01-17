import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
title!:string ;
desc!:string;
@Output() todoadd:EventEmitter<Todo> = new EventEmitter();


onSubmit(){
  const todo = {
    srno:0,
    titles:this.title,
    desc :this.desc,
    active:true,
  }
  this.todoadd.emit(todo);
}

}
