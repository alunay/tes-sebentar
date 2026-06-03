$(document).ready(function() {
	$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
$('swindow').slideDown(1000);
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.switchTheme').outerHeight();
	
	$(window).scroll(function(event){
		didScroll = true;
	});
	
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	
	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('.switchTheme').removeClass('switchTheme-down').addClass('switchTheme-up');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.switchTheme').removeClass('switchTheme-up').addClass('switchTheme-down');
			}
		}
		
		lastScrollTop = st;
	}
});

$(document).ready(function() {
$('swindow2').slideDown(1000);
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.share').outerHeight();
	
	$(window).scroll(function(event){
		didScroll = true;
	});
	
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	
	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('.share').removeClass('share-down').addClass('share-up');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.share').removeClass('share-up').addClass('share-down');
			}
		}
		
		lastScrollTop = st;
	}
});

$(document).ready(function() {
	$(".element-select").change(function(){
		var kota = $(this).val();
		$(".img-2020 img").attr("src","assets/images/maps/"+kota+" 2020.webp")
		$(".img-1984 img").attr("src","assets/images/maps/"+kota+" 1984.webp")
	})
})