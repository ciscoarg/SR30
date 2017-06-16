$(function(){


	$("#whatsapp").click(function(){
		
	});



	// Scroll del encabezado y footer
	$(window).scroll(function(){ 

		var pxScroll = $(window).scrollTop(); // obtengo el dato del scroll en px por defecto

		if (pxScroll!=0){
			$("#logoSocRural").hide(500);
			$("#encabezado").addClass("encabezado2"); // fixed
			//$("#contenido").addClass("wrapper");
			$("#footer1").hide(500);
			$("#marcador").css('visibility','visible');
			$("#miniLogoSR30").css('visibility','visible');


		} else if (pxScroll==0) {
			//$("#logoSocRural").show(500);  Prefiero no mostrarlo 
			$("#encabezado").removeClass("encabezado2"); // No Fixed al top
			//$("#contenido").removeClass("wrapper");
		};
		
	});	

		

	// Muestro el footer cuando esta escondido al hacerle click al marcador
	$("#marcador").click(function(){
		$("#footer1").show(500);
		$("#marcador").css('visibility','hidden');
		
	});



	$("#miniLogoSR30").click(function(){
		$("#encabezado").removeClass("encabezado2");
		$("html, body").animate({ scrollTop: -1 }, "slow");
		$("#logoSocRural").show(500);
		$("#miniLogoSR30").css('visibility','hidden');
	});









});





