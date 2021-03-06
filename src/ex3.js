import express from 'express'

let UAParser = require('ua-parser-js')
// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777

app.get('/aboutyou', (req, res) => {
    let parser = new UAParser()
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    let ua = req.headers['user-agent']
    let browserName = parser.setUA(ua).getBrowser().name
    let fullBrowserVersion = parser.setUA(ua).getBrowser().version
    let browserVersion = fullBrowserVersion.split('.', 1).toString()
    res.send(
        `Your ip addess is: ${ip}, your browser's name is ${browserName}  your browser's version is ${browserVersion}`
    )
})

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log('Exercises express partie 1')
})
