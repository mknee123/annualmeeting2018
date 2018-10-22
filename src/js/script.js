$('.caret').click(function(e) {
  e.preventDefault();
  $('.sub-nav').not($(this).next('.sub-nav')).slideUp();
  $(this).next('.sub-nav').slideToggle();
});
