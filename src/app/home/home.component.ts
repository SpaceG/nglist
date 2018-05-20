
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  gitText: string = 'My first Gitlist';
  gits = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.gits.length;
  }

  addItem() {
    this.gits.push(this.gitText);
    this.gitText = '';
    this.itemCount = this.gits.length;
  }

}