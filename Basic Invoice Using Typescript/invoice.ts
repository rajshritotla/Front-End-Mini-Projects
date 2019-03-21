import * as $ from 'jquery';

interface Country{

    country_name:string;
    symbol:string;
    hasTaxRate:string;

}

interface QuantityError{
    
    key: string;
    value: string;
}

class Invoice{

    partNumber: number | undefined;
    partDescription: string | undefined;
    quantity!: number | 0;
    price!: number | 0;
    discoutApplied: string | undefined;
    invoiceState: string | undefined;
    countryOfOrigin!: string | "USA";
    symbol:string | undefined;
    hasTaxRate:string | undefined;
    status: string | undefined;
    quantityOnHand!: number | 0;
    tax!: number | 0;
    

    Invoice(){
                
        this.partNumber=0;
        this.partDescription="Laptops";
        this.quantity=5;
        this.price=25;
        this.discoutApplied="No";
        this.invoiceState="VALID";
        this.countryOfOrigin="USA"
        this.symbol="$";
        this.hasTaxRate="Yes";
        this.status="VALID";
        this.quantityOnHand=10;
        this.tax=0.3;

        this.addItem(1,"Laptops",10,25);
        this.setQuantity(5);
        this.setCountryOfOrigin("usa");
    }


    addItem(partNumber:number,partDescription:string,quantityOnHand:number,price:number){
        this.partNumber=partNumber;
        this.partDescription=partDescription;
        this.quantityOnHand=quantityOnHand;
        this.price=price;
    }

    setQuantity(quantity:number){
        this.quantity=quantity;
    }

    setCountryOfOrigin(getCountryOfOrigin:string){
        this.countryOfOrigin=getCountryOfOrigin;
        switch(this.countryOfOrigin){
            case "usa" : {
                var us = {} as Country;
                us.country_name="USA";
                us.symbol="$";
                us.hasTaxRate="yes";
                this.symbol=us.symbol;
                this.tax=0.3;
                this.price=this.price;
                break;
            }
            case "japan" : {
                var japan = {} as Country;
                japan.country_name="Japan";
                japan.symbol="YEN";
                japan.hasTaxRate="yes";
                this.symbol=japan.symbol;
                this.tax=0.1;
                this.price=this.price*112.21;
                break;
            }
            case "saudiriyal" : {
                var saudiRiyal = {} as Country;
                saudiRiyal.country_name="Saudi Riyal";
                saudiRiyal.symbol="SAR";
                saudiRiyal.hasTaxRate="yes";
                this.symbol=saudiRiyal.symbol;
                this.tax=0.05;
                this.price= this.price*3.75;
                break;
            }
            case "southafricanrand" : {
                var southAfricanRand= {} as Country;
                southAfricanRand.country_name="South African Rand";
                southAfricanRand.symbol="R";
                southAfricanRand.hasTaxRate="yes";
                this.symbol=southAfricanRand.symbol;
                this.tax=0.2;
                this.price=this.price*14.52;
                break;
            }
            case "mexicanpeso" : {
                var mexicanPeso= {} as Country;
                mexicanPeso.country_name="Mexican Peso";
                mexicanPeso.symbol="MXN";
                mexicanPeso.hasTaxRate="yes";
                this.symbol=mexicanPeso.symbol;
                this.tax=0.25;
                this.price=this.price*18.86;
                break;
            }

        }
       

    }

    getPrice(){
        let return_value:string;
        return_value=this.symbol+" "+this.price;
        return return_value;
    }

    getStatus(){
        if(this.quantity>this.quantityOnHand){
            let Internationalization={} as QuantityError;
            Internationalization.key="EN_US.quantity.negative";
            Internationalization.value="The indicated quantity cannot be below zero (0)";
            this.status= Internationalization.key+" : "+Internationalization.value;
        }
        else{
            this.status="OKAY";
        }

        return this.status;
    }

    getInvoiceState(){

        if(this.price<0){
            this.invoiceState="INVALID";
        }
        else if(this.getStatus()!="OKAY"){
            this.invoiceState="VALID but NOT_OK";
        }
        else{
            this.invoiceState="VALID OK";
        }

        return this.invoiceState;
    }

    getInvoiceAmount(){        
        this.setCountryOfOrigin(this.countryOfOrigin);
        let amount:number;
        amount= this.quantity*this.price;
        amount=amount+ (amount*this.tax);
        let temp:string;
        temp= this.symbol+" "+amount.toFixed(2);
        return temp;
    }

    getPartNo(){
        let temp:string;
        temp= this.partNumber;
        return temp;
    }

    getPartDescription(){
        return this.partDescription;
    }

    getQuantity(){
        let temp:string;
        temp= this.quantity;
        return temp;
    }

    
}

    var customer: Invoice=new Invoice();

    jQuery.noConflict()(function ($) { 
        $(document).ready(function() { 

    //        var customer: Invoice=new Invoice();
            var date=new Date();
            $("#forDate").html('Date: ' + date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear());

        });
    });

    jQuery.noConflict()(function ($) { 
            
        $( "#print" ).click(function() {
            (window as any).print();
        });
    });

    jQuery.noConflict()(function ($) { 
        $('select').on('change', function (e) {
            var optionSelected:any = $("option:selected", this);
            var valueSelected:any = this.value;
            
            customer.addItem(1,"Taco Bells",10,25);
            customer.setQuantity(5);
            customer.setCountryOfOrigin(valueSelected);
            customer.getStatus();
            $("#partno").html(customer.getPartNo());
            $("#partdescription").html(customer.getPartDescription());
            $("#price").html(customer.getPrice());
            $("#quantity").html(customer.getQuantity());
            $("#total").html(customer.getInvoiceAmount());
            $("#forInvoiceState").html("Invoice State: "+customer.getInvoiceState());
        });
    });
