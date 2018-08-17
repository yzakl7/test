import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Objeto } from '../models/objeto';

@Injectable()
export class ObjetoService {

  objetoList: AngularFireList<any>;
  objetoData: Objeto = new Objeto ();

  constructor(private firebase: AngularFireDatabase) { }

  getObjetos() {
    return this.objetoList = this.firebase.list('objetos');
  }

  insertObjeto(objeto: Objeto) {
    this.objetoList.push({
      name: objeto.name,
      role: objeto.role,
      address: objeto.address ?  objeto.address : 'unfilled.',
      phone: objeto.phone ?  objeto.phone : 'unfilled.',
      email: objeto.email ?  objeto.email : 'unfilled.',
      origyn: objeto.origyn ?  objeto.origyn : 'unfilled.',
      plates: objeto.plates ?  objeto.plates : 'unfilled.',
      color: objeto.color ?  objeto.color : 'unfilled.',
      qty: objeto.qty ?  objeto.qty : 1,
      price: objeto.price ?  objeto.price : 0,
      position: objeto.position ?  objeto.position : 'unfilled.',
      companyName: objeto.companyName ?  objeto.companyName : 'unfilled.',


    });
  }
  updateObjeto(objeto: Objeto) {
    this.objetoList.update(objeto.$key, {
      name: objeto.name,
      role: objeto.role,
      address: objeto.address ?  objeto.address : '',
      phone: objeto.phone ?  objeto.phone : '',
      email: objeto.email ?  objeto.email : '',
      origyn: objeto.origyn ?  objeto.origyn : '',
      plates: objeto.plates ?  objeto.plates : '',
      color: objeto.color ?  objeto.color : '',
      qty: objeto.qty ?  objeto.qty : 1,
      price: objeto.price ?  objeto.price : 0,
      position: objeto.position ?  objeto.position : '',
      companyName: objeto.companyName ?  objeto.companyName : '',
    });
  }
  deleteObjeto($key: string) {
    this.objetoList.remove($key);
  }

}
