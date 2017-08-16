
var friends = require("../data/friends.js")


console.log(friends)


module.exports = function(app){



	app.get('/api/friends', function(req, res){
		res.json(friends);

	})







	app.post('/api/friends', function(req, res){
		var newFriend = req.body;

		console.log(newFriend)




var sumArray = []

for (var i = 0; i < friends.length; i++) {



var sum = 0;


	for (var j = 0; j < 10; j++) {


  sum += (Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j])));



	}

sumArray.push(sum)
console.log(sumArray)
}

var test = parseInt((Math.min.apply(null, sumArray)));

var test2 = sumArray.indexOf(test)


console.log(friends[test2])

res.json(friends[test2]);







friends.push(newFriend)
	});


}
