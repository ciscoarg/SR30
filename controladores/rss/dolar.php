<?php 

	// COTIZACIÓN DOLAR

	$docCotizacion = new SimpleXMLElement('http://usd.es.fxexchangerate.com/ars.xml',null,true);
	$itemCotizacion = $docCotizacion->channel->item;
	echo "<div class='noURL'>";
	echo $itemCotizacion->description;
	echo "</div>";






?>