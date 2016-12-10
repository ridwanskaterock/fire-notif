
Fire-Notif
============


Firebase simple push notification to client side JavaScript 

Requirements
------------

	- PHP 5.5 or Higher


Author
------------
* Muhamad Ridwan
* ridwanskaterocks@gmail.com


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

	notify.subscribe(function(data) {
	    audio.play();
	    toastr.info(data.message, 'Notification');
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

		$('#btnSendMessage').click(function() {
		    var message = $('#message').val();

		    notify.pushNotify({
				message: message
		    });
		});
	</script>
```

send multiple notification
```html	
	<script type="text/javascript">
		var notify = new FireNotif();
		var audio = new Audio('notif.mp3');

		notify.setKey('q1rcKg9zxPUySGntLfnIYNMFuft2') // replace with your id
		    .setUrl('https://fire-notif.firebaseio.com/'); // Replace with your firebase app URL

		notify.setPath('notification-frontend/user1')
		    .pushNotify({
				message: 'dear nice to meet you here',
				title: 'Hello,'
		    });

		notify.setPath('notification-backend/user2')
		    .pushNotify({
				message: 'what\'s up with you',
				title: 'Hello,'
		    });

		//listen notification

		notify.setPath('notification-backend/user2')
		    .subscribe(function(data) {
				audio.play();
				toastr.info(data.message, data.title);
			});

		notify.setPath('notification-frontend/user1')
		    .subscribe(function(data) {
				audio.play();
				toastr.info(data.message, data.title);
		    });
		
	</script>
```
	