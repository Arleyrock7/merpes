import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; //Importante!

import { MesesService } from '../servicios/meses.service'; //Importante!
import { RegistroService } from '../servicios/registro.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {



/*---------------------------------------------------------- GRÁFICOS*/
	// Doughnut
  public doughnutChartLabels:string[] = ['Mes 1', 'Mes 2', 'Mes 3'];
  public doughnutChartData:number[] = [0.25, 0.50, 100];
  public doughnutChartType:string = 'doughnut';
 // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  public numeros_random(){
    this.doughnutChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]
  }



/*---------------------------------------------------------- FORMULARIO MESES*/
  mesForm: FormGroup;
  mes: any;

  meses: any[] = [];
  usuario: any[] = [];


  constructor(private _formBuilder: FormBuilder,
              private _mesesService: MesesService,
              public _registroService: RegistroService) { 


        this._mesesService.getMes()
            .subscribe( meses => {
              for (const id$ in meses ) {
                const m = meses[id$];
                m.id$ = id$;
                this.meses.push(meses[id$]);
              }
        })


        /*this._registroService.getUsuario()
        .subscribe( usuario => {
          for (const id$ in usuario ) {
                const m = usuario[id$];
                m.id$ = id$;
                this.usuario.push(usuario[id$]);
           }
        })*/

  }



  ngOnInit() {
    this.mesForm = this._formBuilder.group({
      mes1: ['', Validators.required],
      mes2: ['', Validators.required],
      mes3: ['', Validators.required]
    });
  }


  enviar(){
    this.mes = this.enviarMes(); // * <--
    this._mesesService.postMeses(this.mes)
        .subscribe(newMes => { //Como es un método post, implementamos subscribe

        }) 
  }
  enviarMes(){
    const enviarMes = {
      mes1: this.mesForm.get('mes1').value,
      mes2: this.mesForm.get('mes2').value,
      mes3: this.mesForm.get('mes3').value
    }
    return enviarMes; //Nos devuelve este método que pasa a enviarMes() y se iguala luego al objeto mes *
  }

}
