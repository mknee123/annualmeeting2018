/*
$('.caret').click(function(e) {
  e.preventDefault();
  $('.sub-nav').not($(this).next('.sub-nav')).slideUp();
  $(this).next('.sub-nav').slideToggle();
});

*/

$(".caret").click(function(event){
    event.preventDefault();
      $('.sub-nav').not($(this).next('.sub-nav')).slideUp();
			$(this).next('.sub-nav').slideToggle();
			event.stopPropagation();
});
/*
$('.sub-nav').click(function(event){
	event.stopPropagation();
			});
      */
$('html').click(function() {
		$('.sub-nav').slideUp();
});
