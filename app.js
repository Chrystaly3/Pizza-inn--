function Order( size, crust, topping) {
	this.size = size;
	this.crust = crust;
	this.topping = topping;


Order.prototype.fullOrder = function () {
	return   this.size + ' pizza with a crust of ' + this.crust + " and a topping of " + this.topping;
};
};
function Total(quantity, pizzaPrice,crustPrice,toppingPrice,shipped){
	this.quantity = quantity;
	this.pizzaPrice = pizzaPrice;
	this.crustPrice = crustPrice;
	this.toppingPrice = toppingPrice;
	this.shipped = shipped;



Total.prototype.totalCash = function() {
	return  this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice + this.shipped )
};
};


	function validate() {
 
			var myLocation = document.getElementById('locate').value;
			var myName = $('#myName').val();
			var myPhone = $('#phone').val();
		

	
			if (myLocation != ''&& myPhone !=''&& myPhone.length ===10) {
				 document.getElementById('show-saved').innerHTML = myName + " Lucky for you we are only 15 minutes away from " + myLocation +" !"
				 $('.showing').slideToggle();
				 $('.comfirmThis').slideToggle();
						$(document).on('click', '#submit-btn', function(e){
							 e.preventDefault();
					 });

				 
		
			}
			else{ 
					 return false;
			
					}
				 
	
	}
	

//business logic
$(document).ready(function () {
	$("form#myform").submit(function(event) {
			event.preventDefault();
			myShipping = parseInt($('#show-locate').val());
			var myName = $('#myName').val();
	

					var pizzaSize = $('#size').val();

					function price(){

							if(pizzaSize=='Small'){
									return 600;
							}else if(pizzaSize=='Medium'){
									return 800;
							}else if(pizzaSize=='Large'){
									return 1200
							}
					
					}


					var pizzaCrust = $('#crust').val();
					 var myCrust = crustiePrice()

					function crustiePrice(){
							if(pizzaCrust==='Cracker'){
									return 250;
							}else if(pizzaCrust==='Stuffed'){
									return 200;

							}else if(pizzaCrust==='Cheese'){
									return 250;

						 
							}
					}
							//Toppings
					var pizzaTopping = checkedToppings();

						 function checkedToppings() {
							var topName = document.getElementsByName('mole');

							var topLength = topName.length;
							var topValue = ' ';
							for(i = 0; i<topLength; i++){
									var topChecked = topName[i].checked;
									if(topChecked){
											topValue += topName[i].value + ' ; ' ;
									}   
							}
							var result = topValue;
							return result;


					}

							//Quantity
					var pizzaQuantity = parseInt($('#quantity').val());

					var mySize = price()


					var myTopping =checkBox();

					 function checkBox(){
							var chb = document.getElementsByName('mole');
							var box1 = 150;
							var box2 = 180;
							var box3 = 150;
							
									 
	if (chb[0].checked){
											document.getElementById("errMessage").innerHTML = "";
											return box1;

							}else if(chb[1].checked){
																	document.getElementById("errMessage").innerHTML = "";
																	return box2; 
																	 
							}else if(chb[2].checked){
																	document.getElementById("errMessage").innerHTML = "";
																	return box3;

							}else if(chb[3].checked){

																	document.getElementById("errMessage").innerHTML = "";
																	return box4;
																	
							}else if(chb[4].checked){
																	document.getElementById("errMessage").innerHTML = "";
																	return box5;
																	
							}else if(chb[5].checked){
																	document.getElementById("errMessage").innerHTML = "";
																	return box6;
							}else{
												 document.getElementById("errMessage").innerHTML = "choose atleast one topping!";

									
							}

					}
	//Derivery
					var check = checkBox();

					var myShipping = addDelivery();
					function addDelivery(){
							var checkDelivery = document.getElementsByName('weDeliver');
							if(checkDelivery[0].checked){
									var money =  200;
									return money;
							}else if(!checkDelivery[0].checked){
									var noMoney = 0;
									return noMoney;
							}
			 
		
					}
					
		
			
		 var  newTotal= new Total(pizzaQuantity,mySize,myCrust,myTopping,myShipping);

		 if( myName!='' && pizzaSize !='' &&  pizzaCrust != ''  && pizzaQuantity !='' && check  ){
			$('.hide').fadeIn();
			$('.image-section').hide();
			$('#pizzSize').text( pizzaSize);
			$('#pizzCrust').text( pizzaCrust);
			$('#pizzTopping').text( pizzaTopping);
			$('#pizzQuantity').text( pizzaQuantity);
			$('#pizzTotal').text( newTotal.totalCash());

			$('#each-size').text( 'pizza-size : '+ pizzaSize);
			$('#each-crust').text( 'Crust : ' + pizzaCrust);
			$('#each-top').text( 'Toppings : ' + pizzaTopping);
			$('#each-qty').text( 'Your order : ' + pizzaQuantity);
			$('#each-total').text( 'Your total bill : ' + newTotal.totalCash() );
			$('#each-text').text('Thank You for choosing us to serve you ' + myName + ' !'); 

			
		 

	}else {

			return false;



	}
 


	 
	$('.addedMe').off().click(function(){
			$('#newOrder').append(
					'<tr><th id="pizzTable">'+ '#' + '</th><td id="pizzSize">' + pizzaSize + '</td><td id="pizzCrust">' + pizzaCrust +
							 '</td><td id="pizzTopping">' + pizzaTopping + '</td><td id="pizzQuantity">' + pizzaQuantity + '</td><td id="pizzTotal">' + newTotal.totalCash() 
		 );
	});

	if($('#myName') !=''){

			$('.addedMe').fadeIn();
			$('.addMe').hide();
	};
 

			});

		
	


		 
			$('.show-locate').click(function(){
					$('.deliveryButton').slideToggle();
			});

 
	
	});
