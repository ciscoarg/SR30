/* -------- Menu Responsivo  --------*/ 
// Permite cambiar la clase para que el menu se comprima al achivarse el tamaño de la ventana como en un celular
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	
	// Esta funcion saca o coloca la clase resposive al icon del menu para que se despliege o guarde
	function toggleResponsiveClass() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	};



	