(function($){

	$.fn.encabezadoScroll = function(){

		var objeto = $(this);
		
		// var altoOriginal = $(this).height();
		// var anchoOriginal = $(this).width();

		$(window).scroll(function(){
			// console.log("El Plugin se carga correctamente");
			
			var pxScroll = $(window).scrollTop();
			console.log(pxScroll);
			
			if (pxScroll > 200) {
				console.log('Mayor a 200');
				
				objeto.hide(500);

				
			} else {
				console.log('Es menor a 200');

				objeto.show(500);

			}
		

		});	

	};

}(jQuery));