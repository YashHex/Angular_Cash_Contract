export interface Contractdetails {

    
    master_commitment: string;
    source_type:string;
    contract_product:string;
    contract_amount:number;
    contract_name:string;

    contract_period: string;
    Convertible_Indicator:string;
    Assumability_Indicator:string;
    Assumability_Type:number;
    Date_time:string;

    Disposition_type: string;
    Contract_Path:string;
    Interest_Rate:string;
    Gross_Margin:number;
    Servicing_Fee:string;

    First_Increase_Rate_Percent: string;
    Subsequent_Increase_Rate_Percent:string;
    Life_Of_Loan:string;
    No_Of_Months_Next_Adjustment:number;
    Servicing_Option:string;

    Interest_Type: string;
    REMITTANCE_DUE_DAYS:string;
    Designated_Service_No:string;
    Remittance_Option:number;
    


}

export class ContractDetailsData implements Contractdetails{

    public constructor(init?: Partial<ContractDetailsData>) {
        Object.assign(this, init);
    }
    master_commitment:string;
    source_type:string;
    contract_product:string;
    contract_amount:number;
    contract_name:string;

    contract_period: string;
    Convertible_Indicator:string;
    Assumability_Indicator:string;
    Assumability_Type:number;
    Date_time:string;

    Disposition_type: string;
    Contract_Path:string;
    Interest_Rate:string;
    Gross_Margin:number;
    Servicing_Fee:string;

    First_Increase_Rate_Percent: string;
    Subsequent_Increase_Rate_Percent:string;
    Life_Of_Loan:string;
    No_Of_Months_Next_Adjustment:number;
    Servicing_Option:string;

    Interest_Type: string;
    REMITTANCE_DUE_DAYS:string;
    Designated_Service_No:string;
    Remittance_Option:number;
}
