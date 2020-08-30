var bakery = [
			{
				"id" : "bitem1",
				name : 'Libertad 5oz',
				price : 299.00,
				stock : 4
			},
			{
				"id" : "bitem2",
				name : 'Libertad 5oz',
				price : 199.00,
				stock : 2
			}
		];

var products = [
			{
				id : 'citem1',
				img: 'images/item1.jpeg',
				name : 'Black coffee',
				price : 3000,
				type : "coffee"

			},
			{
				id : "citem1",
				img : "images/item2.jpeg",
				name : 'Capuccino',
				price : 2500,
				type : "coffee"

			},
			{
				id : "citem3",
				img : "images/item3.jpeg",
				name : 'Dalgona',
				price : 4000,
				type : "coffee"
			},
			{
				id : "bitem1",
				name : 'Libertad 5oz',
				price : 299.00,
				stock : 4,
				type : "backery"
			},
			{
				"id" : "bitem2",
				name : 'Libertad 5oz',
				price : 199.00,
				stock : 2,
				type : "backery"
			}

		];

var cart = [];

if(undefined != JSON.parse(localStorage.getItem('cart-items'))){
	cart = JSON.parse(localStorage.getItem('cart-items'));
	document.getElementById("cart-total").innerHTML = cart.length;
}


console.log(cart);


//showCart();
function get(obj){
	return document.getElementById(obj);
}




//get('tab-1').addEventListener("click",switchOne);
//get('tab-2').addEventListener("click",switchTwo);

function switchOne(){
	get('tab-1').style.background = "#fff";
	get('tab-2').style.background= "#e55";
	get('panel-1').style.display = "block";
	get('panel-2').style.display = "none";
}

function switchTwo(){
	get('tab-2').style.background = "#fff";
	get('tab-1').style.background= "#e55";
	get('panel-2').style.display = "block";
	get('panel-1').style.display = "none";
}

//addtoCart("bitem1");

var indArra = false;

function addtoCart(product_id){
			//alert("addingtoCart")
			 for (var i = 0; i < products.length; i++) {
                if (products[i].id == product_id) {
                    var cartItem = null;
                    for (var k = 0; k < cart.length; k++) {
                        if (cart[k].id == products[i].id) {
                        	alert(k+"found in cart"+cart[k]['quantity'])

                            cartItem = cart[k];
                            cart[k]['quantity']++;
                            alert("found in cart"+cart[k]['quantity'])

                            break;
                        }
                        alert(k);
                    }
                    alert(cartItem);
                    if (cartItem == null) {
                        
                        var cartItem = products[i];
                        cartItem['quantity'] = 1;
                        cart.push(cartItem);
                        break;
                    }
                    break;
                }
            }

		alert(JSON.stringify(cart));
		localStorage.setItem('cart-items',JSON.stringify(cart));
		document.getElementById("cart-total").innerHTML = cart.length;

}




function showCart(){


	var content = "";

	for(var i = 0; i < cart.length; i++){


				content+= '<div class="cart-items">'
				content+= '<img src="'+cart[i].img+'" alt="'+cart[i].name+'">'
				content+= '<span>'
				content+= '<span class="price">'+cart[i].price+' MMK</span>'
				content+= '<h3>quantity: <span class="stock">'+cart[i].quantity+'</span></h3>'
				content+= '</span>'
				content+= '<a id='+cart[i].id+'" onclick="addtoCart('+cart[i].id+');">+</a>'
				content+= '<div class="clearfix"></div>'
				content+= '</div>'

			}
			document.getElementById("item-list").innerHTML = content;
}

function setItems(type){


	var content = "";

	for(var i = 0; i < products.length; i++){


				if(type == products[i].type){


				content+= '<div class="cart-items">'
				content+= '<img src="'+cart[i].img+'" alt="'+cart[i].name+'">'
				content+= '<span>'
				content+= '<span class="price">'+cart[i].price+' MMK</span>'
				content+= '<h3>quantity: <span class="stock">'+cart[i].quantity+'</span></h3>'
				content+= '</span>'
				content+= '<a id='+cart[i].id+'" onclick="addtoCart('+cart[i].id+');">+</a>'
				content+= '<div class="clearfix"></div>'
				content+= '</div>'
				}
			}

			
			document.getElementById(type).innerHTML = content;
}






//localStorage.removeItem('cart-items');