let numero1;
let numero2;
let guardado;

$("#txtboton").click(calcularResto);

function calcularResto (){

numero1 = Number($("#txtnum1").val());

numero2 = Number($("#txtnum2").val());

guardado = numero1 % numero2;
$("#resultado").html(Math.round(guardado));


//alert(guardado);




}