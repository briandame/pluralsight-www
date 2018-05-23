import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from './question';
import { Page } from './page'
import { QUESTIONS } from './mock-questions';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'https://dame-pluralsight.herokuapp.com/questions';

  getQuestions(): Observable<Question[]> {
  	this.messageService.add('QuestionService: fetched questions');
    return of(QUESTIONS);
  }

  getQuestionsPage (): Observable<Page> {
  	return this.http.get<Page>(this.questionsUrl)
  	  .pipe(
  	  	tap(questions => this.log(`fetched questions`)),
        catchError(this.handleError('getQuestionsPage', new Page()))
      );
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add('QuestionService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  };
}

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService
  ) { }
}
