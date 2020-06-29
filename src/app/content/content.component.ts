import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentForm: FormGroup;
  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {

    this.contentForm= new FormGroup({
      contract_option: new FormControl(Validators.required),
      Servicing_Option:new FormControl(Validators.required),
      mandatory_sub_option:new FormControl(Validators.required),
      loan_identifier:new FormControl("",Validators.required),
      last_name:new FormControl("",Validators.required),
    })
  }

  addContentHandler():void{
    console.log(this.contentForm);
    this.dataservice.addContract(this.contentForm.value)
    this.router.navigate(['create']);
  }

}
