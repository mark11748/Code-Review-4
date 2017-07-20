function Pizza(size,meats,veggies) {
	this.size    = size;    //int : 1 to 3
	this.meats   = meats;   //array of bools [pepperoni,sausage,anchovies,ham]
	this.veggies = veggies; //array of bools [bell,onion,mushroom,olive]
	this.price   = 0;
 }

 Pizza.prototype.setPrice = function() {
 	var meatPrice = 0;
 	var vegPrice  = 0;

 	this.meats.forEach = function(meat) {
 		if (meat === true) {
 			meatPrice++;
 		}
 	}
 	this.veggies.forEach = function(veg) {
 		if (veg === true) {
 			vegPrice++;
 		}
 	}
 	this.price = ((this.size*6)+(vegPrice*1.5)+(meatPrice*2.5)).toFixed(2);
	return 0;
}

$(document).ready(function(){

	$(".reciept_group").hide();
  $("form").submit(function(event){
		event.preventDefault();


		var meatsChosen   = [$("MEAT1").prop('checked'),$("MEAT2").prop('checked'),$("MEAT3").prop('checked'),$("MEAT4").prop('checked')];
		var veggiesChosen = [$("VEG1").prop('checked'),$("VEG2").prop('checked'),$("VEG3").prop('checked'),$("VEG4").prop('checked')];

		var myPizza = new Pizza(parseInt($("input#SIZE").val()),meatsChosen,veggiesChosen);

    myPizza.setPrice();

    $("#RECIEPT").text("TOTAL : $"+myPizza.price.toString());
		$(".reciept_group").show();

  })

});
