$(function(){


	$("#whatsapp").click(function(){
		
	});




	$(window).scroll(function(){ 

		var pxScroll = $(window).scrollTop(); // obtengo el dato del scroll en px por defecto

		if (pxScroll!=0){
			$("#logoSocRural").hide(500);
			$("#encabezado").addClass("encabezado2");
			$("#contenido").addClass("wrapper");
		} else if (pxScroll==0) {
			$("#logoSocRural").show(500);
			$("#encabezado").removeClass("encabezado2");
			$("#contenido").removeClass("wrapper");
		};
		
	});	

		

});





