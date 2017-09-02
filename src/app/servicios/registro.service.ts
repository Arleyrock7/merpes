import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RegistroService {

//usuarioUrl = 'https://merpesproject.firebaseio.com';

  constructor(private _activatedRoute: ActivatedRoute,
  			      private _router: Router,
              private _http: Http) { }

  registroUsuario(registro){
  	firebase.auth().createUserWithEmailAndPassword(registro.email, registro.password)	
  	.catch(error => {
  		console.log(error);
  	})
  }

  inicioSesion(registro){ //Este nuevo método va a recibir registros
  	return firebase.auth().signInWithEmailAndPassword(registro.email, registro.password)
  			.then( response => {
  				console.log(response);
  				this._router.navigate(['/usuario'])
  			})
        .then( newRegistro => {
          firebase.database().ref('/perfilusuario').child(newRegistro.uid).set({
            email: registro.email
          });
        })
  			/*  .catch()
  				error => {
  					console.log(error);
  				}  */
          /*.then( response => {
            firebase.database().ref('/usuario').child(response.uid).set({
              email: registro.email
            })
          })*/
  }



  siAutenticado(){
  	const user = firebase.auth().currentUser;
  	if(user){
  		return true;
  	}else{
  		return false;
  	}
  }
  noAutenticado(){
  	firebase.auth().signOut();
  }



  /*getUsuario(){
    return this._http.get( this.usuarioUrl )
    .map(
      res => res.json ()
    )

  }*/


}
