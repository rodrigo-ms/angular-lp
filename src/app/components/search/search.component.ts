import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { Article} from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ArticleService]
})
export class SearchComponent implements OnInit {

  public articles!: Article[];
  public search!:String;

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ){

  }
  ngOnInit(){
    this._route.params.subscribe(params =>{
      var search = params['search'];
      this.search=search; 
      
      
      this._articleService.search(search).subscribe(
        Response=>{
          if(Response.articles){
            this.articles=Response.articles;
            console.log(this.articles);
          }
        },
        error =>{
          console.log(error);
          this.articles=[];
          
        }
      )


    })

  }

}
