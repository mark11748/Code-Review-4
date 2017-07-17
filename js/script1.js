function Pizza(size,meats,veggies) {
	this.size    = size;    //int : 1 to 3
	this.meats   = meats;   //array of bools [pepperoni,sausage,anchovies,carp,haddock,seal,orangeRuffie]
	this.veggies = veggies; //array of bools [bell,onion,mushroom,olive,spinach,tomato,pineapple,hotPepper]
  this.price   = 0;
 }

 Pizza.prototype.price() {
 	int meatPrice = 0;
 	int   vegPrice = 0;

 	this.meats.forEach(meat) {
 		if (meat === true) {
 			meatPrice++;
 		}
 	}
 	this.veggies.forEach(veg) {
 		if (veg === true) {
 			vegPrice++;
 		}
 	}
 	this.price = ((size*6)+(vegPrice*1.5)+(meatPrice*2.5)).toFixed(2);
}

$(document).ready(function(){
  $("button#ORDER").submit(function(event){
    var myPizza = Pizza($("input#SIZE"),$("input#MEAT"),$("input#VEG"));
    myPizza.price();
    $("#RECIEPT").text("TOTAL : "+myPizza.price.toString());
    event.preventDefault();
  })

});
