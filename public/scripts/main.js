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
    $(this).html($("<code/>").text(glyphClipboard));
});

    
    

    
$ ("a.copy-html").on ("mouseout", function() {
    $(this).html("<span class=\"glyphicon glyphicon-copy\"></span> HTML Tag");
});
    
$ ("a.copy-unicode").on ("mouseout", function() {
    $(this).html("<span class=\"glyphicon glyphicon-screenshot\"></span> HTML Entity");
});

},500);


