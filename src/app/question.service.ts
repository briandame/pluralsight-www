import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from './question';
import { Page } from './page'
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'https://dame-pluralsight.herokuapp.com/questions';

  getQuestionsPage(page: number, size: number): Observable<Page> {
  	return this.http.get<Page>(this.questionsUrl + '?page=' + page + "&size=" + size)
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

  /** PUT: update the question on the server */
  updateQuestion (question: Question): Observable<any> {
    const url = `${this.questionsUrl}/${question.id}`;
    return this.http.put(url, question, httpOptions).pipe(
      tap(_ => this.log(`updated question id=${question.id}`)),
      catchError(this.handleError<any>('updateQuestion'))
    );
  }

  /** POST: add a new question to the server */
  addQuestion (question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, httpOptions).pipe(
      tap((question: Question) => this.log(`added Question w/ id=${question.id}`)),
      catchError(this.handleError<Question>('addQuestion'))
    );
  }

  /** DELETE: delete the question from the server */
  deleteQuestion (question: Question | number): Observable<Question> {
    
    const id = typeof question === 'number' ? question : question.id;
    const url = `${this.questionsUrl}/${id}`;

    return this.http.delete<Question>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted question id=${id}`)),
      catchError(this.handleError<Question>('deleteQuestion'))
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
