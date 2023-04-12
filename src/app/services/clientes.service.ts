import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cliente } from '../models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  create (cliente: Cliente){
    return this.http.post(this.url, cliente);
  }

  getAll (){
    return this.http.get(this.url);
  }

  getOne (id:number){
    // return this.http.get(this.url + '/' + id);
    return this.http.get(`${this.url}/${id}`);
  }

  update (cliente: Cliente){
    return this.http.put(`${this.url}/${cliente.id}`, cliente);
  }

  delete (id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  login (){}

  logout (){}
}
