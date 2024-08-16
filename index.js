const addButton = document.createElement('button');
addButton.textContent = 'Mostrar Arreglo';
document.body.append(addButton);

const names = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Ana', 'Luis', 'Carlos', 'Jose', 'Javier', 'Ricardo'];
const ages = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const people = {
    name: 'Juan',
    age: 20,
    city: 'CDMX',
    country: 'Mexico'
}

function printInfo(people) {
    const { city, country, ages } =  people
    return `Ciudad: ${city} Pais: ${country} Edad: ${ages}`
}
console.log(printInfo(people))


const concatArray = names.concat(ages)
console.log(concatArray)

function handleInfo(){
    const showNames = names.map(name => {
        return name
    })
    console.log(showNames)
}

function handleFilter(){
    const filterNames = names.filter(name => {
        return name.length > 4
    })
    console.log(filterNames)
}

const nameEach = names.forEach(name => {
    console.log(name)
})

addButton.addEventListener('click', handleFilter)

