function order(size,crust,toppings){
	this.size = size
	this.crust = crust
	this.toppings = toppings
order.prototype.fullOrder= function(){
	return this.size + "Pizza crust of " + this.crust + "and topping of" + this.toppings;
};
};

function total(quantity, pizzaPrice, crustPrice,toppingPrice,delivery){
	this.quantity= quantity
	this.pizzaPrice = pizzaPrice
	this.crustPrice = crustPrice
	this.toppingPrice = toppingPrice
	this.delivery = delivery
total.prototype.totalCash = function(){
	return this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice + this.delivery);
};
};

function validate(){
	let location = document.getElementById("locate").value
	let name = $("#myName").val();
	let phone = $("#phone").val();


	if(location != "" && phone != "" && phone.length === 10){
		document.getElementById("show-saved").innerHTML = name + "order will be deliverd soon" + location + "!"
		$(".showing").slideToggle();
		$(".confirmThis").slideToggle();
				$(document).on("click","#Submit-btn",function(e){
				e.preventDefault();

		
					});
		
}else{

	return false
}	
}
$(document).ready(function(){
	$('form#myform').submit(function(event){
		event.preventDefault();
		shipping

	})
})
