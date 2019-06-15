'use strict'

class ThemeController {
    async index ({ view }) {
        const Theme = use('App/Models/Theme')

        const themes = await Theme.all()        
        return view.render('backoffice.themes.index', { current: 'themes', themes: themes.rows })
    }

    async create ({request, response}){
        const Theme = use('App/Models/Theme')        
        const { name } = request.post()
        
        const theme = await Theme.create({ name })
        if (theme) {
            response.redirect('/backoffice/themes')
        } else {
            response.status(500).send('internalServerError')
        }
    }

    async destroy ({request, response}) {
        const Theme = use('App/Models/Theme')
        const { id } = request.params
        const theme = await Theme.find(id)
        if (theme) {
            await theme.delete()
            response.redirect('/backoffice/themes')
        } else {
            response.status(404).send('Theme was not found')
        }

    }

    async update ({request, response}) {
        const Theme = use('App/Models/Theme')
        const { name } = request.all()
        
        const theme = await Theme.find(request.params.id)
        if (theme) {
            theme.name = name
            await theme.save()
            response.redirect('/backoffice/themes')
        } else {
            response.status(404).send('Theme was not found')
        }
    }
}

module.exports = ThemeController
