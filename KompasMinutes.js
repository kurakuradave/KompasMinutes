var fs = require( 'fs' );
var ChorusSpeech = require( './ChorusSpeech.js' );
var cs = new ChorusSpeech();
var spawn = require('child_process').spawn;
var lines = [];
var speechReady = true;

cs.on( 'speechDone', function(  ) { speechReady = true } );

var checkNews = function() {
    var daJob = spawn( './KompasMinutes.sh' );  
    daJob.on('exit', function (c) {
      console.log( "Done getting news" );
      fs.readFile( './text.txt', 'utf8', function( err, raw ) {
        if( err ){
          console.log( 'error reading text.txt' );
          process.exit();
        } else {
          lines = raw.split( '\n' );
          console.log( "Found %d lines", lines.length );
        }
      } ); 
    });
}

// settings
cs.setLanguage( "Indonesian" );
cs.setRate( 300 );

// kickstart
checkNews();

// roll checking for news
setInterval( function() {  
    checkNews();
}, 120000 );

// roll playback
setInterval( function() {
  if( lines.length > 0 ){
    if( speechReady ){
      speechReady = false;
      cs.say( lines[0] );
      lines.splice( 0, 1 );
    }
  }
}, 2000 );


