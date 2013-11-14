$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
});
 
 function capturePhoto()
 {
	navigator.device.capture.captureImage();
 }
 
function onLoad(){
  document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady(){
	navigator.notification.alert("PhoneGap is working!!");
}