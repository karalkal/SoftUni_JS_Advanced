window.addEventListener("load", solve);

function solve() {
  let titleField = document.querySelector('form.newPostContent input#post-title')
  let categoryField = document.querySelector('form.newPostContent input#post-category')
  let contentField = document.querySelector('form.newPostContent textarea#post-content')

  document.getElementById('publish-btn').addEventListener('click', reviewPost)


  function reviewPost(event) {
    if (titleField.value && categoryField.value && contentField.value) {
      let ulReviewEl = document.getElementById('review-list')

      let liElement = document.createElement('li')
      liElement.classList.add('rpost')

      let articleElement = document.createElement('article')

      let h4Element = document.createElement('h4')
      h4Element.textContent = titleField.value
      let p1Element = document.createElement('p')
      p1Element.textContent = `Category: ${categoryField.value}`
      let p2Element = document.createElement('p')
      p2Element.textContent = `Content: ${contentField.value}`

      articleElement.appendChild(h4Element)
      articleElement.appendChild(p1Element)
      articleElement.appendChild(p2Element)

      let btnEdit = document.createElement('button')
      btnEdit.textContent = 'Edit'
      btnEdit.classList.add('action-btn', 'edit')
      let btnApprove = document.createElement('button')
      btnApprove.textContent = 'Approve'
      btnApprove.classList.add('action-btn', 'approve')

      liElement.appendChild(articleElement)
      liElement.appendChild(btnEdit)
      liElement.appendChild(btnApprove)

      ulReviewEl.appendChild(liElement)

      titleField.value = ''
      categoryField.value = ''
      contentField.value = ''

      btnEdit.addEventListener('click', editPost)
      btnApprove.addEventListener('click', publishPost)
    }
  }

  function editPost(event) {
    let article = event.target.parentElement.children[0]

    titleField.value = article.children[0].textContent
    categoryField.value = article.children[1].textContent.replace('Category: ', '')
    contentField.value = article.children[2].textContent.replace('Content: ', '')

    article.parentElement.remove()
  }

  function publishPost(event) {
    let article = event.target.parentElement.children[0]
    event.target.parentElement.parentElement.remove()   
    
    let ulPublishEl = document.getElementById('published-list')

    let liElement = document.createElement('li')
    liElement.classList.add('rpost')

    let articleElement = document.createElement('article')

    let h4Element = document.createElement('h4')
    h4Element.textContent = article.children[0].textContent
    let p1Element = document.createElement('p')
    p1Element.textContent = article.children[1].textContent
    let p2Element = document.createElement('p')
    p2Element.textContent = article.children[2].textContent

    articleElement.appendChild(h4Element)
    articleElement.appendChild(p1Element)
    articleElement.appendChild(p2Element)

    liElement.appendChild(articleElement)

    ulPublishEl.appendChild(liElement)    

    document.getElementById("clear-btn").addEventListener('click', clearPosts)
  }

  function clearPosts(event) {
    let ulPublishEl = document.getElementById('published-list')
    ulPublishEl.innerHTML = ''
  }
}
