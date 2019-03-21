"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    Invoice.prototype.Invoice = function () {
        this.partNumber = 0;
        this.partDescription = "Laptops";
        this.quantity = 5;
        this.price = 25;
        this.discoutApplied = "No";
        this.invoiceState = "VALID";
        this.countryOfOrigin = "USA";
        this.symbol = "$";
        this.hasTaxRate = "Yes";
        this.status = "VALID";
        this.quantityOnHand = 10;
        this.tax = 0.3;
        this.addItem(1, "Laptops", 10, 25);
        this.setQuantity(5);
        this.setCountryOfOrigin("usa");
    };
    Invoice.prototype.addItem = function (partNumber, partDescription, quantityOnHand, price) {
        this.partNumber = partNumber;
        this.partDescription = partDescription;
        this.quantityOnHand = quantityOnHand;
        this.price = price;
    };
    Invoice.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Invoice.prototype.setCountryOfOrigin = function (getCountryOfOrigin) {
        this.countryOfOrigin = getCountryOfOrigin;
        switch (this.countryOfOrigin) {
            case "usa": {
                var us = {};
                us.country_name = "USA";
                us.symbol = "$";
                us.hasTaxRate = "yes";
                this.symbol = us.symbol;
                this.tax = 0.3;
                this.price = this.price;
                break;
            }
            case "japan": {
                var japan = {};
                japan.country_name = "Japan";
                japan.symbol = "YEN";
                japan.hasTaxRate = "yes";
                this.symbol = japan.symbol;
                this.tax = 0.1;
                this.price = this.price * 112.21;
                break;
            }
            case "saudiriyal": {
                var saudiRiyal = {};
                saudiRiyal.country_name = "Saudi Riyal";
                saudiRiyal.symbol = "SAR";
                saudiRiyal.hasTaxRate = "yes";
                this.symbol = saudiRiyal.symbol;
                this.tax = 0.05;
                this.price = this.price * 3.75;
                break;
            }
            case "southafricanrand": {
                var southAfricanRand = {};
                southAfricanRand.country_name = "South African Rand";
                southAfricanRand.symbol = "R";
                southAfricanRand.hasTaxRate = "yes";
                this.symbol = southAfricanRand.symbol;
                this.tax = 0.2;
                this.price = this.price * 14.52;
                break;
            }
            case "mexicanpeso": {
                var mexicanPeso = {};
                mexicanPeso.country_name = "Mexican Peso";
                mexicanPeso.symbol = "MXN";
                mexicanPeso.hasTaxRate = "yes";
                this.symbol = mexicanPeso.symbol;
                this.tax = 0.25;
                this.price = this.price * 18.86;
                break;
            }
        }
    };
    Invoice.prototype.getPrice = function () {
        var return_value;
        return_value = this.symbol + " " + this.price;
        return return_value;
    };
    Invoice.prototype.getStatus = function () {
        if (this.quantity > this.quantityOnHand) {
            var Internationalization = {};
            Internationalization.key = "EN_US.quantity.negative";
            Internationalization.value = "The indicated quantity cannot be below zero (0)";
            this.status = Internationalization.key + " : " + Internationalization.value;
        }
        else {
            this.status = "OKAY";
        }
        return this.status;
    };
    Invoice.prototype.getInvoiceState = function () {
        if (this.price < 0) {
            this.invoiceState = "INVALID";
        }
        else if (this.getStatus() != "OKAY") {
            this.invoiceState = "VALID but NOT_OK";
        }
        else {
            this.invoiceState = "VALID OK";
        }
        return this.invoiceState;
    };
    Invoice.prototype.getInvoiceAmount = function () {
        this.setCountryOfOrigin(this.countryOfOrigin);
        var amount;
        amount = this.quantity * this.price;
        amount = amount + (amount * this.tax);
        var temp;
        temp = this.symbol + " " + amount.toFixed(2);
        return temp;
    };
    Invoice.prototype.getPartNo = function () {
        var temp;
        temp = this.partNumber;
        return temp;
    };
    Invoice.prototype.getPartDescription = function () {
        return this.partDescription;
    };
    Invoice.prototype.getQuantity = function () {
        var temp;
        temp = this.quantity;
        return temp;
    };
    return Invoice;
}());
var customer = new Invoice();
jQuery.noConflict()(function ($) {
    $(document).ready(function () {
        //        var customer: Invoice=new Invoice();
        var date = new Date();
        $("#forDate").html('Date: ' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear());
    });
});
jQuery.noConflict()(function ($) {
    $("#print").click(function () {
        window.print();
    });
});
jQuery.noConflict()(function ($) {
    $('select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        customer.addItem(1, "Taco Bells", 10, 25);
        customer.setQuantity(5);
        customer.setCountryOfOrigin(valueSelected);
        customer.getStatus();
        $("#partno").html(customer.getPartNo());
        $("#partdescription").html(customer.getPartDescription());
        $("#price").html(customer.getPrice());
        $("#quantity").html(customer.getQuantity());
        $("#total").html(customer.getInvoiceAmount());
        $("#forInvoiceState").html("Invoice State: " + customer.getInvoiceState());
    });
});
