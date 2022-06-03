function search() {
   const cities = Array.from(document.querySelectorAll('#towns li'));
   let searchTerm = document.getElementById('searchText').value;
   let counter = 0;

   for (let city of cities) {
      if (city.textContent.includes(searchTerm)) {
         counter++;
         city.style['font-weight'] = 'bold';
         city.style['text-decoration'] = 'underline';
      }
   }
   document.querySelector('div#result').textContent =  `${counter} matches found`
}
