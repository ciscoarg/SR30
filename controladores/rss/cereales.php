<?php 

	// COTIZACIÓN DOLAR

	$docCotizacion = new SimpleXMLElement('http://www.bolsadecereales.com/feed',null,true);
	$itemCotizacionCereal = $docCotizacion->channel->item[1];
	//echo "<div class='noURL'>";
	echo $itemCotizacionCereal->title;
	
	 
	 // POSIBLEs SOLUCIÓN QUE ME DIO EL PROFESOR ---------
	
	 // $rss = simplexml_load_string(fn_get_contents($data['feed_url']));

	 // $rss = simplexml_load_string(fn_get_contents($data['feed_url']), 'SimpleXMLElement', LIBXML_NOCDATA);


	// ---------------------------------------------------

	$rss = simplexml_load_string(fn_get_contents($data['http://www.bolsadecereales.com/feed']), 'SimpleXMLElement', LIBXML_NOCDATA);


	echo $rss->title;

	/*
	$description = $itemCotizacionCereal->description;

	$descriptionExplote = explode(" ",$description);

	echo "<br><br>";


	for($i=0; $i<5; $i++){
		echo $descriptionExplote[$i]." ";
	}
	

	echo "<br><br>";

	for($i=5; $i<10; $i++){
		echo $descriptionExplote[$i]." ";
	}
	*/	


?>