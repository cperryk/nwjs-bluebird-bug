var Promise = require('bluebird');

function asyncFnc(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve();
		}, 1);
	});
}

console.time('test');
Promise.all([asyncFnc(), asyncFnc()])
	.then(function(){
		console.timeEnd('test');
	});
