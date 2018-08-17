import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


console.log('Qué buena webApp, merece un 10!');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Prueba Isaac Sauri';
  description = 'CRUD simple, escalable.';

 // Este es el sistema de creacion de objetos




  // itemValue = '';
  // itemValue2 = '';
  // items: Observable<any[]>;

  // constructor(public db: AngularFireDatabase) {
  //   this.items = db.list('cars').valueChanges();
  // }

  // onSubmit() {
  //   this.db.list('/cars').push({ content: this.itemValue, content2: this.itemValue2 });
  //   this.itemValue = '';
  // }
}
