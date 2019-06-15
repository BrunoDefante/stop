'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Theme extends Model {
  words () {
    return this
      .belongsToMany('App/Models/Word')
  }
}

module.exports = Theme
