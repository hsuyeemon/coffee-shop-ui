var tab1 = get("tab-1");
var tab2 = get("tab-2");
var panel1 = get("panel-1");
var panel2 = get("panel-2");
var products = [
			{
				id : 'citem1',
				img: 'images/item1.jpeg',
				name : 'Black coffee',
				price : 3000,
				type : "coffee-menu"

			},
			{
				id : "citem1",
				img : "images/item2.jpeg",
				name : 'Capuccino',
				price : 2500,
				type : "coffee-menu"

			},
			{
				id : "citem3",
				img : "images/item3.jpeg",
				name : 'Dalgona',
				price : 4000,
				type : "coffee-menu"
			},
			{
				id : "bitem1",
				img : "images/bitem1.jpg",
				name : 'Libertad 5oz',
				price : 1000,
				type : "bakery-menu"
			},
			{
				id : "bitem2",
				img : "images/bitem2.jpg",
				name : 'Libertad 5oz',
				price : 1000,
				type : "bakery-menu"
			},
			{
				id : "bitem3",
				img : "images/bitem3.jpg",
				name : 'Libertad 5oz',
				price : 1000,
				type : "bakery-menu"
			}

		];


var cart = [];
if(JSON.parse(localStorage.getItem('cart-items')) != undefined){
	cart = JSON.parse(localStorage.getItem('cart-items'))
}


function get(obj) {
	return document.getElementById(obj);
}


/** Menuage tab handling **/

function swichPanel1(){
	panel1.style.display = "block";
	panel2.style.display = "none";

	tab1.style.background = "#fff";
	tab2.style.background = "#e55";
}

function swichPanel2(){
	panel2.style.display = "block";
	panel1.style.display = "none";

	tab2.style.background = "#fff";
	tab1.style.background = "#e55";
}


function addToCart(product_id){
	
	for (var i = 0 ; i < products.length ; i++) {
		
		//search for information 
		if (products[i].id == product_id) {

                    var cartItem = null;

                    // search in cart 
                    for (var k = 0; k < cart.length; k++) {
                    

                        if (cart[k].id == products[i].id) {
                        	
                            cartItem = cart[k];

                            //increase quantity by 1
                            cart[k]['quantity']++;

                            break;
                        }
                       
                    }

                    //add new item
                    if (cartItem == null) {
                        
                        var cartItem = products[i];
                        //set quantity = 1
                        cartItem['quantity'] = 1;
                        cart.push(cartItem);
                        break;

                    }
                    break;
                }

		}
	
	alert(JSON.stringify(cart));
	localStorage.setItem('cart-items',JSON.stringify(cart));
}

//addToCart("bitem1");


setItems("bakery-menu");
setItems("coffee-menu");

function setItems(type){
	var content = "";

	for(var i = 0; i < products.length; i++){

				if(type == products[i].type){

					content+= '<div class="item" id="'+products[i].id+'">'
					content+= '<img src="'+products[i].img+'" alt="'+products[i].name+'">'
					content+= '<h3 class="name">'+products[i].name+'</h3>'
					content+= '<p>'+products[i].price+' MMK</p>'
					content+= '<a class="btn" id='+products[i].id+'" onclick="addToCart('+products[i].id+');">Add To Cart</a>'
					content+= '</div>'

				}

	}
		//document.getElem.ID("bakery-menu/coffee-menu")
			get(type).innerHTML = content;
}

function showCart(){

	var content = "";

	for(var i = 0; i < cart.length; i++){

		//add your code here

	}
		get("cartitem").innerHTML = content;
}


