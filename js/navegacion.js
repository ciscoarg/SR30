// Controlamos el menú y el contenido del main que se trae de la carpeta contenido al index


$(function(){

var url = 'http://localhost/SR30/';


// Por defecto dejamos al inicio.html en el contenido del sitio
$('#contenido').load(url+'contenido/inicio.html');
/* //Iba a hacer un test para comprobar si estaba vacio el contenido pero lo dejo comentado
var emptyTest = $('#contenido').is(':empty');

console.log(emptyTest);

if(emptyTest) {

}
*/




//Controlamos el contenido del main en el index según el menu de navegación

	$('#myTopnav a').click(function(e) {
		e.preventDefault(); // Previene la acción por defecto, que sería enviarte a otra página
		var href = url + 'contenido/' + $(this).attr('href'); // Esta línea extrae el contenido del atributo href del enlace clickeado
                // La línea anterior quedaría así si se clickea en inicio:
                // href = http://misitio.algo/contenido.html #inicio
                // Lo que cargará el contenido del div inicio dentro del contenido.
                console.log(href);
		$('#contenido').empty(); // Limpia el div 'contenido'
		$('#contenido').attr('alt',$(this).attr('id'));
		$('#contenido').load(href); // Esta línea simplemente carga el contenido dentro del div 'contenido'
	

		// Remarcamos con CSS en que seccion estoy en la barra de navegacion
		var seccionActual = '#' + $('#contenido').attr('alt');
		console.log(seccionActual);
		//$('#myTopnav a').css({"background-color":"#333","color":"#FFFFFF"}); // Respeto el fondo de estilo.css

		$(seccionActual).css({'background-color':'#E0DEDE','color':'#0E0D0D'});

		//Al hacer click en un nuevo contenido subir el scroll de window al top
		$("html, body").animate({ scrollTop: 1 }, "slow");

	});

	
	
	$('#myTopnav a').hover(function(){
			$(this).css({"background-color":"#E0DEDE","color":"#0E0D0D"});},
			function(){
			$(this).css({"background-color":"#333","color":"#FFFFFF"});
		}); 


 





});