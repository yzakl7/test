import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// componentes
import { ObjetosComponent } from './components/objetos/objetos.component';
import { ListadDeObjetosComponent } from './components/objetos/listad-de-objetos/listad-de-objetos.component';
import { DetalleDeObjetoComponent } from './components/objetos/detalle-de-objeto/detalle-de-objeto.component';

// servocios
import { ObjetoService } from './services/objeto.service';

// pipes



@NgModule({
  declarations: [
    AppComponent,
    ObjetosComponent,
    ListadDeObjetosComponent,
    DetalleDeObjetoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ObjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
