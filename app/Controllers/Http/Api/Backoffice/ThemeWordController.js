'use strict'

class ThemeWordController {
  async index ({ request, response }) {
    const Theme = use('App/Models/Theme')
    try {
      const theme = await Theme.find(request.params.id)
      const words = await theme.words().fetch()
      
      const data = {theme, words}
      response.status(200).send(data)
    } catch (error) {
      console.error(error);
      return response.status(404).send('Tema não encontrado')
    }
  }

  async create ({request, response}){    
    const Theme = use('App/Models/Theme')       
    const Word = use('App/Models/Word')       

    try {
      var theme = await Theme.find(request.params.id)
    } catch (error) {
      console.error('Theme was not found')
      return response.status(404).send('Tema não encontrado')
    }

    try {
      const word = await Word.findOrCreate({text: request.post().word})
      await theme.words().attach([word.id])
      theme.words = theme.words().fetch()
      
      const data = {theme, word}
      response.status(200).send(data)
    } catch (error) {
      console.error(error)
      return response.status(500).send('Não foi possível adicionar a palavra ao tema.')
    }
  }

  async destroy ({request, response}) {
    const Theme = use('App/Models/Theme')
    const Word = use('App/Models/Word')
    
    try {   
      const theme = await Theme.findOrFail(request.params.theme)
      const word = await Word.findOrFail(request.params.word)

      if (await theme.words().detach([word.id])) {
        this.deleteWorkMiddleware(word)
        response.status(200).send(word)
      } else {
        return response.status(500).send('Não foi possível remover a palavra do tema.')
      }
    } catch (error) {
      console.error(error)
    }          
  }

  async deleteWorkMiddleware (word){
    const count = await word.themes().count()
    const total = count[0]['count(*)']
    if (!total) {
      await word.delete()
    }
  }
}

module.exports = ThemeWordController