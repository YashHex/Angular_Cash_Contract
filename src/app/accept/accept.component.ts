import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Data, ActivatedRoute } from '@angular/router';
import { ContractData } from '../contract';
import { ContractDetailsData } from '../contractdetails';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  acceptForm: FormGroup;
  timeLeft: number = 60;
  interval;
  cont:ContractData=new ContractData;
  contDetails:ContractDetailsData=new ContractDetailsData;
  constructor(private router:Router, private dataservice:DataService, private route:ActivatedRoute) { }
  acceptbutton:boolean=false;
 

    //console.log(this.dataservice.getform())
   
  

  

  ngOnInit(): void {
    this.dataservice.share_contract.subscribe(res => this.cont= res);
    this.dataservice.share_contract_details.subscribe(resp => this.contDetails= resp);

    this.startTimer();
    this.acceptForm= new FormGroup({
      contract_type:new FormControl(this.contDetails.contract_product,Validators.required),
      contract_amount:new FormControl(this.contDetails.contract_amount,Validators.required),
      Date_time: new FormControl(this.contDetails.Date_time,Validators.required),
      Interest_Rate: new FormControl(this.contDetails.Interest_Rate,Validators.required),
      contract_price:new FormControl('106.332',Validators.required),
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
  
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      
      else if(!this.acceptbutton){
        this.router.navigateByUrl("/");

      }
    },1000)
  }

  acceptHandler():void{
    this.acceptbutton=true;
    this.router.navigateByUrl("/summary");
  }

  cancelHandler():void{
    
    this.router.navigateByUrl("/takeout");
  }
}
