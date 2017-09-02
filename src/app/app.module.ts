import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /*De esta amnera importamos los modulos para trabajar con rutas*/
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //Los bnecesitamos para que funcione FormBuilder
import { HttpModule } from '@angular/http'; //Para conexión a bases de datos!

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

import { RegistroService } from './servicios/registro.service';
import { NivelInglesService } from './servicios/nivel-ingles.service';
import { GuardService } from './servicios/guard.service';
import { MesesService } from './servicios/meses.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent, canActivate:[GuardService] },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpModule, //Para conexión a bases de datos!
    ChartsModule
  ],
  providers: [
    RegistroService,
    NivelInglesService,
    GuardService,
    MesesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
