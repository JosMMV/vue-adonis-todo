'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('projects', 'ProjectController.index').middleware('auth'); //the user must be authenticated for get its projects
  Route.post('projects', 'ProjectController.create').middleware('auth'); //the user must be authenticated for create project
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth'); //the user must be authenticated for delete its projects
}).prefix('api');