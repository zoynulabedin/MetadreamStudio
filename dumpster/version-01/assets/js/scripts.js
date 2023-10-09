$(document).ready(function () {
	// Add or remove the .active class when a menu item is clicked
	$("div.dumpster-slider").owlCarousel({
		loop:true,
		items: 4, // Number of items to display
   		 margin:10,
    	responsiveClass:true,
		nav:true,
		navText: [
			'<i class="fa fa-angle-double-left" aria-hidden="true"></i>', // Custom HTML for the previous arrow
			'<i class="fa fa-angle-double-right" aria-hidden="true"></i>'     // Custom HTML for the next arrow
		  ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
	});
	$("div.dumpster-project-type-slider").owlCarousel({
		loop:true,
		items: 4, // Number of items to display
   		 margin:10,
    	responsiveClass:true,
		nav:true,
		navText: [
			'<i class="fa fa-angle-double-left" aria-hidden="true"></i>', // Custom HTML for the previous arrow
			'<i class="fa fa-angle-double-right" aria-hidden="true"></i>'     // Custom HTML for the next arrow
		  ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
	});
	$(".nav-item").click(function () {
		$(".nav-item").removeClass("active"); // Remove from all menu items
		$(this).addClass("active"); // Add to the clicked menu item
	});

	// click barse icon to show menu or hide
	$(".navbar-toggler").click(function () {
		$("#mobileMenu").toggleClass("showNav");
	});
	$("#menuClose").click(function () {
		$("#mobileMenu").removeClass("showNav");
	});
});
