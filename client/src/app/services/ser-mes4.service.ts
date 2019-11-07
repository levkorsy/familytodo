import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SerMes4Service {

    constructor(private _httpClient: HttpClient) { }

    
    public getAllTodos() {
        return this._httpClient.get(`http://localhost:3000/api/todo/all`);
    }

    
    public getAllMembers() {
        return this._httpClient.get(`http://localhost:3000/api/member/all`);
    }
    
    public postNewTodo(data) {
        return this._httpClient.post(`http://localhost:3000/api/todo/add`, {description: data.description, member: data.member});
    }
}
