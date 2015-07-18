var Promise = require('bluebird');

console.log('starting test');

function asyncFnc(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve();
		}, 10);
	});
}

console.time('test');
Promise.all([asyncFnc(), asyncFnc()])
	.then(function(){
		console.timeEnd('test');
	});
