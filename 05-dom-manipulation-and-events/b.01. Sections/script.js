function create(words) {
   let divContentElement = document.querySelector('div#content')

   for (let word of words) {
      let pElement = document.createElement('p')
      let divElement = document.createElement('div')

      pElement.textContent = word
      pElement.style.display = 'none'

      divElement.appendChild(pElement)
      divElement.addEventListener('click', makeVisible)

      divContentElement.appendChild(divElement)

      function makeVisible() {
         pElement.style.display = 'block'
      }
   }
}