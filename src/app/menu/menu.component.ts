import { Component, OnInit } from '@angular/core';
import { MENUS } from '../mocks/mock-menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = MENUS;
  constructor() { }

  ngOnInit() {
  }

}
