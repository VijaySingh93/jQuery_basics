$(document).ready(() => {


  /*Search button click*/
  $(".searchbtn").click(() => {
    location.reload();
  })

  /*Hamburger icon toggle*/
  $('.list2').hide();
  $('.icon').click(() => {
    $('.list2').toggle(500);
  })

})
