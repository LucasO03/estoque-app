import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto.Model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  create (produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.url, produto);
  }

  getAll (): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  getOne (id: number){
   // return this.http.get(this.url + '/' + id);
    return this.http.get(`${this.url}/${id}`);
  }

  update (produto: Produto){
    return this.http.put(`${this.url}/${produto.id}`, produto);
  }

  delete (id: number){
    return this.http.delete(`${this.url}/${id}`);
  }



}
