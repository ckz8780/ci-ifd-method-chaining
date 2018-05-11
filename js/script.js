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
 
 // Challenge 2:
 $('#button1').click(function() {
  $('#para1').slideToggle(500);
 })
 
 //Challenge 3 (adding additional functionality):
 $('#button2').mouseenter(function() {
  $(this).removeClass("makeRed").addClass('makeBorder');
 })
 
 $('#button2').mouseleave(function() {
  $(this).removeClass("makeBorder").addClass('makeRed');
 });
 
 $('#button2').click(function() {
  $('#para2').fadeToggle(500);
 })
}); 
