function capturePhoto() {
	navigator.device.capture.captureImage();
}
 
function init() {
	$.mobile.allowCrossDomainPages = true;
	document.addEventListener("deviceready", onDeviceReady, false);
}
 
function onDeviceReady() {
	$.mobile.allowCrossDomainPages = true;
	url = 'http://www.priorplace.com/services/event_actions.php';
	$.ajax({
         type: 'POST',
         url: url,
         contentType: "application/json",
         dataType: 'json',
         data: {action: 'get_older_posts', event_id: 53, start: 5 }, 
         success: function(res) {  
           alert("asdasd");
           console.dir(res.status);
         },  
         error: function(e) {  
           console.log(e.message);  
         },  
         complete: function(data) {  
           console.log(e.message);  
         }  
       });  
}