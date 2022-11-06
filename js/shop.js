// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
	{
		id: 1,
		name: 'Pilea',
		price: 10.5,
		type: 'indoor',
		offer: {
			number: 3,
			percent: 20
		}
	},
	{
		id: 2,
		name: 'Monstera',
		price: 6.25,
		type: 'indoor'
	},
	{
		id: 3,
		name: 'Potus Limón',
		price: 5,
		type: 'indoor',
		offer: {
			number: 10,
			percent: 30
		}
	},
	{
		id: 4,
		name: 'ave-del-paraíso',
		price: 260,
		type: 'outdoor'
	},
	{
		id: 5,
		name: 'Yuca',
		price: 20.5,
		type: 'indoor'
	},
	{
		id: 6,
		name: 'Sansevieria',
		price: 12.75,
		type: 'outdoor'
	},
	{
		id: 7,
		name: 'Cardón',
		price: 15,
		type: 'cactus'
	},
	{
		id: 8,
		name: 'Euphorbia',
		price: 19.99,
		type: 'cactus'
	},
	{
		id: 9,
		name: 'TMammallaria',
		price: 9.99,
		type: 'cactus'
	}
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
function buy(id) {
	// 1. Loop for to the array products to get the item to add to cart
	// 2. Add found product to the cartList array
	for (i = 0; i < products.length; i++) {
		if (id == products[i].id) {
			cartList.push(products[i]);
		}
	}
	document.getElementById('count_product').innerText = cartList.length;
	generateCart(); // Exercici 4
	applyPromotionsCart(); // Exercici 5
	calculateTotal(); // Exercici 3
}

// Exercise 2
function cleanCart() {
	cartList.length = 0;
	cart.length = 0;
	calculateTotal();
	printCart();
}
// Exercise 3
function calculateTotal() {
	// Calculate total price of the cart using the "cartList" array
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].subtotalWithDiscount * cart[i].quantity;
	}
	document.getElementById('totalPriceCart').innerText = total;
	console.log('total: ' + total);
}

function calculateTotal() {
	// Calculate total price of the cart using the "cartList" array
	let total = 0;
	for (let i = 0; i < cartList.length; i++) {
		total += cartList[i].price;
	}
	console.log(total);
	document.getElementById('totalPriceCart').innerText = total;
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart() {
	cart.length = 0;
	for (i = 0; i < cartList.length; i++) {
		let found = false;
		for (j = 0; j < cart.length; j++) {
			if (cartList[i].id === cart[j].id) {
				//
				found = true;
				cart[j].quantity += 1;
			}
		}
		if (found === false) {
			let item = { ...cartList[i] };
			item.quantity = 1;
			cart.push(item);
		}
	}
}

// Exercise 5
function applyPromotionsCart() {
	// Apply promotions to each item in the array "cart"
	for (i = 0; i < cart.length; i++) {
		if ('offer' in cart[i] && cart[i].quantity >= cart[i].offer.number) {
			let discount = cart[i].price * (cart[i].offer.percent / 100);
			cart[i].subtotalWithDiscount = cart[i].price - discount;
		} else {
			cart[i].subtotalWithDiscount = cart[i].price;
		}
	}
}

// Exercise 6
function printCart() {
	// Fill the shopping cart modal manipulating the shopping cart dom
	let table = document.getElementById('cart_list');

	for (i = table.rows.length - 1; i >= 0; i--) {
		table.deleteRow(i);
	}

	for (i = 0; i < cart.length; i++) {
		let row = table.insertRow(i);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);

		cell1.innerHTML = cart[i].name;
		cell2.innerHTML = cart[i].price + '€';
		cell3.innerHTML = cart[i].quantity;
		cell4.innerHTML = cart[i].subtotalWithDiscount * cart[i].quantity + '€';
		cell5.innerHTML = '<button id="button-delete" src="images/delete" > x </button>';
		/* 		document.getElementById('button-delete').onclick = 'removeFromCart()'; */
	}
}

// ** Nivell II **

// Exercise 8
/* function addToCart(id) {
	// Refactor previous code in order to simplify it
	// 1. Loop for to the array products to get the item to add to cart
	// 2. Add found product to the cart array or update its quantity in case it has been added previously.

	for (i = 0; i < products.length; i++) {
		if (id === products[i].id) {
			cartList.push(products[i]);

			cart.length = 0;
			for (i = 0; i < cartList.length; i++) {
				let found = false;
				for (j = 0; j < cart.length; j++) {
					if (cartList[i].id === cart[j].id) {
						found = true;
						cart[j].quantity += 1;
					}
				}
				if (found === false) {
					let item = { ...cartList[i] };
					item.quantity = 1;
					cart.push(item);
				}
				break
			}
		}
	} */
/* if (id === products[i].id) {
            for (j = 0; j < cart.length; j++) { 
                if (products[i].id !== cart[j].id) {
                    let item = { ...cart[j] };
                    cart[j].quantity = 1;
                    cart.push(cart[j]);
                }
                if (products[i].id === cart[j].id) { 
                    cart[j].quantity += 1;
            } */
/* 	applyPromotionsCart();
	calculateTotal();
	document.getElementById('count_product').innerText = cart.length;
} */

// Exercise 9
function removeFromCart(id) {
	for (i = 0; i < cart.length; i++) {
		// TODO: recorrer l'array cart
		if (id === cart[i].id) {
			// TODO: si la id que ve per la funció és igual que la id d'un producte de l'array
			if (cart[i].quantity > 1) {
				// TODO: si el producte té una quantity major a 1
				cart[i].quantity--; // TODO: resta-li 1 a la quantity (-1)
				cart[i].subtotalWithDiscount -= cart[i].price; // TODO: i resta-li el preu (d'aquell producte (d'1)) al total del preu (subTotalWithDiscount)
			} else {
				// TODO: Si el producte no té quantity >1
				cart.splice(cart[i], 1); // TODO: treu el producte de l'array
			}
		}
	}
	applyPromotionsCart();
	calculateTotal();
	printCart();
}

function open_modal() {
	console.log('Open Modal');
	printCart();
}
