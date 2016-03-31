# hapi-handlebars-boilerplate
Easily customisable template for a Node server using hapi with handlebars.js templating.

## Basic Setup Instructions
1. Clone the repo
2. Run `npm i` to install dependencies and dev dependencies.
3. Run `npm start` to start the server
4. Visit `localhost:4000` on your browser to view the website - woo!

## Further Instructions
* The server already has a home route and a resource handler. The default HTML for all pages is specified in `views/layout/default.html` and includes the navbar and footer which are in `views/partials`. Minimal CSS, an empty script.js file, and a folder for assets are in `public`. A test file with three passing tests is in `tests`
* To add new routes to the server: 
  1. Make a new js file in the `routes` folder, e.g. `blog.js`. This should be in the same form as the `home.js` and `resources.js` files, i.e. an exported object including a method, path, and handler function: 
  ```javascript
  module.exports = {
    method: 'GET',
    path: '/blog',
    handler: (request, reply) => {
      reply.view('blog');
    }
  };
  ```
  2. Add the new route to ther server by adding its file path to the list of routes at line 26, e.g.
  ```javascript
  server.route([
    './routes/home.js',
    './routes/resources.js',
    './routes/blog.js'
  ].map((route) => require(route)));
  ```
* If your route is a new view, you can add the HTML for that page in the `views` folder, e.g. for our blog page, we would make a file called `blog.html`.
* Hapi has lots of helpful plugins for other things you might want, like authentication and validation. Check out [their list here](http://hapijs.com/plugins).
* Please make a PR if you think something could be clearer, cleaner, or better. 