
var friends = require("../data/friends.js")


console.log(friends)


module.exports = function(app){



	app.get('/api/friends', function(req, res){
		res.json(friends);

	})




	app.post('/api/friends', function(req, res){
		var newFriend = req.body;

		console.log(newFriend)


		for (var i = newFriend.scores.length - 1; i >= 0; i--) {


			console.log(newFriend.scores[i])
		}

	});


}