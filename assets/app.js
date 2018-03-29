$('#addon0').hover(function(){
  $('#bubble0').toggleClass("visible");
});

$('#addon1').hover(function(){
  $('#bubble1').toggleClass("visible");
});

$('#addon2').hover(function(){
  $('#bubble2').toggleClass("visible");
});

$('#loginBtn').click(function(){
  $('#email').addClass('errorState');
  $('#email').val("");
  $('#password').val("");
  $('.email label').addClass('errorState');
  $('.errorMsg').addClass("visible");
});

$('#email').focus(function(){
  $('#email').removeClass('errorState');
  $('.email label').removeClass('errorState');
  $('.errorMsg').removeClass("visible");
});
