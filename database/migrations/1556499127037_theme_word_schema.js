'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThemeWordSchema extends Schema {
  up () {
    this.create('theme_word', (table) => {
      table
        .integer('theme_id')
        .unsigned()
      table
        .integer('word_id')
        .unsigned()
      table
        .foreign('theme_id')
        .references('themes.id')
        .onDelete('cascade')
      table
        .foreign('word_id')
        .references('words.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('theme_word')
  }
}

module.exports = ThemeWordSchema
