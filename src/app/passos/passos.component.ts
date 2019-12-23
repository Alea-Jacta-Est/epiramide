import { Component, OnInit } from '@angular/core';
import { PassoService } from '../passo.service';
import { Passo } from './passo';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-passos',
  templateUrl: './passos.component.html',
  styleUrls: ['./passos.component.css']
})
export class PassosComponent implements OnInit {
passos: Passo[];

  constructor(private passosService: PassoService) { }

  ngOnInit() {
    this.getPassos();
  }

  getPassos(): void {
    this.passosService.getPassos().subscribe(passos => this.passos = passos);
  }

}
