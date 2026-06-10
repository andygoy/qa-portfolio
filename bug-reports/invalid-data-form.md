Title: 
"Data form is accepting invalid data in the following fields: name, last name and ZIP code"

Preconditions:
Add an object to the cart, and then go to the "Checkout your information" page where the data form will appear. 
 
Steps to reproduce:
1. Click on the cart icon that's in the top right corner.
2. Click on the "Checkout" green button.
3. While on the form page, write the following:
Name: 1
Last name: 1
Zip Code: 1
4. Click on the "Continue" green button. 

Actual result:
The system accepts any type of data. After filling in the data, it sends you to the "Finish" page where you can complete your order.

Expected result:
The system should validate that the 'name' and 'last name' contain a minimum of alphabetic characters, and that the 'ZIP code' is in a valid numeric format. 

Severity:
Major
