$(document).ready(function () {
  var currency = $("body").data('currency');
  
  $('.new-price p').each(function () {
    var p = parseInt($(this).text());
    p = p * 100 / 30;
    p2 = Math.ceil(p);
    $('.old-price p').text(p2 + ' ' + currency);
  });



  $('.order-form').submit(function (e) {
  	var size = $(this).find('.select .current').text();
    $(this).find('input[name=comment]').val(size);
  });
});
