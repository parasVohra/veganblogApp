import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared_service/data.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private Data: DataService, 
    private activeRoute : ActivatedRoute
   ) { }

  
  blogs:any;
  isLoaded: boolean = false
  public id : any;

  sub : any;

  ngOnInit() {
    this.blogData();

    this.sub= this.activeRoute.params.subscribe(params => { 
      this.id = params['id']; 
      console.log(this.id);
    })
  }

  param: any = 0

  blogData(){
    return this.Data.getData().subscribe(data => {
       console.log(data.blogs[this.id])
      this.blogs = data.blogs[this.id] ,
      error => console.log("Error: ", error)
     });
   }

}
