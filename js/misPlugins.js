(function($){

	// Esconde el logo del encabezado al navegar por el sitio
	$.fn.encabezadoScroll = function(){

		var objeto = $(this);
		
		console.log(objeto);

		// var altoOriginal = $(this).height();
		// var anchoOriginal = $(this).width();

		$(window).scroll(function(){
			// console.log("El Plugin se carga correctamente");
			
			var pxScroll = $(window).scrollTop();
			console.log(pxScroll);
			
			if (pxScroll > 150) {
				console.log('Mayor a 200');
				//console.log(objeto);

				objeto.hide(250);

				
			} else {
				console.log('Es menor a 200');
				//console.log(objeto);

				objeto.show(250);

			}
		

		});	

	};



	// Deja fijo el menu (position: fixed) al navegar por el sitio

	$.fn.encabezadoFixed = function(){

		var objeto2 = $(this); // Tomo el objeto seleccionado

		$(window).scroll(function(){ // ante el scroll quiero que llame a las siguientes funciones autoinvocadas

			var pxScroll = $(window).scrollTop(); // obtengo el dato del scroll en px por defecto

			if (pxScroll>148){
				objeto2.css({"position":"fixed",
							}); 
			} else {
				objeto2.css({"position":"relative",
								
							}); 
			}

		});

	};




	// Plugin para obtener datos por get con Jquery  
    $.get = function(key)   {  
        key = key.replace(/[\[]/, '\\[');  
        key = key.replace(/[\]]/, '\\]');  
        var pattern = "[\\?&]" + key + "=([^&#]*)";  
        var regex = new RegExp(pattern);  
        var url = unescape(window.location.href);  
        var results = regex.exec(url);  
        if (results === null) {  
            return null;  
        } else {  
            return results[1];  
        }  
    }  
  










}(jQuery));