import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is syply a test', 'https://www.foodiesfeed.com/wp-content/uploads/2016/01/cheers-with-cocktails.jpg'),
  new Recipe('A test Recipe', 'This is syply a test', 'https://www.foodiesfeed.com/wp-content/uploads/2016/01/cheers-with-cocktails.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
