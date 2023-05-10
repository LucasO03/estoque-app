import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/Produto.Model';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutoPage implements OnInit {

  id = 0;
  titulo = '';
  descricao = '';
  preco = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private produtoService: ProdutosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.produtoService.getOne(this.id).subscribe(dados => {
      this.titulo = dados.titulo!;
      this.descricao = dados.descricao!;
      this.preco = dados.preco!;
    })
  }

  salvar() {
    const produto: Produto = {
      id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco
    }

    this.produtoService.update(produto).subscribe(dados => {
      alert("Produto atualizado com sucesso, id: " + dados.id)
      this.router.navigateByUrl('/lista-produtos');
    })
  }


}
