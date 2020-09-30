import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777

/*
app.get('/aboutme/name/:nom/age/:myage', (req, res) => {

    res.send(`Hello, my name is ${req.params.nom} and I am  ${req.params.myage} years old`)
})
*/

app.get('/vote/age/:myage', (req, res) => {
    let userage = req.params.myage
    if (userage >= 18)
        res.send('Vous pouvez voter')
    else
        res.send('Trop jeune pour voter')

})

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log('Exercises express partie 1')
})