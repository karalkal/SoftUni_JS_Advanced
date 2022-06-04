function solve() {
   let products = Array.from(document.getElementsByClassName('product'))
   // let products = document.getElementsByClassName('product')
   let textAreaElement = document.getElementsByTagName('textarea')[0]
   let allButtons = document.getElementsByTagName('button')

   let checkoutButton = document.querySelector('button.checkout')
   checkoutButton.addEventListener('click', checkout)

   let boughtProducts = []
   let totalPrice = 0


   for (let product of products) { // get each product's add button, attach event listener to it
      let productAddButton = product.getElementsByClassName('add-product')[0]
      productAddButton.addEventListener('click', addProduct)
   }

   function addProduct(e) {
      let productName = e.target.parentNode.parentNode
         .getElementsByClassName('product-title')[0].textContent
      let productPrice = Number(e.target.parentNode.parentNode
         .getElementsByClassName('product-line-price')[0].textContent)

      if (!boughtProducts.includes(productName)) {
         boughtProducts.push(productName)
      }
      totalPrice += productPrice

      textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function checkout() {
      textAreaElement.value += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      for (let button of allButtons) {
         button.disabled = true
      }
   }
}