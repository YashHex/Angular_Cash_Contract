import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Data, ActivatedRoute } from '@angular/router';
import { ContractData } from '../contract';
import { ContractDetailsData } from '../contractdetails';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  SummaryForm: FormGroup;
  cont:ContractData=new ContractData;
  contDetails:ContractDetailsData=new ContractDetailsData;
  constructor(private router:Router, private dataservice:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    //console.log(this.dataservice.getform())
    this.dataservice.share_contract.subscribe(res => this.cont= res);
    this.dataservice.share_contract_details.subscribe(resp => this.contDetails= resp);
  
  
    this.SummaryForm= new FormGroup({
      master_commitment: new FormControl(this.contDetails.master_commitment,Validators.required),
      contract_type:new FormControl(this.cont.contract_option,Validators.required),
      contract_product:new FormControl(this.contDetails.contract_product,Validators.required),
      contract_name:new FormControl(this.contDetails.contract_name,Validators.required),
      loan_identifier:new FormControl(this.cont.loan_identifier,Validators.required),
      Convertible_Indicator: new FormControl(this.contDetails.Convertible_Indicator,Validators.required),
      Assumability_Indicator: new FormControl(this.contDetails.Assumability_Indicator,Validators.required),

      contract_amount:new FormControl(this.contDetails.contract_amount,Validators.required),
      contract_period: new FormControl(this.contDetails.contract_period,Validators.required),
      Date_time: new FormControl(this.contDetails.Date_time,Validators.required),
      Servicing_Option: new FormControl(this.contDetails.Servicing_Option,Validators.required),
      REMITTANCE_DUE_DAYS: new FormControl(this.contDetails.REMITTANCE_DUE_DAYS,Validators.required),
      Designated_Service_No: new FormControl(this.contDetails.Designated_Service_No,Validators.required),
      Remittance_Option: new FormControl(this.contDetails.Remittance_Option,Validators.required),

      Interest_Rate: new FormControl(this.contDetails.Interest_Rate,Validators.required),
      Gross_Margin:  new FormControl(this.contDetails.Gross_Margin,Validators.required),
      Servicing_Fee:  new FormControl(this.contDetails.Servicing_Fee,Validators.required),
      First_Increase_Rate_Percent:  new FormControl(this.contDetails.First_Increase_Rate_Percent,Validators.required),
      Subsequent_Increase_Rate_Percent:  new FormControl(this.contDetails.Subsequent_Increase_Rate_Percent,Validators.required),
      Life_Of_Loan:  new FormControl(this.contDetails.Life_Of_Loan,Validators.required),
      No_Of_Months_Next_Adjustment:  new FormControl(this.contDetails.No_Of_Months_Next_Adjustment,Validators.required),
  


 
    })
  }
  }
