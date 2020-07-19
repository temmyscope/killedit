const bodyParser = require('body-parser');
const mongodb = require('mongoose');
const app = require('express')();
var cors = require('cors');

app.use(bodyParser.json()); //for incoming json data
app.use(bodyParser.urlencoded({ extended: true })); //for incoming form post data
app.use(cors()); // for all routes

app.get('/', (req, res) => res.json() );

app.get('/polls', (req, res) => {
	res.json(); //res.send(JSON.Stringify())
});

app.get('/thread/:id', (req, res, next) => {
	if ( req.params.id ){ //check if id sent is numeric
		res.json();
	}else{
		next( new Error('Not valid name') ); 
	}
});

app.post('/comment/:id', (req, res) =>  res.json() );

app.post('/rate', (req, res) => res.json() ); //for rating puns

app.post('/vote', (req, res) =>  res.json() ); //for voting the better puns in 

app.post('/create', (req, res) => { res.send('pong') }); //creating threads: with artist, songtitle and the punchline

app.post('/start/poll', (req, res) => { res.send('pong') });

app.post('/register', (req, res) => { res.send('pong') });

app.post('/login', (req, res) => { res.send('pong') });

app.get('/logout', (req, res) => { res.send('pong') });

app.post('/forgot', (req, res) => { res.send('pong') });

app.listen(8080, 'localhost');
