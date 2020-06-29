import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { DataService } from '../data.service';
import { Contract, ContractData } from '../contract';
import { ContractDetailsData } from '../contractdetails';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  constructor(private router:Router, private dataService: DataService) { }
  private cont:ContractData=new ContractData;
  private cont_Details:ContractDetailsData=new ContractDetailsData;
  ngOnInit(): void {
    
      this.dataService.share_contract.subscribe(
        res => this.cont= res);
      console.log(this.cont.Servicing_Option);

      this.createForm= new FormGroup({
      master_commitment: new FormControl(Validators.required),
      source_type:new FormControl(Validators.required),
      contract_product:new FormControl(Validators.required),
      contract_amount:new FormControl('8244088',Validators.required),
      contract_name:new FormControl('test5',Validators.required),
      contract_period: new FormControl('',Validators.required),
      Convertible_Indicator: new FormControl('false',Validators.required),
      Assumability_Indicator: new FormControl('true',Validators.required),
      Assumability_Type: new FormControl('',Validators.required),
      Date_time: new FormControl('',Validators.required),
      Disposition_type: new FormControl('',Validators.required),
      Contract_Path: new FormControl('',Validators.required),
      Interest_Rate: new FormControl('',Validators.required),
      Gross_Margin: new FormControl('',Validators.required),
      Servicing_Fee: new FormControl('',Validators.required),
      First_Increase_Rate_Percent: new FormControl('',Validators.required),
      Subsequent_Increase_Rate_Percent: new FormControl('',Validators.required),
      Life_Of_Loan: new FormControl('',Validators.required),
      No_Of_Months_Next_Adjustment: new FormControl('',Validators.required),
      Servicing_Option: new FormControl('',Validators.required),
      Interest_Type: new FormControl('',Validators.required),
      REMITTANCE_DUE_DAYS: new FormControl('5',Validators.required),
      Designated_Service_No: new FormControl('',Validators.required),
      Remittance_Option: new FormControl('',Validators.required),
    })
  }

  createHandler():void{
    this.cont_Details= new ContractDetailsData(this.createForm.value);
    this.dataService.addContractDetails(this.cont_Details);
    
    this.router.navigate(['verify']);
  }

  cancelHandler():void{
    
    this.router.navigate(['content']);
  }
}

