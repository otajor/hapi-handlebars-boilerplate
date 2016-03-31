"use strict";

// modules
const Hapi = require('hapi');
const http = require('https');
const server = new Hapi.Server();
const Inert = require('inert');
const Vision = require('vision');
const port = process.env.PORT || 4000;

// Hapi plugins
const plugins = [
	Inert,
	Vision
];

server.connection({
	port: port
});

server.register(plugins, (err) => {
	if (err) console.log(err);

	server.views(require('./viewsettings.js'));
	
	server.route([
		'./routes/home.js',
		'./routes/resources.js'
	].map((route) => require(route)));
});

server.start(err => {
	if (err) throw err;
	console.log('Server is running at : ' + server.info.uri);
});

module.exports = server;
