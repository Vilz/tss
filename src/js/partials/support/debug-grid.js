if (isDebug){
	$(document).bind( 'keydown', function(ev) {

	    ev = ev || window.event;
	    var code = ev.keyCode || ev.charCode;
	    if( ev.altKey == 1 && ev.shiftKey == 1 && ev.ctrlKey ==1 ) { // ctrl + V
	        $('.debug').toggle();
	    }
	    /*else if( code == 90 && ev.ctrlKey == 1 ) { // ctrl + x
	        alert("!!");
	        $('.debug .grid').toggleClass("workout");
	    }*/
	});    
}
