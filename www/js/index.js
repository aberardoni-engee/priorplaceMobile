$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});

function exitFromApp()
 {
	navigator.app.exitApp();
 }