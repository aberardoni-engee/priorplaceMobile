function init() {
	$.mobile.allowCrossDomainPages = true;
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	$.mobile.allowCrossDomainPages = true;
	//setInterval(updateApp, 15000);
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
         },  
         error: function(e) {  
           alert("jodido error");
         }
       });
}

function capturePhoto() {
	navigator.camera.getPicture(
		uploadPhoto,
		function(message) { alert('Fallo la captura'); },
		{
			quality         : 50,
			destinationType : navigator.camera.DestinationType.FILE_URI,
			sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
		}
	);
}

function uploadPhoto(imageURI) {
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	
	options.mimeType="image/jpeg";
	
	var params = {};
	params.value1 = "test";
	params.value2 = "param";

	options.params = params;
	
	var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://engeedev.com/pruebas/upload.php"), win, fail, options);
}

	function win(r) {
		alert("Code = " + r.responseCode+" | "+" Response = " + r.response+" Sent = " + r.bytesSent);
	}

	function fail(error) {
		alert("An error has occurred: Code = " + error.code+" | "+" upload error source " + error.source+" upload error target " + error.target);
	}