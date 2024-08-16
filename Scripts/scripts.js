const URL = 'https://jsonplaceholder.typicode.com/users'
const ul = document.createElement('ul')

async function loadData(){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        data.forEach(({username, email}) => {
            const li = document.createElement('li')
            li.textContent =  `Usuario: ${username} Correo: ${email}`
            ul.append(li)
        })
    document.body.append(ul)
    console.log(data)
    } catch (error){
        console.error("Error fetching data", error)
    }

}
loadData()