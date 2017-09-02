import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegistroService } from '../servicios/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registro: any;

  constructor(private _formBuilder: FormBuilder,
  	          private _registroService: RegistroService,
  	          private _router: Router,
  	          private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.loginForm = this._formBuilder.group({
  		email: ['', [ Validators.required, Validators.email ]],
  		password: ['', [ Validators.required ]]
  	})
  }

  agregar(){
	this.registro = this.agregarRegistro();
	this._registroService.inicioSesion(this.registro);
	//this._router.navigate(['/inicio']);
	}
	agregarRegistro(){
	const agregarRegistro = {
		email: this.loginForm.get('email').value,
		password: this.loginForm.get('password').value
	}
	return agregarRegistro;

	}

}
