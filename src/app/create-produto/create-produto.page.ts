import { Produto } from './../models/Produto.Model';
import { ProdutosService } from './../services/produtos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateProdutoPage implements OnInit {
  titulo = '';
  descricao = '';
  preco = 0;
  nome_imagen = '';

  constructor(
    private route: Router,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {}

  salvar() {
    if (this.titulo != '') {
      const produto : Produto = {
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_imagem: this.nome_imagen
      };
      this.produtosService.create(produto).subscribe((dados) => {
        alert('Produto inserido com sucesso: ' + dados.titulo);
        // Navegação vem aqui!
        this.route.navigateByUrl('/home');
      });

      //Nunca colocar a navegação fora... vai voltar sem saber a resposta
    } else {
      alert('Insira um produto');
    }
  }
}
