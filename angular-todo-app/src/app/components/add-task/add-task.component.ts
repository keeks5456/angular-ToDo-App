import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter
// when working with forms we need to add a property for each field
text!: string;
day!: string;
reminder: boolean = false;
showAddTask: boolean = false;
subscription: Subscription;


  constructor(private uiService:UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value))
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("add task please")
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }
    
    this.onAddTask.emit(newTask)
    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
