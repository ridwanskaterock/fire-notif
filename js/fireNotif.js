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
	if (typeof url != undefined) {
		this.firebaseUrl = url;
	}

	if (typeof path != undefined) {
		this.setPath(path);
	}
}

/**
* Set path storage
*
* @param String	path
*/
Firenotif.prototype.setPath = function(path) {
	this.pathName = path;

	return this;
}

/**
* Get path storage
*
*/
Firenotif.prototype.getPath = function() {
	return this.pathName;
}

/**
* Initialize firebase db reff
*
*/
Firenotif.prototype.dbReff = function() {
	return new Firebase(this.firebaseUrl);
}

/**
* Get notif child by path
*
*/
Firenotif.prototype.notifRef = function() {
	return notifRef = this.dbReff().child(this.pathName);
}

/**
* Push notification to path
*
* @param Array data
*/
Firenotif.prototype.pushNotify = function(data) {
    if (typeof data != undefined) {
      this.chatsRef().push(data);
    }
}

/**
* Listener notification on child added
*
* @param Closure callback
*/
Firenotif.prototype.subscribe = function(callback) {
  this.chatsRef().once('value', function(messages) {
    this.newItem = true;
  });

  this.chatsRef().limitToLast(1).on('child_added', function(snap) {
      return callback(snap.val());
  });
}