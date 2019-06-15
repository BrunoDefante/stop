'use strict'

const Room = use('App/Models/Room')

class RoomController {
    async create ({ request, response }){
        const data = request.only(["user_id", "name", "password", "type"])
        const room = await Room.create(data)

        if(room){
            return room
        }else{
           response.status(500).send('internalServerError')
        }
    }
}

module.exports = RoomController
