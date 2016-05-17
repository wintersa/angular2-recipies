import {Component} from 'angular2/core';
import {ShoppingListEditComponent} from "./shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient";

@Component({
    template: `
        <h1>Shopping List</h1>
        <my-shopping-list-edit></my-shopping-list-edit>
        <div class="list">
              <button class="btn">Add new Item</button>
              <ul>
                  <li *ngFor="#item of shoppingList">{{item.name}} ({{item.amount}})</li>
              </ul>
        </div>
    `,
    directives: [ShoppingListEditComponent]
})

export class ShoppingListComponent {
    shoppingList:  Ingredient[];
}
