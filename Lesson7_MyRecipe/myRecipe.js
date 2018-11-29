/*
    Program Name: Recipe Display Application
    Author: Andrew Ingram
    Date:   11/29/2018
    Filename: myRecipe.js
*/

/* global $ */

function display(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow")
    
}//end of display

$("h3").click(display);