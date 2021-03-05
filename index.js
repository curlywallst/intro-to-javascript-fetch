
window.addEventListener("DOMContentLoaded", () => {
    getRepos()
    // document.querySelector("#user-info").addEventListener('click', showUser)
    document.querySelector('form').addEventListener('submit', setUser)
  })

  let user = 'curlywallst'
  const BASE_URL = 'https://api.github.com/'
  
  function getRepos() {
    console.log("get repos")
    document.getElementById('main').innerHTML=""
    // let button = document.querySelector("#repos")
    // button.parentElement.removeChild(button)
    main.innerHTML=`<button id="user-info">User Info</button>`   
    document.querySelector("#user-info").addEventListener('click', showUser) 
    let list = document.getElementById('list')
    fetch(`${BASE_URL}users/${user}/repos`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach( repo => {
        list.innerHTML += (
          `
            <tr>
              <td>${repo.name}</td>
              <td>${repo.html_url}</td>
            </tr>`)
      })
    })
  }
  

  function showUser() {
    console.log("show user")
    let list = document.getElementById('list')
    list.innerHTML = ""
    let main = document.getElementById('main')
    fetch(`${BASE_URL}users/${user}`)
    .then(res => res.json())
    .then(user => {
      console.log(user)
      let button = document.querySelector("#user-info")
      button.parentElement.removeChild(button)
      main.innerHTML=`<button id="repos">Show Repos</button>`

      main.innerHTML+=`
        <p><strong>Username: </strong>${user.login}</p>
        <p><strong>Name: </strong>${user.name}</p>
        <p><strong>Bio: </strong>${user.bio}</p>
        <p><strong>Location: </strong>${user.location}</p>
      `
      document.querySelector("#repos").addEventListener('click', getRepos)

    })
  }

  function setUser(event){
    event.preventDefault()
    user = document.getElementById("username").value
    document.getElementById("username").value = ""
    getRepos()
  }
