import { Component, OnInit } from '@angular/core';
import { ObjetoService } from '../../../services/objeto.service';
import { Objeto } from '../../../models/objeto';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listad-de-objetos',
  templateUrl: './listad-de-objetos.component.html',
  styleUrls: ['./listad-de-objetos.component.scss']
})
export class ListadDeObjetosComponent implements OnInit {

  objetoList = Objeto[''];

  constructor(
    private objetoService: ObjetoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.objetoService.getObjetos()
      .snapshotChanges()
      .subscribe(item => {
        this.objetoList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.objetoList.push(x as Objeto);
        });
    });
  }

  onEdit(objeto: Objeto) {
    this.objetoService.objetoData = Object.assign({}, objeto );
  }

  onDelete($key: string) {
    if (confirm('Are you sure?')) {
      this.objetoService.deleteObjeto($key);
      this.toastr.success('Confirmation', 'Deleted');
    }
  }

  clearForm(objetoData?: NgForm) {
    if (objetoData != null) {
      objetoData.reset();
    }
      this.objetoService.objetoData = new Objeto();
  }
}
