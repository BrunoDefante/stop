'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Word extends Model {
  themes () {
    return this
      .belongsToMany('App/Models/Theme')
  }
}

module.exports = Word
