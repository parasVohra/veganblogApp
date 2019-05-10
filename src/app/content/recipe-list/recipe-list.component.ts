import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared_service/data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    this.recipeData()
   }

   recipe: any
 
   recipeData(){
    return this.data.getRecipes().subscribe(data => {

      this.recipe = data,
      error => console.log("Error: ", error)
     });
   }

}
