import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = ""; 
  
  constructor() { }

  ngOnInit(): void {
    //este metodo se dispara 1 vez, cuando el componente es creado. 
    this.debouncer.subscribe(valor => {
      console.log("debouncer:", valor);
    })
  }

  buscar() {    
    //la instruccion de arriba llama al padre 
    console.log("Hola, soy PaisInputComponent");
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    const valor = event.target.value;
    console.log(valor);
    
    console.log(this.termino);

  }

}
