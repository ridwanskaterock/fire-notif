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