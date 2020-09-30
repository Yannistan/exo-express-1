import express from 'express'
import axios from 'axios'
// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercises express partie 1')
})

app.get('/aboutme/name/:nom/age/:myage', (req, res) => {
    res.send(
        `Hello, my name is ${req.params.nom} and I am  ${req.params.myage} years old`
    )
})

app.get('/aboutyou', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    let ua = req.headers['user-agent']
    res.send(`Your ip addess is: ${ip} and your browser's version is ${ua}`)
})

app.get('/vote/age/:myage', (req, res) => {
    let userage = req.params.myage
    if (userage >= 18) res.send('Vous pouvez voter')
    else res.send('Trop jeune pour voter')
})

app.get('/palindromes/word/:myword', (req, res) => {
    let mot = req.params.myword
    if (mot.split('').reverse().join('') === mot)
        res.send(`The word ${mot} is a palindrome`)
    else res.send(`The word ${mot} is not a palindrome`)
})

app.get('/oddtest/number/:mynumber', (req, res) => {
    let num = req.params.mynumber
    if (num % 2 == 0) res.send(`pair`)
    else res.send('impair')
})

let data = await Promise.all([
    axios.get('http://localhost:7777/aboutyou').then(() => 'aboutyou'),
    axios.get('http://localhost:7777/vote/age/:myage').then(() => 'vote'),
    axios
        .get('http://localhost:7777/aboutme/name/:nom/age/:myage')
        .then(() => 'aboutme'),
    axios
        .get('http://localhost:7777/palindromes/word/:myword')
        .then(() => 'palindromes'),
]).catch((err) => {
    console.error(err)
})
console.log(data)

// démarrage de notre serveur sur le port
app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log('Exercises express partie 1')
})
