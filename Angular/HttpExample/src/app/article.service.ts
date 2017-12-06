import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

import {Article} from './article';

@Injectable()
export class ArticleService{
    articleUrl= "https://employees-c11.firebaseio.com/";
    constructor(private http:Http){ }
    getAllArticles():Observable<Article[]>{
return this.http.get(this.articleUrl).map(this.extractData).catch(this.handleError);
}

    }

