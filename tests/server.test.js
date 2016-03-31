const tape = require('tape');
const server = require('../lib/server.js');

tape('check that tests work!', (t) => {
	t.equal(1, 1, 'success!');
	t.end();
});

tape('check that server loads css', (t) => {
	server.inject({ method: 'GET', url: '/style.css' }, (response) => {
		t.ok(response.payload.indexOf('}') > -1, 'css loads properly');
		t.end();
	});
});

tape('check that server loads client side js', (t) => {
	server.inject({ method: 'GET', url: '/script.js' }, (response) => {
		t.ok(response.payload.indexOf('function') > -1, 'client side js loads properly');
		t.end();
	});
});

tape('teardown', (t) => {
	server.stop();
	t.end();
});