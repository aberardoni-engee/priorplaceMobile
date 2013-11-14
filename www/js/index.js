$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});
 
 function capturePhoto()
 {
	navigator.device.capture.captureImage();
 }
 


