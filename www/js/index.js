function capturePhoto() {
	navigator.device.capture.captureImage();
}
 
function init() {
	$.mobile.allowCrossDomainPages = true;
	document.addEventListener("deviceready", onDeviceReady, false);
}
 
 
function updateApp() {
	url = 'http://www.priorplace.com/services/event_actions.php';
	$.ajax({
         type: 'POST',
         url: url,
         contentType: "application/json",
         dataType: 'json',
         data: {action: 'get_older_posts', event_id: 53, start: 5 }, 
         success: function(res) {  
           alert(res.status);
           //console.dir(res.status);
         },  
         error: function(e) {  
           alert("jodido error");
         },  
         complete: function(data) {  
           //console.log(e.message);  
         }  
       });
}
 
function onDeviceReady() {
	$.mobile.allowCrossDomainPages = true;
	setInterval(updateApp(), 15000);
}