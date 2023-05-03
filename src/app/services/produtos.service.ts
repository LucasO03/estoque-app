import { catchError, map, Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto.Model';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  url = 'http://localhost:3000/produtos';

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  create(produto: Produto) :Observable<Produto>{
    return this.http.post<Produto>(this.url, produto).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getOne(id: number) {
    // return this.http.get(this.url + '/' + id);
    return this.http.get(`${this.url}/${id}`);
  }

  update(produto: Produto) {
    return this.http.put(`${this.url}/${produto.id}`, produto);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    const titulo = `Erro na conexão!`;
    const msg = `verifique sua conexão \n ou \n Informe esse erro ao suporte ${erro.status}`;
    this.presentAlert(titulo, msg);
    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
