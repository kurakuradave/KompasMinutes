var moment = require( 'moment' );
var fs = require( 'fs' );
var ChorusSpeech = require( './ChorusSpeech.js' );
var cs = new ChorusSpeech();
var spawn = require('child_process').spawn;
var lines = [];
var speechReady = false;
var checkNewsInterval = 15 * 60 * 1000;
var readLinesInterval;

moment.locale( 'id' );
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
          var d = moment();
          lines = [ d.format("dddd") + ", " + d.format( "DD-MMM-YYYY" ) + ", jam " + d.format( "HH:mm" ) + ". Berita terkini dari Kompas:" ];
          var titles = raw.split( '\n' );
          lines = lines.concat( titles );
          playback();
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
// comment this block if want to use cron to set up the job

setInterval( function() {  
    checkNews();
}, checkNewsInterval );


// roll playback
var playback = function() {
  readLinesInterval = setInterval( function() {
    if( lines.length > 0 ){
      if( speechReady ){
        speechReady = false;
        cs.say( lines[0] );
        lines.splice( 0, 1 );
      }
    } else {
      clearInterval( readLinesInterval );
      cs.say( "Akhir Berita Untuk Periode Ini" );
      console.log( "No more lines to read" );
    }
  }, 2000 );
};

