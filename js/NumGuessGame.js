// <script type="text/javascript">
		console.log("hello");

		// Our program should decide/fix a number to enter input

		var userTries = 0;

		 var programNumber = Math.floor(Math.random() * 100)+1;
		 console.log(programNumber);

		// when submit button is clicked, we need to fetche the user input value.
		// click event
		// Querying using selector

		var submitButtonElement = document.getElementById("submitButton");
		console.log(submitButtonElement);

		
		submitButtonElement.addEventListener("click", function(){ 

			userTries = userTries + 1;
			console.log("User Tries:",userTries);

			if(userTries>9){
				alert("Your Tries cannot be more than 10");
			}
			
			console.log("Submit button has been clicked");

			//we need to fetch the user input value.

			var userInputFormat = document.getElementById("UserInputNumber");
			console.log(userInputFormat)



			
			// check whether the user input is equals to our program's number.

			var userInputFormatValue = userInputFormat.value;

			//If user input is empty ALERT enter a number

			if(userInputFormatValue==''){
				alert("Input can not be empty.");
				retrun;
			}

			if(userInputFormatValue < 1){
				alert("Number should be Greater than 1");
				retrun;
			}

			if(userInputFormatValue > 100){
				alert("Number should be Less than 100");
				retrun;
			}

			//update the input values here

			var userInputListElement = document.getElementById("userInputForm");
			console.log(userInputListElement);

			var newListElement = document.createElement("LI");                 // Create a <li> node
			var textnode = document.createTextNode("Try "+userTries+": "+userInputFormatValue);         // Create a text node
			newListElement.classList.add("list-group-item");
			newListElement.appendChild(textnode);
			userInputList.appendChild(newListElement);

			var resultElement = document.getElementById("result");

			// if the number is same then print your guess is correct

			if (userInputFormatValue == programNumber){
				console.log("You have guessed correct");

				var successmessageElement = document.getElementById("SuccessMessageBlock");
				console.log(successmessageElement);

				successmessageElement.style.display = 'block';

				resultElement.innerText='';

				var inputFormElements = document.getElementById("submitButton");
				inputFormElements.style.display='none';

			}

			// if the number is high, give hint like number is high

			if (userInputFormatValue > programNumber){
				console.log("Your number is high..");
				resultElement.innerText = "Wrong Guess, your number is High";


			}


			// if the number is low, give hint like number is low

			if (userInputFormatValue < programNumber){
				console.log("Your number is low..");
				resultElement.innerText = "Wrong Guess, your number is low";
			}
		});

	// </script>