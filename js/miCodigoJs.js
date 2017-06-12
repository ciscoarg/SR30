$(function(){


	$("#whatsapp").click(function(){
		
	});




	$(window).scroll(function(){ 

		var pxScroll = $(window).scrollTop(); // obtengo el dato del scroll en px por defecto

		if (pxScroll>0){
			$("#logoSocRural").hide();
			$("#encabezado").addClass("encabezado2");
			$("#contenido").addClass("wrapper");
		} else {
			$("#logoSocRural").show(500);
			$("#encabezado").removeClass("encabezado2");
			$("#contenido").removeClass("wrapper");
		};
		
	});	

		

});





