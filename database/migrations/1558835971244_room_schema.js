'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments() //idSala
      table.integer('user_id') //fk_user
      table.string('name', 35)
      table.string('password', 264)
      table.string('type')

      table.timestamps()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
