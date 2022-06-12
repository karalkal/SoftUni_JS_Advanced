// Write a JS function that receives a string message and displays it inside a div with id "notification.
// The div starts hidden and when the function is called, reveal it. 
// After the user clicks on it, hide the div. In the example document, a notification is shown when you click on the button ["Get notified"].


function notify(message) {
  let notificationDiv = document.getElementById('notification')
  notificationDiv.style.display = 'block'
  notificationDiv.textContent = message
  notificationDiv.addEventListener('click', hideItAgain)

  function hideItAgain(event) {
    notificationDiv.style.display = 'none'
  }
}

