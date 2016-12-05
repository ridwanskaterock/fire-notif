# fire-notif

Fire-Notif
============


Firebase simple push notification to client side JavaScript 

Requirements
------------

	- PHP 5.5 or Higher


Instalation
-----------
* Include firebase 
```html
<script src="https://cdn.firebase.com/js/client/2.2.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
```
	
* Include jquery 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

* Include toastr JS 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
```

* Include Fire Notif JS 
```html	
<script src="../js/fireNotif.js"></script>
```


* Include toastr CSS 
```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"> 
```

How to use?
-----------
In subscribe.html file you just make script some it

```js	
	var notify = new FireNotif();
    var audio = new Audio('notif.mp3');

    notify.setKey('q1rcKg9zxPUySGntLfnIYNMFuft2')
        .setUrl('https://fire-notif.firebaseio.com/') // Replace to your firebase app URL
        .setPath('notify');

    notify.subscribe(function(data){
        audio.play();
        toastr.info(data.message, 'Notification', {timeOut: 15000})
    });
```

If you send notification just make send.html

```html	

	<textarea id="message"></textarea>
	<button id="btnSendMessage">Send</button>

	<script type="text/javascript">
		var notify = new FireNotif();

		notify.setKey('q1rcKg9zxPUySGntLfnIYNMFuft2')
			.setUrl('https://fire-notif.firebaseio.com/') // Replace to your firebase app URL
			.setPath('notify');
		
		$('#btnSendMessage').click(function(){
			var message = $('#message').val();

	    	notify.pushNotify({
	    		message : message
	    	});
		});
	</script>
```

	
Author
-------

[@riidwansktrcks]:http://twitter.com/riidwansktrcks
