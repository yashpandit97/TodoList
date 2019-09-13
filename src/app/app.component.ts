import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  inputtask = null;
  list = [];
  task = null;
  i: number = 0;
  done = [];

  add()
  {
    this.list.push(this.inputtask)
    this.inputtask=null
    this.i =+ 1;
  }
 
  accomplished(task)
  {
    this.list.splice(this.list.indexOf(task),1);
    this.done.push(task)
  }

  remove(task)
  {
    this.done.splice(this.done.indexOf(task),1);
  }
  readd(task)
  {
    this.list.push(this.task)
    this.done.splice(this.list.indexOf(task),1);
  }
}
