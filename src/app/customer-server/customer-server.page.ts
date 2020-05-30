import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-server',
  templateUrl: './customer-server.page.html',
  styleUrls: ['./customer-server.page.scss'],
})
export class CustomerServerPage implements OnInit {

  private selectedProblem_cs:string;

  constructor() { }

  ngOnInit() {
  }

  selectProblem_cs(){
    if(this.selectedProblem_cs=="other"){
      document.getElementById("otherProblem_cs").hidden=false;
    }else{
      document.getElementById("otherProblem_cs").hidden=true;
    }
  }
}
