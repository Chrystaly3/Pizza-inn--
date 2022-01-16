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
		shipping = parseInt($(#show-locate).val());
		let name = $("#myName").val();
		let pizzaSize = $("#size").val();
		
		function price(){
			if(pizzaSize == "Small"){
				return 600;
			}else if(pizzaSize == "Medium"){
				return 800;
			}else if(pizzaSize == "Large"){
				return 1200;
			}
		}
		let pizzaCrust = $("#crust").val();
		let crust = crustPrice()
//Crust
		function crustPrice(){
			if(pizzaCrust === "cheese" ){
				return 200
			}else if(pizzaCrust === "thin"){
				return 300
			}else if(pizzaCrust === "stuffed"){
				return 400
			}else if(pizzaCrust === "thick"){
				return 500
			}
		}
		//Toppings
		let pizzaToppings = checkedToppings();
		function checkedToppings(){
			let toppingName = document.getElementByName("mole");
			let toppingLength = toppingName.length;
			let toppingValue = " ";
		for(i = 0; i < toppingLength; i++){
			let toppingChecked = toppingName[i].checked;

			if(toppingChecked){
				toppingValue += toppingName[i].value;
			}
		}
		let results = toppingValue
		return results;
			}
		let pizzQuantity = parseInt($("#Quantity").val());
		let mySize = price();
		let myToppings = checkBox();
		function checkBox(){
			let check = document.getElementsByName("mole");
			let box1 = 150
			let box2 = 180
			let box3 = 200
			if(check[0].checked){
				document.getElementById("errorMessage").innerHTML="";
				return box1;
			}else if(check[1].checked){
				document.getElementById("errorMessage").innerHTML = "";
				return box2;
			}else if(check[2].checked){
				document.getElementById("errorMessage").innerHTML = "";
				return box3;
			}
		}
		let checked = checkBox();
		let shipping = addDelivery();
		function addDelivery(){
			let checkDelivery= document.getElementsByName("deliver");
			if(checkDelivery[0].checked){
				let money = 200;
				return money;
			}else if(!checkDelivery[1].checked){
				let noMoney = 0;
				return noMoney;
				
			}
		}
		let newTotal = new total(pizzaQuantity,pizzSize,pizzaCrust,pizzaToppings,pizzaDelivery);
		if (name != " " && pizzaSize != " " && pizzaCrust != " " && pizzaQuantity != " "&& check ){
			$(".hide").fadeIn
		}

		
	})
})
