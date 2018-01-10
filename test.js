var randomWordGenerator = function (number) {
	  var word = '';

	  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	  for (var i = 0; i < number; i++) {
	    word += alphabet[Math.floor(Math.random() * alphabet.length)];
	  }

	  return word;
	};

	console.log(randomWordGenerator(5));
