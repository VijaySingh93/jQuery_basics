$(document).ready(() => {
  $("#first-division").show();
  $("#second-division").hide();
  $("#third-division").hide();
  let flag1 = 0;
  let flag2 = 0;
  let flag3 = 0;
  $("#first-collapse").click(() => {
    if (flag1 == 0) {
      $("#first-division").fadeOut();
      flag1 = 1;
    } else {
      $("#first-division").fadeIn();
      flag1 = 0;
      $("#second-division").hide();
      $("#third-division").hide();
      flag2 = 0;
      flag3 = 0;
    }

  })

  $("#second-collapse").click(() => {
    if (flag2 == 0) {
      $("#second-division").fadeIn();
      flag2 = 1;
      $("#first-division").hide();
      $("#third-division").hide();
      flag1 = 1;
      flag3 = 0;
    } else {
      $("#second-division").fadeOut();
      flag2 = 0;
    }
  })

  $("#third-collapse").click(() => {
    if (flag3 == 0) {
      $("#third-division").fadeIn();
      flag3 = 1;
      $("#first-division").hide();
      $("#second-division").hide();
      flag1 = 1;
      flag2 = 0;
    } else {
      $("#third-division").fadeOut();
      flag3 = 0;
    }
  })

})
