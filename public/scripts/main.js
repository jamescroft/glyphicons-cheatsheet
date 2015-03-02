// main.js

setTimeout (function(){
    var client = new ZeroClipboard( $('.copy-button') );

    client.on( "ready", function( readyEvent ) {
       //alert( "ZeroClipboard SWF is ready!" );

      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        alert("Copied text to clipboard: " + event.data["text/plain"] );
      } );     
    } );


    
$ ("a.copy-html").on ("mouseover", function() {
    glyphStore = $(this).parents("div.icon").children("span.glyphicon");
    glyphClipboard = glyphStore.clone().empty().removeAttr("data-reactid")[0].outerHTML;
    $(this).html($("<code/>").text(glyphClipboard));
});
    
$ ("a.copy-unicode").on ("mouseover", function() {
    glyphStore = $(this).parents("div.icon").children("span.glyphicon");
    glyphClipboard = "&#x" + glyphStore.text() + ";";
    $(this).html($("<code/>").text(glyphClipboard));
});
    
$ ("a.copy-css").on ("mouseover", function() {
    glyphStore = $(this).parents("div.icon").children("span.glyphicon");
    glyphClipboard = "content:\"\\" + glyphStore.text() + "\";";
    $(this).html($("<code/>").text("" + glyphClipboard + ""));
});
    
//Create rows: 10 icons per row

	var glyphCount = $("div.icon").length;	
	var rowSize = 12;
	for (var c = 0; c <= glyphCount; c += 24) {
		$("div.icon").slice(c, c + rowSize).wrapAll("<div class='row'></div>");
	};
	for (var c = 12; c <= glyphCount; c += 24) {
		$("div.icon").slice(c, c + rowSize).wrapAll("<div class='row row-alt'></div>");
	};
	$("div.iconList .row:first").attr("id", "first-row");

//Add 3 Adsense banners    

    $("div.ad-break-top").html("<div class=\"text-center ad-break-top\"><script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><!-- Glyphicons 1st --><ins class=\"adsbygoogle\"style=\"display:inline-block;width:728px;height:90px\"data-ad-client=\"ca-pub-8168184751026221\"data-ad-slot=\"9009612991\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>");
      
    $("div.iconList .row:nth-child(3)").attr("id", "third-row");
    $("<div class='text-center ad-break'><script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><!-- Glyphicons 2nd --><ins class='adsbygoogle' style='display:inline-block;width:728px;height:90px' data-ad-client='ca-pub-8168184751026221' data-ad-slot='1486346194'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>").insertAfter("#third-row");                           
    $("div.iconList .row:nth-child(6)").attr("id", "sixth-row");
    $("<div class='text-center ad-break'><script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><!-- Glyphicons 3rd --><ins class='adsbygoogle' style='display:inline-block;width:728px;height:90px' data-ad-client='ca-pub-8168184751026221' data-ad-slot='2963079391'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>").insertAfter("#sixth-row");
        
    

    
$ ("a.copy-html").on ("mouseout", function() {
    $(this).html("<span class=\"glyphicon glyphicon-copy\"></span> HTML Tag");
});
    
$ ("a.copy-unicode").on ("mouseout", function() {
    $(this).html("<span class=\"glyphicon glyphicon-screenshot\"></span> HTML Entity");
});
    
$ ("a.copy-css").on ("mouseout", function() {
    $(this).html("<span class=\"glyphicon glyphicon-globe\"></span> CSS Rule");
});

},500);


