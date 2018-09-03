import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared_service/data.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public is1Active = true;
  public is2Active = false;
  public id : any;

  sub : any;

  constructor(
    private data: DataService,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipeData()

    this.sub= this.activeRoute.params.subscribe(params => { 
      this.id = params['id']; 
      console.log(this.id);
    })
  }
  recipe: any
  recipeData(){
    return this.data.getRecipes().subscribe(data => {
       console.log(data);
 
      this.recipe = data.recipes[this.id],
      error => console.log("Error: ", error)
     });
   }

   toggle1(){
     this.is1Active = true;
     this.is2Active = false;
   }

   toggle2(){
    this.is1Active = false;
    this.is2Active = true;
   }

}
