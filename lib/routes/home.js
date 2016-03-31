module.exports = {
	method: 'GET',
	path: '/',
	config: {
		handler: (request, reply) => {
			reply.view('home');
		}
	}
};
