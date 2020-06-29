import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Contract, ContractData } from './contract';
import { ContractDetailsData } from './contractdetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private content_contract = new BehaviorSubject<ContractData>(null);
  public share_contract= this.content_contract.asObservable();

  private content_contract_details = new BehaviorSubject<ContractDetailsData>(null);
  public share_contract_details= this.content_contract_details.asObservable();
  constructor() { }
  
  addContract(contract: ContractData): void{
   
    this.content_contract.next(contract);
    console.log("Add Contract Service Method"+ this.share_contract)
  }

  addContractDetails(contractdetails: ContractDetailsData): void{
   
    this.content_contract_details.next(contractdetails);
    console.log("Add Contract Details Service Method"+ this.share_contract_details)
  }

  
}
