import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit{
  public article!: Article;
  public status!: string;
  public is_edit!: boolean;
  public page_title: string;
  public url: string; 


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url+'upload-image'
    },


    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen del articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', null, '', '', '');
    this.is_edit = true; 
    this.page_title="Editar articulo";
    this.url=Global.url;
  }

ngOnInit() {

  this.getArticle();

}
onSubmit() {
  this._articleService.update(this.article._id, this.article).subscribe(
    Response => {
      if (Response.status == 'success') {
        this.status = 'success';
        this.article = Response.article;
          //alerta
          Swal.fire(
            'Articulo editado!',
            'El articulo se a editado correctamente',
            'success'
          );
        this._router.navigate(['/blog/articulo',this.article._id]);
      } else {
        this.status == 'error;'
      }
    },
    error => {
      console.log(error);
      this.status = 'error'
    }
    
  )
  
}
imageUpload(data: { body: { image: string; }; }){
  this.article.image = data.body.image
  
}

getArticle(){
  this._route.params.subscribe(params =>{
    let id = params['id'];
    this._articleService.getArticle(id).subscribe(
      Response=>{
        if(Response.article){
          this.article=Response.article;
        }else{
          this._router.navigate(['/home'])
        }
      },
      error =>{
        console.log(error);
        this._router.navigate(['/home'])
      }
    )

  })
}

}
