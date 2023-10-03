$(document).ready(function () {
	// Add or remove the .active class when a menu item is clicked
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
