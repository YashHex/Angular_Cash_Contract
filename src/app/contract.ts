  
export interface Contract {

    contract_option:string;
    mandatory_sub_option: string;
    Servicing_Option:string;
    loan_identifier:number;
    last_name:string;

}


export class ContractData implements Contract{

    public constructor(init?: Partial<ContractData>) {
        Object.assign(this, init);
    }
    contract_option:string;
    mandatory_sub_option: string;
    Servicing_Option:string;
    loan_identifier:number;
    last_name:string;
}
