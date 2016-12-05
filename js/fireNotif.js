/**
* Firebase mini push notification
*
* @author 		Muhamad Ridwan
* @since 		2016
* @license 		MIT
*/

/**
* Class FireNotif
*
* @param String	url
* @param String	path
*/
function FireNotif(url, path) {
	this.firebaseUrl = '';
	this.pathName = '';
	
	if (typeof url != 'undefined') {
		this.firebaseUrl = url;
	}

	if (typeof path != 'undefined') {
		this.setPath(path);
	}

	this.newItem = {};
	this.fireKey = null;
}

/**
* Set path storage
*
* @param String	path
*/
FireNotif.prototype.setPath = function(path) {
	this.pathName = path;

	return this;
}

/**
* Get path storage
*
*/
FireNotif.prototype.getPath = function() {
	return this.getKey() + '/' + this.pathName;
}

/**
* Set key storage
*
* @param String	key
*/
FireNotif.prototype.setKey = function(key) {
	this.fireKey = key;

	return this;
}

/**
* Get key storage
*
*/
FireNotif.prototype.getKey = function() {
	return this.fireKey;
}

/**
* Set url firebase
*
* @param String	path
*/
FireNotif.prototype.setUrl = function(url) {
	this.firebaseUrl = url;

	return this;
}

/**
* Get path storage
*
*/
FireNotif.prototype.getUrl = function() {
	return this.firebaseUrl;
}

/**
* Initialize firebase db reff
*
*/
FireNotif.prototype.dbReff = function() {
	return new Firebase(this.firebaseUrl);
}

/**
* Get notif child by path
*
*/
FireNotif.prototype.notifRef = function() {
	return this.dbReff().child(this.getPath());
}

/**
* Push notification to path
*
* @param Array data
*/
FireNotif.prototype.pushNotify = function(data) {
	if (this.getKey() != null) {
		if (typeof data != undefined) {
			this.notifRef().push(data);
		}
	} else {
		function FireException(message) {
			this.message = message;
			this.name = 'FireException';
		}

		console.log(new FireException('invalid key'));

		return new FireException('invalid key');
	}

	return this;
}

/**
* Check is new item and ready to callback
*
* @param Array data
*/
FireNotif.prototype.readyToCallback = function(path) {
	if (typeof this.newItem[path] != undefined) {
		if (this.newItem[path]) {
			return true;
		}
	}

	return false;
}

/**
* Listener notification on child added
*
* @param Closure callback
*/
FireNotif.prototype.subscribe = function(callback) {
	var fire = this;

	this.notifRef().once('value', function() {
		fire.newItem[fire.getPath()] = true;
	});

	this.notifRef().limitToLast(1).on('child_added', function(snap) {
		if (fire.readyToCallback(fire.getPath())) {
			return callback(snap.val());
		}
	});
}