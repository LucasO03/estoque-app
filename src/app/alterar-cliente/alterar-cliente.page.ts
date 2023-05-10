import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/Cliente.model';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AlterarClientePage implements OnInit {

  id = 0;
  nome = '';
  email = '';
  senha = '';
  confirmeSenha = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private clienteService: ClientesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.clienteService.getOne(this.id).subscribe(retorno => {
      this.nome = retorno.nome!;
      // se o email for valido será retornado se não retorna um campo vazio
      this.email = retorno.email ? retorno.email : '';
    })
  }

  salvar() {
    if (this.senha === this.confirmeSenha) {
      const cliente: Cliente = {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }
      this.clienteService.update(cliente).subscribe(dados => {
        alert("Cliente atualizado com sucesso " + dados.id)
        this.router.navigateByUrl('/home');
      })
    } else {
      alert("Senhas nao conferem!")
    }
  }



}
