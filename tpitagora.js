// Teorema de Pitágoras by Marcos Sebastián Martínez

let preguntaEjercicio = prompt(`¿Qué desea calcular?
A = Altura.
B = Base.
H = Hipotenusa.`)

let altura, base, hipotenusa, sumaCatetos

if(preguntaEjercicio === "A") {
    base = parseInt(prompt("Ingrese la base"))
    hipotenusa = parseInt(prompt("Ingrese la hipotenusa"))
    alert("Base es igual a: " + base + ". " + "Hipotenusa es igual a: " + hipotenusa + ".")
    altura = Math.sqrt((hipotenusa**2) - (base**2))
    alert("La altura del triángulo es: " + altura)
} else if(preguntaEjercicio === "B") {
    altura = parseInt(prompt("Ingrese la altura"))
    hipotenusa = parseInt(prompt("Ingrese la Hipotenusa"))
    base = Math.sqrt((hipotenusa**2) - (altura**2))
    alert("La base del triángulo es : " + base)
} else if(preguntaEjercicio === "H") {
    altura = parseInt(prompt("Ingrese la altura"))
    base = parseInt(prompt("Ingrese la base"))
    alert("Altura es igual a: " + altura + ". " + "Base es igual a: " + base + ".")
    sumaCatetos = (altura**2) + (base**2)
    hipotenusa = Math.sqrt(sumaCatetos)
    alert("La hipotenusa del triangulo es: " + hipotenusa)
} else {
    alert("Ese ejercicio no se puede realizar")
}