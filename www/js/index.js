$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});
 
 function capturePhoto()
 {
	navigator.device.capture.captureImage();
 }
 
function init() {
  document.addEventListener("deviceready", onDeviceReady, false);

}
 
function onDeviceReady() {
  navigator.splashscreen.hide();

}