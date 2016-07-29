$ (document).ready(function() {
        $("h1").click(function() {
                $(".about").fadeIn();
        });
	$("#send").avgrund({
			height: 200,
			holderClass: 'custom',
			showClose: true,
			showCloseText: 'Close',
			enableStackAnimation: true,
			onBlurContainer: '.container',
			template: '<p>Your Message has been sent!</p>'
      });
});
