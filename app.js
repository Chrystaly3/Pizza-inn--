function order(size,crust,toppings){
	this.size = size
	this.crust = crust
	this.toppings = toppings
order.prototype.fullOrder= function(){
	return this.size + "Pizza crust of " + this.crust + "and topping of" + this.toppings;
};
};
