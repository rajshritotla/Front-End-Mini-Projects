This is a very simple invoice application, designed to practice TypeScript.

# Invoice exercise
Created a class (or classes) that resemble an "Invoice" system that a business might use to represent invoices.

# An Invoice include:
Part number (type varchar2)

Country of origin: US, Japan, Saudi Riyal, South African Rand, Mexican peso

Part description (type char[512])

Quantity of an item (type decimal)

Price per item (type float)

Discount applied? (type varchar[128])

Invoice state

# Requirements
A constructor that initializes it with a Object Literal

The country of origin is indicated with an Object Literal, called Country. It has a setup like this Country.US.{name, symbol,hasTaxRate} for all the countries listed.

If the price of any item is below zero (0), then set it to InvoiceState.INVALID.price

An internal method that calculates the price and returns back using the appropriate current symbol, based on the Country of Origin value.

If the quantity of an item is more than the quantity on hand return an error message from an Object Literal called Internationalization.js. Use this key and value: EN_US.quantity.negative: "The indicated quantity cannot be below zero (0)"
If okay, then return an Object Literal, called "Status" with an indication of Status.OK

Making sure the price is always set to 2 decimals; like 2.11 or 124.45

A method named getInvoiceAmount that calculates the invoice amount with tax applied (i.e., multiplies the quantity by the price per item, then adds in the tax). Return the amount as a double value.

The state of an Invoice is set by using an Object Literal, called InvoiceState. This Object has at least these values: VALID.{OK, NOT_OK}, INVALID.{PRICE, INVENTORY, NAME, COUNTRY, QUANTITY, COUNTRY}

