import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}        from '@angular/forms';

import { AppComponent } from './app.component';


import { SerMes4Service } from './services/ser-mes4.service';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';


const routes: Routes = [
   
    { path: 'todos', component: AllTodosComponent },
    { path: 'members', component: AllMembersComponent },
    { path: 'todos/add', component: AddTodoComponent },
    { path: '**', redirectTo: 'todos', pathMatch: 'full' },



    
];


@NgModule({
    declarations: [
        AppComponent,
               AllMembersComponent,
        AllTodosComponent,
        AddTodoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule
    ],
    providers: [SerMes4Service],
    bootstrap: [AppComponent]
})
export class AppModule { }
