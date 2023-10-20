$(document).ready(function () {

	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		items: {
			src: 'https://www.youtube.com/watch?v=GSJPueAJnu8'
		}
	});

	$('#openPopupButton').on('click', function() {
		$.magnificPopup.open({
			items: {
				src: '#myPopup'
			},
			type: 'inline'
		});
	});
	// Add or remove the .active class when a menu item is clicked
	$(".nav-item").click(function () {
		$(".nav-item").removeClass("active"); // Remove from all menu items
		$(this).addClass("active"); // Add to the clicked menu item
	});

	// click barse icon to show menu or hide
	$(".navbar-toggler").click(function () {
		$("#mobileMenu").toggleClass("menushow");
	});
	$("#menuClose").click(function () {
		$("#mobileMenu").removeClass("menushow");
	});

	$("form").submit(function(event) {
		// Prevent the default form submission behavior
		event.preventDefault();
	
		// Perform your form data submission here, e.g., using AJAX
		// Replace the following line with your actual form submission logic
		// You can use $.ajax or other methods to send data to your server
	
		// Assuming a successful submission for demonstration purposes
		// You can replace this with your actual success condition
		var isSuccess = true;
	
		if (isSuccess) {
		  // Show the success message
		  $("#success-message").slideDown(); // Display the message
		  $("form")[0].reset(); // Reset the form fields
		}
	  });
});


