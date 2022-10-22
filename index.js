const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Chinnapat Khemthong')
})

app.get('/getprofile', (req, res)=> {
    let data = {
        name: 'Chinnapat Khemthong',
        age: 19,
        apocalypse: 'A person starts to live when he can live outside himself.',
        detail: 'Hello, My Name Is Chinnapat Khemthong. My Nickname Is Bom. Now 19 Years Old. Studying Multimedia & Entertainment Engineering At Bangkok University. I Lived With My Family In Nonthaburi. My Family Has 4 People, Father Mother Sister And Me. My Hobby Is Listening To Music And Play Game With My Friend. My Favorite Sport Is Football.',
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Minecraft ra berd barn friend',
        project_description: 'Fun laughter comedy amusement jocularity',
        project_link: 'https://www.youtube.com/embed/aX9RNjax4aE',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address : 'Nonthaburi',
        email : 'chinnapat.khem@bumail.net',
        phone_number : '0875405555',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})