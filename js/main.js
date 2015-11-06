//jQuery functions wll toggle notes section and "clear" button for each lesson-node
$(document).ready(function() {
	$('.show-hide').click(function() {
    	$(this).closest('.lesson-node').find('.lesson-notes').slideToggle();
    });
    $('.clear').click(function() {
        var $this = $(this).closest('.lesson-node');
        $this.find('.output').empty();
        $this.find('.lesson-notes').hide();
       	$this.find('input').val("");
       	$this.find('select').val(0);
    });
});

//Runs a for loop with pre-specified initial and increment values
function forLoop(init, increment, inputId, outputId){
	var quantity = $(inputId).val();
	var formatText = removePunc(quantity);
	
	$(outputId).empty();
	if(!testInput(formatText, outputId, 5000)) {
          return;
    }
	for(i=init; i<=formatText; i=i+increment) {
		$(outputId).append("  "+i);
	}
	$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

function printSum(init, increment, inputId, outputId) {
	var quantity = $(inputId).val();
	var formatText = removePunc(quantity);
	var sum = 0;

	$(outputId).empty();
	if(!testInput(formatText, outputId, 5000000)) {
    	return;
    }
		for(i=init; i<=formatText; i=i+increment) {
			sum = sum + i;
		}
		$(outputId).append("<h5>The sum of all the ODD numbers from " +init+ " to " +formatText+ " is <span class='highlight-gold'>" +sum+"</span></h5>");
		$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then determines the max value
function findMaxMin(outputId) {
  $(outputId).empty();
  if (!getArray(outputId, '#arrayLength-1', '#arrayRange-1')) {
  	return;
  }
  var max = x[0];
  var min = x[0];
 
for(i=1;i<x.length;i++) {
  if (x[i] > max) 
  {
    max = x[i]; 
  }
  if (x[i]<min) {
  	min = x[i];
  }
}
$(outputId).append("<h5>The largest value (max) in x is <span class='highlight-gold'>" +max+"</span></h5>");
$(outputId).append("<h5>The smallest value (min) in x is <span class='highlight-gold'>" +min+"</span></h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then determines the average of that array
function findAverage(outputId) {
	$(outputId).empty();
	if (!getPosArray(outputId, '#arrayLength-2', '#arrayRange-2')) {
  	return;
  }
	var sum = 0;
	for (i=0;i<x.length;i++) {
		sum = sum + x[i];
	}
	var average = sum / x.length;
$(outputId).append("<h5>The sum of the values in array x is <span class='highlight-clear'>" +sum+"</span></h5>");
$(outputId).append("<h5>So, the average of x is <span class='highlight-gold'>" +average+"</span></h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then squares those values
function squareValues(outputId) {
	$(outputId).empty();
	if (!getArray(outputId, '#arrayLength-3', '#arrayRange-3')) {
  		return;
  	}
  	for (i=0; i < x.length; i++) {
    x[i] = " "+x[i]*x[i];
	}
$(outputId).append("<h5>When the values in x are squared, x = ["+x+" ]</h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then squares those values
function removeNegs(outputId, arrayLength, arrayRange, replaceValue) {
	$(outputId).empty();
	if (!getArray(outputId, arrayLength, arrayRange)) {
  		return;
  	}
  	var count = 0;
  	for (i=0; i < x.length; i++) {
    	if (x[i] < 0) {
  			x[i] = replaceValue; 
  			count++;
  		}
  		x[i] = " "+x[i];
  	}
	if (count == 1) {
		var outputText = "number";
	} else {
		var outputText = "numbers";
	}
$(outputId).append("<h5>When negatives are removed, x = ["+x+" ]</h5>");
$(outputId).append("<h5>We replaced <span class='highlight-gold'>" +count+"</span> negative "+outputText+" in this array. Hooray!</h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then squares those values
function greaterThanY(outputId, inputId, arrayLength, arrayRange) {
	var quantity = $(inputId).val();
	var formatText = removePunc(quantity);

	$(outputId).empty();
	if(!testInput(formatText, outputId, 5000000)) {
    	return;
    }
	if (!getArray(outputId, '#arrayLength-6', '#arrayRange-6')) {
  		return;
  	}

  	var y = formatText;
  	var count = 0;

  	for (i=0; i < x.length; i++) {
   		if (x[i] > y) {
   			count++;
   		}
	}
$(outputId).append("<h5>Y = <span class='highlight-clear'>" +y+"</span>.</h5>");
$(outputId).append("<h5>So, <span class='highlight-gold'>" +count+"</span> values in x are greater than Y.</h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Gets a random array of values, then squares those values
function bubbleSort(outputId) {
	$(outputId).empty();
	if (!getArray(outputId, '#arrayLength-7', '#arrayRange-7')) {
  		return;
  	}
	for (i=0; i < x.length-1; i++) {
  		for (j=0; j < x.length-1; j++) {
      		if (x[j] > x[j+1]) {
          		temp = x[j];
          		x[j] = x[j+1];
          		x[j+1] = temp;
        	}
    	}
	}
$(outputId).append("<h5>When the values in x are sorted, x = ["+x+" ]</h5>");
$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Tests user input for common input errors
function testInput(input, outputId, maxValue) {
	if (input !== "" && input <= maxValue && input > 0) {
      return true;
  	} 
  	else if (input == "") {
		errorMessage(outputId, "Oops! You forgot to type a number!")
	}
	else if (input <= 0) {
		errorMessage(outputId, "Oh! Did I mention zeros and negative numbers don't work here?");
	}
	else if (input >= maxValue ){
		errorMessage(outputId, "Haha! I would love to use " +input+" but it would probably crash your browser. Why not choose a smaller number?");
	}
	else if (isNaN(input)) {
		errorMessage(outputId, "I hate to pull the 'Does Not Compute' card, but I'm not sure "+input+"' is a real number...");
	}
  	return false;
}

//Produces a random array of numbers; ensures drop-down fields aren't left blank
function getArray(outputId, arrayLength, arrayRange) {
var length = $(arrayLength).val();
var range = $(arrayRange).val();
x = [];
if (length != 0 && range != 0) {
  	for(i=0;i<length;i++) {
	  	x[i] = Math.floor(((Math.random() * range * 2) - range) + 1); 
	  	x.push(i);
	}
  	x.pop();
  	$(outputId).append("<p>Your randomly generated array is: x = [ "+x+" ]</p>");
  	return true;
	} else {
	errorMessage(outputId, "Oops! Did you remember to set an array length <i>and</i> a range for your array?");
	return false;
	}
}

//Produces a random array of numbers; ensures drop-down fields aren't left blank
function getPosArray(outputId, length, range) {
var length = $(length).val();
var range = $(range).val();
x = [];
if (length != 0 && range != 0) {
  	for(i=0;i<length;i++) {
	  	x[i] = Math.floor((Math.random() * range) + 1); 
	  	x.push(i);
	}
  	x.pop();
  	$(outputId).append("<p>Your randomly generated array is: x = [ "+x+" ]</p>");
  	return true;
	} else {
	errorMessage(outputId, "Oops! Did you remember to set an array length <i>and</i> a range for your array?");
	return false;
	}
}

//Prints error message to nearest output area
function errorMessage(outputId, message) {
	$(outputId).html("<p class='error-msg'>"+message+"</p>");
	$('input').val("");
}

//Removes commas from user input
function removePunc(userInput) {
	userInput = userInput.replace(/,/g,"");
	return userInput;
}