var ChorusSpeech = require( './ChorusSpeech.js' );
var cs = new ChorusSpeech();
var spawn = require('child_process').spawn;


var checkNews = function() {
    var daJob = spawn( './KompasMinutes.sh' );  
    daJob.stdout.on('data', function (data) {
    });
}

cs.setLanguage( "Indonesian" );
cs.setRate( 200 );
//cs.say( "lalalalalala kami baru mau mulai jalan nih", false, function() {  
//    cs.say( "HOHOHO" );    
//} );

checkNews();

setInterval( function() {  
    checkNews();
}, 60000 );





