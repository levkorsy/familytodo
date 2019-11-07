import { Component, OnInit } from '@angular/core';
import { SerMes4Service } from '../../services/ser-mes4.service'

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

    allTodos: any = [];
    constructor(private _apiService: SerMes4Service) { }

    ngOnInit() {
        this._apiService.getAllTodos().subscribe((data) => {
            console.log(data);
            this.allTodos = data;
        });

    }
}
