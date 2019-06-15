'use strict'

class WordController {
    async index ({ view }) {
        const Word = use('App/Models/Word')

        const words = await Word.all()
        return view.render('backoffice.words.index', { current: 'words', words: words.rows })
    }
}

module.exports = WordController
