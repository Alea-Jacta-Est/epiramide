import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Passo } from './passos/passo';

@Injectable({
  providedIn: 'root'
})
export class PassoService {

  private passosUrl = 'api/passos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  getPassos(): Observable<Passo[]> {
    return this.http.get<Passo[]>(this.passosUrl).pipe(catchError(this.tratarErro<Passo[]>('getPassos', [])))
  };

  private tratarErro<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} falha: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    console.log(`PassoService: ${message}`);
  }
}
