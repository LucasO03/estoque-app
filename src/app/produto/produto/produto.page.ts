import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoPage {

  listaProdutos: Produto[] = []

  constructor(private produtosService: ProdutosService) {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe((dados) => {
      this.listaProdutos = dados as Produto[];
    })
  }

}
