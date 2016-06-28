'use strict';

$(document).ready(function () {


// global variables
var contacts = [];
var firstName = $("#First-name");
var lastName = $("#Last-name");
var phoneNumber = $("#Phone-number");
var street = $("#Street");
var city = $("#City");
var state = $("#State");


// when click Add, take input values and create new object for contact	
$("button").click(function() {
	addContact();
})


// only append if required fields filled out
function addContact() {
	var reqFields = lastName.val()!='' || phoneNumber.val()!='';
	if(reqFields) {
		var contactName = $("#First-name").val() + " " + $("#Last-name").val();
		$("ul").append("<li>" + contactName + "</li>");
		add(firstName, lastName, phoneNumber, street, city, state);
	}
	else {
		alert("Please fill out required fields!");
	}
}


// store contact in array
var add = function(firstName, lastName, phoneNumber, street, city, state) {
	var newContact = {
		firstName: firstName,
		lastName: lastName,
		phoneNumber: phoneNumber,
		street: street,
		city: city,
		state: state,
	}
	contacts[contacts.length] = newContact;
}


// when click on any contact, show object in right panel with contact info
$("li").click(function () {
	displayContact();		
})


function displayContact(contacts) {

}


})