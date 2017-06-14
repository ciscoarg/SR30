<?php 

	// COTIZACIÓN DOLAR

	$docCotizacion = new SimpleXMLElement('http://www.bolsadecereales.com/feed',null,true);
	$itemCotizacionCereal = $docCotizacion->channel->item[1];
	//echo "<div class='noURL'>";
	echo $itemCotizacionCereal->title;
	

	$description = $itemCotizacionCereal->description;

	$descriptionExplote = explode(" ",$description);

	echo "<br><br>";


	for($i=0; $i<10; $i++){
		echo $descriptionExplote[$i]." ";
	}
	

	echo "<br><br>";



?>