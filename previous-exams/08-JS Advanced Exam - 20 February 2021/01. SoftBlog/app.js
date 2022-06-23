function solve() {
   let creatorField = document.getElementById('creator')
   let titleField = document.getElementById('title')
   let categoryField = document.getElementById('category')
   let contentField = document.getElementById('content')
   let createBtn = document.getElementsByClassName('btn create')[0]
   createBtn.addEventListener('click', addPost)



   function addPost(event) {
      event.preventDefault()

      let mainSection = document.querySelector('main section')  // to append the newly created elements to

      let articleContainer = document.createElement('article')

      let h1Title = document.createElement('h1')
      h1Title.textContent = titleField.value

      let pCategory = document.createElement('p')
      pCategory.innerHTML = `Category: <strong>${categoryField.value}</strong>`

      let pCreator = document.createElement('p')
      pCreator.innerHTML = `Creator: <strong>${creatorField.value}</strong>`

      let pContent = document.createElement('p')
      pContent.textContent = contentField.value

      let buttonsDiv = document.createElement('div')
      buttonsDiv.classList.add('buttons')
      let deleteBtn = document.createElement('button')
      deleteBtn.classList.add('btn', 'delete')
      deleteBtn.textContent = 'Delete'
      let archiveBtn = document.createElement('button')
      archiveBtn.classList.add('btn', 'archive')
      archiveBtn.textContent = 'Archive'
      buttonsDiv.appendChild(deleteBtn)
      buttonsDiv.appendChild(archiveBtn)

      articleContainer.appendChild(h1Title)
      articleContainer.appendChild(pCategory)
      articleContainer.appendChild(pCreator)
      articleContainer.appendChild(pContent)
      articleContainer.appendChild(buttonsDiv)

      mainSection.appendChild(articleContainer)

      deleteBtn.addEventListener('click', (event) => {
         articleContainer.remove()
      })

      archiveBtn.addEventListener('click', (event) => {
         sortAndArchiveTitles(event, h1Title, articleContainer)
      })

      function sortAndArchiveTitles(event, h1Title, articleContainer) {
         //create new li element
         let newLi = document.createElement('li')
         newLi.textContent = h1Title.textContent

         // get existing li element, transform them to an array
         let allLi = document.querySelectorAll('section.archive-section ol li')
         let arrayOfLiElements = Array.from(allLi)

         // add newly created li to other li elements, sort them alphabetically
         arrayOfLiElements.push(newLi)
         console.log(arrayOfLiElements)
         arrayOfLiElements.sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))

         // clear existing ol element
         let olElement = document.querySelector('section.archive-section ol')
         olElement.innerHTML = ''

         // add elements from sorted array one by one
         for (let li of arrayOfLiElements) {
            olElement.appendChild(li)
         }

         // delete post
         articleContainer.remove()
      }
   }
}
