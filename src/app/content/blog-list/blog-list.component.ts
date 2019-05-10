import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared_service/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private data: DataService) { }

  blogs:any;
  

  ngOnInit() {
   this.blogData()
  }

  blogData(){
   return this.data.getData().subscribe(data => {

     this.blogs = data,
     error => console.log("Error: ", error)
    });
  }


}
