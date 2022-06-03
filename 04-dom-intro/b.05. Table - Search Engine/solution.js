function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchTerm = document.getElementById('searchField').value
      let rows = Array.from(document.querySelectorAll('tbody tr'))
      // console.log(searchTerm)
      for (let row of rows) {
         // console.log(row.textContent)

         if (row.textContent.includes(searchTerm)) {
            row.setAttribute('class', 'select')
         } else {
            row.setAttribute('class', '')  // clear from previous search
         }
      }
      document.getElementById('searchField').value = ''
   }
}
