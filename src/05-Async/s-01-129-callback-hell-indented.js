setTimeout(function () {
	console.log("one");
	setTimeout(function () {
		console.log("two");
		setTimeout(function () {
			console.log("three");
		}, 1000);
	}, 1000);
},1000);
