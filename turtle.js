var graph = require('fbgraph');
const fs = require('fs');
const accessToken = *****

function sendTurtle(){
	graph.setAccessToken(accessToken);
    var files = fs.readdirSync('./Turtle/');
    var index = Math.floor(Math.random() * files.length)
    var url = "http://www.offbyoneerror.ca/FileHosting/Turtle/" + files[index];
    console.log(url);

    var wallPost = {
	message: '\uD83D\uDC22',
        url: url
    };

    graph.post(******* + "/photos", wallPost, function(err, res) {
        console.log(res); // { id: xxxxx}
        fs.unlinkSync("./Turtle/" + files[index]);
    });

    setTimeout(function() {}, 3600000 * 6);
}

sendTurtle();




