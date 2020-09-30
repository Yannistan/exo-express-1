import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777;

app.get('/oddtest/number/:mynumber', (req, res) => {
    let num = req.params.mynumber;
    if (num % 2 == 0)
        res.send(`pair`)
    else res.send('impair')
})

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log("Exercises express partie 1")
})