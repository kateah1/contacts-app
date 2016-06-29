'use strict';

$(document).ready(function () {


// global variables
var contacts = [];
var firstName = $("#first_name");
var lastName = $("#last_name");
var phoneNumber = $("#phone_number");
var street = $("#street");
var city = $("#city");
var state = $("#state");


// when click Add, take input values and create new object for contact	
$("button").click(function() {
	addContact();
})


// only append if required fields filled out
function addContact() {
	if(lastName.val() !== '' && phoneNumber.val() !== '') {
		var contactName = firstName.val() + " " + lastName.val();
		$("ul").append("<li>" + contactName + "</li>");
		$("#contactInfo").append("<h1>" + contactName + "</h1>");
		$("#contactInfo").append("<p>" + phoneNumber.val() + "</p>");
		$("#contactInfo").append("<p>" + street.val() + "<br>" + city.val() + ", " + state.val() + "</p>");
		document.getElementById("form").reset();
	}
	else {
		alert("Please fill out required fields!");
	}
}


// show full contact info when click on any contact name
$("div ul li").click(function () {
	$("#contactInfo").empty();
})



})