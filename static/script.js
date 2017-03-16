var timeoutID;
var timeout = 1000;

function setup() {
	document.getElementById("submit").addEventListener("click", makePost, true);

	timeoutID = window.setTimeout(poller, timeout);
}