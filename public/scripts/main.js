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
      client.on( 'mouseover', function ( client, args ) {

      } );
    } );
},500);
