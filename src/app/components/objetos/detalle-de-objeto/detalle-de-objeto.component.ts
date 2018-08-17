import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// objeto service
import { ObjetoService } from '../../../services/objeto.service';

// objeto class
import { Objeto } from '../../../models/objeto';

@Component({
  selector: 'app-detalle-de-objeto',
  templateUrl: './detalle-de-objeto.component.html',
  styleUrls: ['./detalle-de-objeto.component.scss']
})
export class DetalleDeObjetoComponent implements OnInit {

  constructor(private objetoService: ObjetoService) { }

  ngOnInit() {
    this.objetoService.getObjetos();
  }

  onSubmit(objetoData: NgForm) {
    if (objetoData.value.$key == null) {
      this.objetoService.insertObjeto(objetoData.value);
    } else {
      this.objetoService.updateObjeto(objetoData.value);
    }
    this.clearForm(objetoData);

  }
  clearForm(objetoData?: NgForm) {
    if (objetoData != null) {
      objetoData.reset();
    }
      this.objetoService.objetoData = new Objeto();
  }

}
