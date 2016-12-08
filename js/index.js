 $(document).ready(function() {

 	/* Smooth Scrolling
 	 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
 	--------------------------------------------------------------*/
 	$('a[href*="#"]:not([href="#"])').click(function() {
 		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
 			location.hostname == this.hostname) {

 			var target = $(this.hash);
 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

 			if(target.length) {

 				$('html, body').animate({
 					scrollTop: target.offset().top
 				}, 1000);
 				return false;
 			}
 		}
 	});

 	/* Enable swiping for tablets and mobile
 	 * http://lazcreative.com/blog/adding-swipe-support-to-bootstrap-carousel-3-0/
 	 ---------------------------------------------------------------------------------*/
 	if($(window).width() <= 991) {
 		$(".carousel-inner").swipe({
 			//Generic swipe handler for all directions
 			swipeLeft: function(event, direction, distance, duration, fingerCount) {
 				$(this).parent().carousel('next');
 			},
 			swipeRight: function() {
 				$(this).parent().carousel('prev');
 			},
 			//Default is 75px, set to 0 for demo so any distance triggers swipe
 			threshold: 0
 		});
 	}

 	/* Handle window resize */
 	$(window).resize(function() {
 		if($(window).width() <= 991) {
 			$(".carousel-inner").swipe({
 				//Generic swipe handler for all directions
 				swipeLeft: function(event, direction, distance, duration, fingerCount) {
 					$(this).parent().carousel('next');
 				},
 				swipeRight: function() {
 					$(this).parent().carousel('prev');
 				},
 				//Default is 75px, set to 0 for demo so any distance triggers swipe
 				threshold: 0
 			});
 		}
 	});

 });


