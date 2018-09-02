$(document).ready(() => {
  $(".parent").hide();
})
$("#root-button").click(() => {
  $("#root-button").hide();
  $(".parent").show("50");
})
$(".item1").click(() => {
  $(".parent").hide("50");
  $("#root-button").show("50");
})
$(".cross").click(() => {
  $(".parent").hide("50");
  $("#root-button").show("50");
})
