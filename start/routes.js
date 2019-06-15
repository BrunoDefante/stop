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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// API ROUTES
Route.group(() =>{
  Route.post("/rooms", "RoomController.create")
}).prefix('/api').namespace('Api')

// API/BACKOFFICE ROUTES
Route.group(() => {
  Route.get('/themes/:id/words', 'ThemeWordController.index')
  Route.post('/themes/:id/words', 'ThemeWordController.create')
  Route.get('/themes/:id/words/:id', 'ThemeWordController.edit')
  Route.put('/themes/:id/words/:id', 'ThemeWordController.update')
  Route.delete('/themes/:theme/words/:word', 'ThemeWordController.destroy')
  Route.post('/users', 'UserController.create')
  Route.post('/sessions', 'SessionController.create')

}).prefix('/api/backoffice').namespace('Api/Backoffice')

// BACKOFFICE ROUTES
Route.group(() => {
  Route.on('/').render('backoffice.index')

  // Binds '/backoffice/themes' to 'App/Controllers/Http/Backoffice/ThemeController'
  Route.get('themes', 'ThemeController.index').as('themes')
  Route.post('themes', 'ThemeController.create')
  Route.put('themes/:id', 'ThemeController.update')
  Route.delete('themes/:id', 'ThemeController.destroy')

  // Binds '/words' to 'App/Controllers/Http/Backoffice/WordController'
  Route.get('words', 'WordController.index').as('words')
  Route.post('words', 'WordController.create')
  Route.get('words/:id', 'WordController.edit')
  Route.put('words/:id', 'WordController.update')
  Route.delete('words/:id', 'WordController.destroy')

}).prefix('/backoffice').namespace('Backoffice')
