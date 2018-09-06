import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared_service/data.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {

  constructor(private data: DataService) { }

  blogs:any;
  recipe: any
  ngOnInit() {
   console.log("edited in mac");
   this.blogData();
   this.recipeData();
  }


  blogData(){
    return this.data.getData().subscribe(data => {
       console.log(data.blogs[(data.blogs.length)-1]);
 
      this.blogs = data.blogs[(data.blogs.length)-1],
      error => console.log("Error: ", error)
     });
   }

   recipeData(){
    return this.data.getRecipes().subscribe(data => {
       console.log(data.recipes[(data.recipes.length)-1]);
 
      this.recipe = data.recipes[(data.recipes.length)-1],
      error => console.log("Error: ", error)
     });
   }


 





}
