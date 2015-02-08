var express = require('express'),
	port = process.env.PORT || 5000,
	app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port);
