
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', addUser)
  })
  
  function addUser(event){
    event.preventDefault()
    let username = document.getElementById('username').value
    let age = document.getElementById('age').value
    let hobby = document.getElementById('hobby').value
  
    let user = {
      name: username,
      age: age,
      hobby: hobby
    }
  
    console.log(user)
    let list = document.getElementById('list')
    list.innerHTML += (
      `
        <tr>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.hobby}</td>
        </tr>
        ` )
  
    document.getElementById('username').value = ''
    document.getElementById('age').value = ''
    document.getElementById('hobby').value = ''
  }
  
  