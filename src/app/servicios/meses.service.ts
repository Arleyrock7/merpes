import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

//Conexion base de datos!
@Injectable()
export class MesesService {

mesUrl = 'https://merpesproject.firebaseio.com/meses.json';


  constructor(private _http: Http) { }

  postMeses(mes: any){ //Ahora necesitamos que postMeses reciba el objeto presupuesto, este servicio lo implementamos en el componente, en este caso, en UsuarioComponent
  	const newMes = JSON.stringify(mes);
  	const headers = new Headers({
  		'ContentType': 'application/json'
  	});
  	return this._http.post( this.mesUrl, newMes, {headers})
  	.map( res => {
  		console.log(res.json());
  		return res.json();
  	})
  }



  getMes(){
  	return this._http.get( this.mesUrl )
  	.map(
  		res => res.json()
  	)
  }


}
