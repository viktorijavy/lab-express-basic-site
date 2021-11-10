const express = require('express')
const app = express()
const port = 3000 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	
	res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/movies', (req, res, next) => {
	res.sendFile(__dirname + '/views/movies.html')
});

app.get('/more-info', (req, res, next) => {
	res.sendFile(__dirname + '/views/more-info.html')
});

app.listen(port, () => {
	console.log(`Listening on port ${port} 🦄 🌈`)
})
