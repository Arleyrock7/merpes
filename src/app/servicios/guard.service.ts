import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RegistroService } from '../servicios/registro.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private _registroService: RegistroService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	return this._registroService.siAutenticado();
  }

}
