$(document).ready(function(){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 200) {
			$('nav').addClass('scrolled');
		}else{
			$('nav').removeClass('scrolled');
		}
 	});
	$("#pageScrollListener").click(function() {
		$('#bgAustin').scrollView();
	});
	
  	$.fn.scrollView = function () {
		return this.each(function () {
			if ($(document).scrollTop() > 200) {
				$('html, body').animate({
					scrollTop: $(this).offset().top
				}, 1000);
			}
		});
	}
});

	