import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeContentComponent } from './content/home-content/home-content.component';
import { BlogListComponent } from './content/blog-list/blog-list.component';
import { RecipeListComponent } from './content/recipe-list/recipe-list.component';
import { BlogComponent } from './content/blog/blog.component';
import { RecipeComponent } from './content/recipe/recipe.component';
import { ReferenceComponent } from './content/reference/reference.component';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './shared_service/data.service';
import { CommentComponent } from './content/comment/comment.component';
import { SliderComponent } from './content/slider/slider.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeContentComponent,
    BlogListComponent,
    RecipeListComponent,
    BlogComponent,
    RecipeComponent,
    ReferenceComponent,
    CommentComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
