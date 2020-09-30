import express from 'express'

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777;

app.get('/palindromes/word/:myword', (req, res) => {
    let mot = req.params.myword;
    if (mot.split('').reverse().join('') === mot)
        res.send(`The word ${mot} is a palindrome`)
    else res.send(`The word ${mot} is not a palindrome`)
})

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log("Exercises express partie 1")
})