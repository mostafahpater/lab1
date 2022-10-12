import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {

  aa = function calcbirth(){
    let aNumber = Number(window.prompt("Type Your National ID", "29909011509345")).toString()
    
   return aNumber.slice(1,3)+"/"+aNumber.slice(3,5)+"/"+aNumber.slice(5,7);
    
  }()
  constructor() { }

  ngOnInit(): void {
  }
}


