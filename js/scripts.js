var theNumber = null;
var numGuess = 0;
var numberSelected = false;
var previousGuess = null;
function numberInitalized(){
    if (!numberSelected){
        init();
    }
    else{
        numGuess++;
        compareUserGuess(theNumber, numGuess);
    }
}
 
 
function init(){
    theNumber = Math.floor((Math.random()*100)+1);
    numGuess = 1;
    numberSelected = true;
    compareUserGuess(theNumber, numGuess);
}
 
function isNormalInteger(str) {
    return (/^[1-9]\d*$/).test(str);
}

// Checks to see if the guess is within the parameters given
function validGuess(guess) {
    return isNormalInteger(guess) && +guess <= 100 && +guess >= 1;
}    

function compareUserGuess(theNumber, numGuess)
{
 
    
    var playerGuess = document.getElementById('userGuess').value;
    var theDifference = 0;
    var previousDifference;
    var temperature = null;

    if (validGuess(playerGuess)) 
    {

        theDifference = Math.abs(playerGuess-theNumber);
        previousDifference = Math.abs(previousGuess - theNumber);

        if(theDifference < previousDifference)
        {
        temperature = 'Hotter';
        }
        else
        {
            temperature = 'Colder';
        }
    
        if(parseInt(playerGuess) === parseInt(theNumber))
         {
            
            document.getElementById('guess-vs-number').innerHTML = ('You got it in ' + numGuess + ' guesses!' + ' The Number: ' + theNumber);

        }
        else if (playerGuess > theNumber)
        {
        document.getElementById('guess-vs-number').innerHTML = ('Your getting ' + temperature + '! ' + playerGuess + ' is too high!');
        }
        else 
        {
        document.getElementById('guess-vs-number').innerHTML = ('Your getting ' + temperature + '! ' + playerGuess + ' is too low!');
        }  
    
        previousGuess = playerGuess;
    }
    else {
        document.getElementById('guess-vs-number').innerHTML = ("Invalid Input");

    }    
}
// Bind enter key to the compareGuess function for browsers that don't always interpret an enter press as a form submission.
$(document).keypress(function(e){
    if (e.which == 13){
        $("#userGuess").click();
    }
});