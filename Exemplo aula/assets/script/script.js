let valor = 3
let valor2 = "3"
let nome = "Matheus"

const url = "google.com"

console.log(valor)
console.log(typeof(valor))
console.log(typeof(valor2))
console.log(nome)
console.log(url)

function olaMundo(){
    console.log("Hello World!")
}
olaMundo()

function soma(numero1, numero2){
    return numero1+numero2
}
console.log(soma(55,2))

//arrow function
const helloWorld = () => console.log("Hello World, Hello JS!")

helloWorld()

const somaNum = (num1, num2) => num1+num2 

console.log(somaNum(5,1))