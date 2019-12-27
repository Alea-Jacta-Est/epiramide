import { Component, OnInit } from '@angular/core';
import { PassoService } from '../passo.service';
import { Passo } from './passo';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-passos',
  templateUrl: './passos.component.html',
  styleUrls: ['./passos.component.css']
})
export class PassosComponent implements OnInit {

  passos: Passo[];
  indiceAtual: number = 6;
  passoSelecionado: Passo;
  currentJustify = 'start';

  constructor(private passosService: PassoService) { }

  ngOnInit() {
    this.getPassos();    
  }

  getPassos(): void {
    this.passosService.getPassos().subscribe(passos => this.passos = passos);        
  }

  onProximoPasso(): void {
    this.indiceAtual = this.indiceAtual + 1;

    if (this.indiceAtual < this.passos.length) {
      this.passoSelecionado = this.passos[this.indiceAtual];
    }
    else {
      this.indiceAtual = 0;
      this.passoSelecionado = this.passos[this.indiceAtual];
    }
  }

  beforeChange($event: NgbTabChangeEvent) {
    console.log('Changing tab', $event);
  };

}
