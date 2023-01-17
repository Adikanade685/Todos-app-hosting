import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
@Input() todo!: Todo;
@Input() i! : number;
@Output() tododelete:EventEmitter<Todo> = new EventEmitter();
@Output() todocheckbox:EventEmitter<Todo> = new EventEmitter();

onClick(todo:Todo){
  this.tododelete.emit(todo);
  console.log('OnClick has been triggered');
}

oncheckboxclick(todo:Todo){
   console.log('OnCheckboxClick has been triggered');
   this.todocheckbox.emit(todo);
}
}
