import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777;

app.get('/aboutyou', (req, res) => {

    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ua = req.headers['user-agent']
    res.send(`Your ip addess is: ${ip} and your browser's version is ${ua}`)

})

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log("Exercises express partie 1")
})