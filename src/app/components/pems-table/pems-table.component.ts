import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pems-table',
  templateUrl: './pems-table.component.html',
  styleUrls: ['./pems-table.component.css']
})
export class PemsTableComponent implements OnInit {

  @Input() listOfData: [];
  @Input() listOfColumn: [];

  constructor() { }

  ngOnInit(): void {
  }

  addPem(){

  }

}
