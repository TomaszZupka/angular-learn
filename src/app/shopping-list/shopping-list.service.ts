import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingedientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanged.emit(this.ingredients.slice());
  }
}
