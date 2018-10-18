function httpGet(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url);

		xhr.onload = function () {
			resolve(xhr.response);
		}
		xhr.onerror = function () {
			reject("error");
		}
		xhr.responseType = "json";
		xhr.send();
	});
}


function renderMarkupTomorrow(pogoda) {
	// console.log(pogoda);
	let arrTomorrow = [];
	for (var i = 0; i < pogoda.length; i += 8) {
		arrTomorrow.push(pogoda[i]);
	}
	// console.log("arr", arrTomorrow);
	return arrTomorrow;
}

export {
	httpGet, renderMarkupTomorrow
}