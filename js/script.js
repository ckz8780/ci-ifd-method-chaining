$(document).ready(function() {
//
// add your jQuery code here

// Challenge 1:
 $('#button1').mouseenter(function() {
  $(this).removeClass("makeRed").addClass('makeBorder');
 })
 
 $('#button1').mouseleave(function() {
  $(this).removeClass("makeBorder").addClass('makeRed');
 });
}); 
