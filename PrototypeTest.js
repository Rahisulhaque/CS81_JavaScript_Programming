var rabbit = {};
rabbit.speak =  function(line)
	{
		console.log(this.rabbit+ " says "+ line + " ");

	}

	rabbit.speak("I am alive!");