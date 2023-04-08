import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizPhpService {
  private _quizPhpJson = 'assets/db/Quizs/PHPP.json';

  constructor(private httpClient: HttpClient) {}

 

  getAllQuizsByidSubject(id: string): any {
    let list! :string  ;
    let flag:boolean=false;
  let a=  this.httpClient.get<any>(this._quizPhpJson).subscribe((data) => {
      // console.log(typeof data);
    return "hihi";
    });  
  }
}
