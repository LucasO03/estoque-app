import { ClientesService } from './../services/clientes.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private clientesService: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes() {
    this.clientesService.getAll().subscribe((dados) => {
      console.log(dados)
    });
  }
}
