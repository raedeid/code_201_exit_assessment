'use strict'
var formId = document.getElementById('form')
var button = document.getElementById('deletename');
var addDiv = document.createElement('div')
formId.appendChild(addDiv);
var newlist =  document.createElement('nav')
var new_unorder = document.createElement('ul')
newlist.appendChild(new_unorder)
var myFunction = function (event){
    var what_name = document.createElement('li')
    new_unorder.appendChild(what_name);
    what_name.textContent = event.target.input.value
    
}
button.addEventListener('submit',myFunction);

