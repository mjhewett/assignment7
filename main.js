

// question 1

 
 var allPrices = items.map(function (item){
    return item.price;
});


var sum = allPrices.reduce(function (previous, current){
        return previous + current;
});


var average = sum / allPrices.length;


var answerOne = average.toFixed(2);


 document.querySelector('#answer1').textContent =( "The Average price is $" + answerOne);

 answer1.innerText = ('The average price is ' + answerOne);


// Question 2


var costbet = [];

var allCostBet = items.filter (function(item){
 if (item.price > 14 && item.price <18)



 costbet.push (item.title);

});


console.log(costbet);
var answer2 = document.querySelector('#answer2');
answer2.innerText = '';

costbet.forEach(function(x){
	answer2.appendChild(document.createTextNode(x + "\n\n\n"));
});


//answer2.appendChild(document.createTextNode(costbet + "\n"));


// Question 3



var cCode = items.filter(function (item){
	if( item.currency_code === "GBP")
		return item.currency_code;
	});



cCode.forEach( function(item){
	console.log(item.title);
});



document.querySelector('#answer3').textContent = ( "1970s Schlitz Malt Liquor Glass Beer Pitcher costs " + "\u00A3" + 18);



// Question 4


var woodsie = items.filter(function (item){
	if( item.materials.indexOf("wood")  !== -1 )
		return item.materials;
	});





var answerFour = document.querySelector('#answer4');
answerFour.innerText= '';
woodsie.forEach(function (item) {
answerFour.appendChild(document.createTextNode(item.title + " is made of wood" +
  '\n\n\n'));
});


// Question 5

//var matEight = [];

var matMore = items.filter(function (item){
	if( item.materials.length > 7){
		return item.materials;
}else;
{null;
}
});



var answerFive = document.querySelector('#answer5');
answerFive.innerText= '';
matMore.forEach(function (item) {
answerFive.appendChild(document.createTextNode(item.title + " has " + item.materials.length +
'\n\n\n'));
});



matMore.forEach(function (item) {
	answerFive.appendChild(document.createTextNode(item.materials + '\n\n\n'));
});







