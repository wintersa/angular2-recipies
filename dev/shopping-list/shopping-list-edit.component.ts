import {Component} from 'angular2/core';
import {Ingredient} from "../shared/ingredient";

@Component({
    selector: 'my-shopping-list-edit',
    template: `
        <h1>{{ingredient === null ? 'Add' : 'Edit'}} Item</h1>
        <form id="shopping-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" required value="{{ingredient?.name}}" ngControl="name">

            <label for="item-amount">Amount</label>
            <input type="text" id="item-amount" required value="{{ingredient?.amount}}" ngControl="amount">

            <button class="btn" type="submit">{{ingredient === null ? 'Add' : 'Edit'}} Item</button>
            <button class="btn danger" *ngIf="ingredient !== null" (click)="onDelete()">Delete Item</button>
        </form>

    `,
    inputs: ['ingredient'],
    styleUrls: ['src/css/shopping-list.css']
})

export class ShoppingListEditComponent {
    ingredient: Ingredient;
}
