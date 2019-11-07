import { Component, OnInit } from '@angular/core';
import { SerMes4Service } from '../../services/ser-mes4.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    allMembers: any = [];

    constructor(private _apiService: SerMes4Service) { }

    ngOnInit() {
        this._apiService.getAllMembers().subscribe((data) => {
            console.log(data);
            this.allMembers = data;

        });

    }

    addTodo(form) {
        this._apiService.postNewTodo(form.value).subscribe((data) => {
            console.log("data from form", data);
        });

        // console.log(form.value);


    }

}
