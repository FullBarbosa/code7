import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filmes } from '../interface/filmes';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://latesteapi.herokuapp.com/filmes';

  listar(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl);
  }

  listarId(id: number): Observable<Filmes> {
    return this.http.get<Filmes>(`${this.baseUrl}/${id}`);
  }

  create(filmes: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(this.baseUrl, filmes);
  }
}
