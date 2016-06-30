'use strict';

$(document).ready(function () {


// global variables
var contacts = [];
var id = 1;
var firstName = $("#first_name");
var lastName = $("#last_name");
var phoneNumber = $("#phone_number");
var street = $("#street");
var city = $("#city");
var state = $("#state");


$("button").click(function() {
	if(lastName.val() !== '' && phoneNumber.val() !== '') {
		contacts.push({
			firstName: firstName.val(),
			lastName: lastName.val(),
			phoneNumber: phoneNumber.val(),
			street: street.val(),
			city: city.val(),
			state: state.val(),
			id: id
		});	
		addContact();
	}
	else {
		alert("Please fill out required fields!");
	}	
})


function addContact() {
		var contactName = firstName.val() + " " + lastName.val();
		$("ul").append("<li value='" + id + "'>" + contactName + "</li>");
		id++;
		$("input").val("");
}


// show full contact info when click on any contact name
$("div ul").on("click", "li", function () {
	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].id === $(this).val()) {
			$("#contactInfo") ? $("#contactInfo").empty() : '';
			$("#contactInfo").append("<h1>" + contacts[i].firstName + " " + contacts[i].lastName + "</h1>");
			$("#contactInfo").append("<p>" + contacts[i].phoneNumber + "</p>");
			$("#contactInfo").append("<p>" + contacts[i].street + "<br>" + contacts[i].city + ", " + contacts[i].state + "</p>");
		}
	}
})


})