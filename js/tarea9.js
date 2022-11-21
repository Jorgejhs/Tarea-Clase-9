let pais ="españa";
let continente ="europa";
let antiguedad ="2021";
let pais_y_continente_y_antiguedad = pais + "" + continente + "" + antiguedad;

pais ="Mexico";
continente ="Latinoamerica";
antiguedad = "2020";


console.log(pais, antiguedad, continente);
alert(pais_y_continente_y_antiguedad);
document.write(pais, continente, antiguedad);

prompt("ingrese su nombre");
prompt("ingrese su apellido");


let numero1= parseInt(prompt("ingrese un numero"));
let numero2= parseInt(prompt("ingrese otro numero"));

function suma(numero1,numero2){
    return numero1 +++ numero2;
}

alert(suma(numero1,numero2))
console.log(suma(numero1,numero2))