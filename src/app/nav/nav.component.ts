import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RegistroService } from '../servicios/registro.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _registroService: RegistroService,
  	          private _router: Router,
  	          private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  autenticado(){
  	return this._registroService.siAutenticado();
  }
  cerrarSesion(){
  	this._registroService.noAutenticado();
  	this._router.navigate(['/login']); 
  }

}
