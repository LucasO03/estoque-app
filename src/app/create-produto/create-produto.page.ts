import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateProdutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
