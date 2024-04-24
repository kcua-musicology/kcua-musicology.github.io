jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Javascript Chart
		if($('#javascript').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#74cfae"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		};

		// Bootstrap Chart
		if($('#bootstrap').length) {
			var doughnutData = [{
					value: 90,
					color: "#74cfae"
				},
				{
					value: 10,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
		}
});
