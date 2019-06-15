'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WordsSchema extends Schema {
  up () {
    this.create('words', (table) => {
      table.increments()
      table.string('text', 256).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('words')
  }
}

module.exports = WordsSchema
