import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from'@angular/router';
import {  Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Options } from 'selenium-webdriver/edge';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private activeRoute : ActivatedRoute,
    private router: Router
  ) { }
  
  public cName: string ='Name';
  public cComment:string = 'Add comment';
  public typeID : any;
  public id : any;

  comments:any;

  match:boolean = false;

  message: string;


  pageType:any;
  pageId:any;

// headers for http requests
  public httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Response-Type' : 'text',
    'Cache-Control': 'no-cache'
  });

  public options = { headers: this.httpHeaders };


  

  ngOnInit() {

    this.getComments()

    // this.pageType = this.activeRoute.snapshot.data['type']
    // this.activeRoute.params.subscribe(params => { 
    //   this.pageId = params['id']; 
    // })


    // for (let comment of this.comments){

    //   console.log(comment.type+ "and " + comment.typeID)
    //   if (this.pageType == comment.type && this.pageId == comment.typeID){
    //     this.match = true;
    //   }
    // }
    
    

    //reset values in inputs 
    this.cName ='';
    this.cComment= '';

    // console.log("page Id "+this.pageId + ", and page type is "+ this.pageType)
    // console.log(this.match);

    this.dateFormat();
     
  }


 


  //get comments data from server
  getComments = function(){
    this.pageType = this.activeRoute.snapshot.data['type']
    this.activeRoute.params.subscribe(params => { 
      this.pageId = params['id']; 
    })
  
    console.log('getcomments runned')
    this.httpClient.post('/post/Comments',{pageType:this.pageType , pageId : this.pageId}, this.options).subscribe( 
      data => { this.comments = data, console.log(this.comments)},
      (err) => console.error(err))
      
  }

  dateFormat(){
    console.log("runned")
    
  }


  showAlert(msg){
    alert(msg);
  }

  



// get input value from front end and send it to server 
  addComment(event){
    console.log(this.cName+", "+ this.cComment);

    if( this.cName == ""){
      this.message = 'Please enter name';
      this.showAlert(this.message)
    }
    else if(this.cComment == ""){
      this.message = 'Please enter comment';
      this.showAlert(this.message)
    }
    else {
      // getting active page type and id
    this.id = this.activeRoute.params.subscribe(params => { 
      this.typeID = params['id']; 
      console.log(this.typeID + ", " + this.activeRoute.snapshot.data['type']);
    })

 
    let commentData =  {
      name: this.cName,
      content: this.cComment,
      type: this.activeRoute.snapshot.data['type'],
      typeID: this.typeID
      
    }

    console.log(commentData)

    let body = JSON.stringify(commentData)
    
    //sending post request to server to post comments data 
    this.httpClient.post('/post/comment',  body, this.options)
    .subscribe(
      (res : Response) =>{
        console.log(res)
        this.ngOnInit();
      
      } 
    )

    
    // reseting input value after post request 
    this.cName ='';
    this.cComment = '';
    }
    
  }


  deleteOne(){
    console.log("clicked")
    let body = { name: "Parasvohra"} 
    this.httpClient.post('/post/deleteOne',  body, this.options)
    .subscribe(
      (res : Response) =>{
        console.log(res)
        this.ngOnInit();
      
      } 
    )
  }

}
