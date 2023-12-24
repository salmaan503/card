
console.log('hello vanila')

/* const products = [
  { id: 1, name: 'Product A', price: 50, quantity: 10 },
  { id: 2, name: 'Product B', price: 30, quantity: 5 },
  { id: 3, name: 'Product C', price: 20, quantity: 15 },
];

// Function to update the quantity of a product in the inventory
function updateProductQuantity(productId, newQuantity) {
  const product = products.find(item => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
    return true; // Successfully updated
  }
  return false; // Product not found
}

// Function to find low-stock products (quantity less than a threshold)
function findLowStockProducts(threshold) {
  return products.filter(product => product.quantity < threshold);
}

console.log('Before Update:');
console.log(products);

// Update the quantity of a product
updateProductQuantity(2, 8);

console.log('After Update:');
console.log(products);

// Find low-stock products
const lowStockProducts = findLowStockProducts(10);
console.log('Low Stock Products:', lowStockProducts);


const cart = [];

// Function to add a product to the shopping cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    cart.push(product);
    return true; // Successfully added to cart
  }
  return false; // Product not found
}

// Function to remove a product from the shopping cart
function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    return true; // Successfully removed from cart
  }
  return false; // Product not found in cart
}

// Function to calculate the total cart value
function calculateTotalCartValue(cart) {
  return cart.reduce((total, product) => total + product.price, 0);
}

console.log('Cart Contents:', cart);

// Add products to the cart
addToCart(1);
addToCart(3);

console.log('Cart Contents after Adding Products:', cart);

// Remove a product from the cart
removeFromCart(1);

console.log('Cart Contents after Removing Product:', cart);

// Calculate the total cart value
const totalValue = calculateTotalCartValue(cart);
console.log('Total Cart Value:', totalValue);



// function to apply discount in cart

function applyDiscount(cart,discountPer){
return cart.map(item=>({...item, price: item.price*(1-discountPer/100)}))
}
console.log(cart)
const discuntedPrice=applyDiscount(cart,90)
console.log('discountedBill',discuntedPrice)



// tax calculation 

function taxCalculation(cart,taxRate){
 const subtotal=cart.reduce((total,product)=>total+product.price,0)
 const tax=subtotal*(taxRate/100)
 return tax+subtotal
}

const finalAMT=taxCalculation(cart,10)
console.log('Amount With Tax:', finalAMT)


// Function to calculate the total cart value with shipping cost
function calculateTotalCartValueWithShipping(cart, shippingCost) {
  return calculateTotalCartValue(cart) + shippingCost;
}

const totalValueWithShipping = calculateTotalCartValueWithShipping(cart, 5); // $5 shipping cost
console.log('Total Cart Value with Shipping:', totalValueWithShipping);

const wishlist = [];

// Function to add a product to the wishlist
function addToWishlist(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    wishlist.push(product);
    return true; // Successfully added to wishlist
  }
  return false; // Product not found
}

// Function to remove a product from the wishlist
function removeFromWishlist(productId) {
  const index = wishlist.findIndex(item => item.id === productId);
  if (index !== -1) {
    wishlist.splice(index, 1);
    return true; // Successfully removed from wishlist
  }
  return false; // Product not found in wishlist
}

console.log('Wishlist Contents:', wishlist);

// Add products to the wishlist
addToWishlist(2);
addToWishlist(3);

console.log('Wishlist Contents after Adding Products:', wishlist);

// Remove a product from the wishlist
removeFromWishlist(2);

console.log('Wishlist Contents after Removing Product:', wishlist);

 */
 
console.log('output from here')
 
// Define products in a separate data structure
const products = [
 { id: 1, name: 'Product A', price: 50, quantity: 10 },
 { id: 2, name: 'Product B', price: 30, quantity: 5 },
 { id: 3, name: 'Product C', price: 20, quantity: 15 },
];

// Function to update the quantity of a product in the inventory
function updateProductQuantity(productId, newQuantity) {
 const product = findProductById(productId);
 if (product) {
   product.quantity = newQuantity;
   return true; // Successfully updated
 }
 return false; // Product not found
}

// Function to find low-stock products (quantity less than a threshold)
function findLowStockProducts(threshold) {
 return products.filter(product => product.quantity < threshold);
}



// Function to find a product by its ID
function findProductById(productId) {
 return products.find(item => item.id === productId);
}

console.log('Before Update:');
console.log(products);

// Update the quantity of a product
updateProductQuantity(2, 180);

console.log('After Update:');
console.log(products);

const cart = [];

// Function to add a product to the shopping cart
function addToCart(productId) {
 const product = findProductById(productId);
 if (product) {
   cart.push({ ...product }); // Clone the product to avoid modifying the original
   return true; // Successfully added to cart
 }
 return false; // Product not found
}

// Function to remove a product from the shopping cart
function removeFromCart(productId) {
 const index = cart.findIndex(item => item.id === productId);
 if (index !== -1) {
   cart.splice(index, 1);
   return true; // Successfully removed from cart
 }
 return false; // Product not found in cart
}

// Function to calculate the total cart value
function calculateTotalCartValue(cart) {
 return cart.reduce((total, product) => total + product.price, 0);
}

console.log('Cart Contents:', cart);

// Add products to the cart
addToCart(1);
addToCart(3);

console.log('Cart Contents after Adding Products:', cart);

// Remove a product from the cart
removeFromCart(1);

console.log('Cart Contents after Removing Product:', cart);

// Function to apply a discount to the cart
function applyDiscount(cart, discountPer) {
 return cart.map(item => ({ ...item, price: item.price * (1 - discountPer / 100) }));
}

const discountedCart = applyDiscount(cart, 10); // Apply a 10% discount
console.log('Discounted Cart:', discountedCart);

// Function to calculate the total cart value with tax
function calculateTotalCartValueWithTax(cart, taxRate) {
 const subtotal = calculateTotalCartValue(cart);
 const tax = subtotal * (taxRate / 100);
 return subtotal + tax;
}

const totalValueWithTax = calculateTotalCartValueWithTax(cart, 10); // 10% tax rate
console.log('Total Cart Value with Tax:', totalValueWithTax);

// Define a separate data structure for the wishlist
const wishlist = [];

// Function to add a product to the wishlist
function addToWishlist(productId) {
 const product = findProductById(productId);
 if (product) {
   wishlist.push({ ...product }); // Clone the product to avoid modifying the original
   return true; // Successfully added to wishlist
 }
 return false; // Product not found
}

// Function to remove a product from the wishlist
function removeFromWishlist(productId) {
 const index = wishlist.findIndex(item => item.id === productId);
 if (index !== -1) {
   wishlist.splice(index, 1);
   return true; // Successfully removed from wishlist
 }
 return false; // Product not found in wishlist
}

console.log('Wishlist Contents:', wishlist);

// Add products to the wishlist
addToWishlist(2);
addToWishlist(3);

console.log('Wishlist Contents after Adding Products:', wishlist);

// Remove a product from the wishlist
removeFromWishlist(2);

console.log('Wishlist Contents after Removing Product:', wishlist);
