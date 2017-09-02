import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegistroService } from '../servicios/registro.service'; //Importamos el servicio del formulario


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  registro: any;
  


  /*erroresForm = {
  	'email': '',
  	'password': ''
  }
  mensajeValidacion = {
  	'email': {
  		'required': 'Email obligatorio',
  		'email': 'Introduzca un email correcto'
  	},
  	'password': {
  		'required': 'Contraseña obligatoria'
  	}
  }*/




  constructor(private _formBuilder: FormBuilder,
  	          private _registroService: RegistroService,
  	          private _router: Router,
  	          private _activatedRoute: ActivatedRoute) { }



  ngOnInit() {
  	this.registroForm = this._formBuilder.group({
  		/*nombre: ['', Validators.required],
  		seleccion: ['', Validators.required],*/
  		email: ['', [ Validators.required, Validators.email ]],
      rol: ['', [Validators.required]],
  		password: ['', [ Validators.required ]]
  	})
  }



agregar(){
	this.registro = this.agregarRegistro();
	this._registroService.registroUsuario(this.registro); // !!!
	this._router.navigate(['/bienvenido']);
}
agregarRegistro(){
const agregarRegistro = {
	/*nombre: this.registroForm.get('nombre').value,
	seleccion: this.registroForm.get('seleccion').value,*/
	email: this.registroForm.get('email').value,
  rol: this.registroForm.get('rol').value,
	password: this.registroForm.get('password').value
}
return agregarRegistro;

}




}
