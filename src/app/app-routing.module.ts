import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from "./content/home-content/home-content.component";
import { BlogListComponent } from "./content/blog-list/blog-list.component";
import { BlogComponent } from "./content/blog/blog.component";
import { RecipeListComponent } from "./content/recipe-list/recipe-list.component";
import { RecipeComponent } from "./content/recipe/recipe.component";
import { ReferenceComponent } from "./content/reference/reference.component";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./content/content.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  //  { path:'', redirectTo:'posts', pathMatch:'full'},
    { path:'', component:ContentComponent},
    { path:'blogs', component:BlogListComponent},
    { path:'blog/:id', component:BlogComponent, data: { type: 'blog'} },
    { path:'recipes', component:RecipeListComponent},
    { path:'recipe/:id', component:RecipeComponent , data: { type: 'recipe'} },
    { path:'reference', component:ReferenceComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}