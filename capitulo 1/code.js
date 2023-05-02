let dineroCofla = prompt("Cuánta plata tenés Cofla?");
let dineroRoberto = prompt("Cuánta plata tenés Roberto?");
let dineroPedro = prompt("Cuánta plata tenés Pedro?");


/* Cofla */


if(dineroCofla >= 0.6 && dineroCofla < 1.6) {
    alert("Cofla comprate el helado de crema");
    alert("te sobra " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.7) {
    alert("Cofla comprate el helado de marca Heladix");
    alert("te sobra " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.8) {
    alert("Cofla comprate el helado de marca Heladovich");
    alert("te sobra " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 2.9) {
    alert("Cofla comprate el helado de marca Helardo");
    alert("te sobra " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla comprate el helado con confites o el pote de 1/4 kg");
    alert("te sobra $" + (dineroCofla - 2.9));
}

else{
    alert("perdona Cofla, pedazo de pelotudo, pobre del culo, no podes comprar nada...inmundo de mierda");
}


/* Roberto */


if(dineroRoberto >= 0.6 && dineroRoberto < 1.6) {
    alert("Roberto comprate el helado de crema");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.7) {
    alert("Roberto comprate el helado de marca Heladix");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.8) {
    alert("Roberto comprate el helado de marca Heladovich");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 2.9) {
    alert("Roberto comprate el helado de marca Helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto comprate el helado con confites o el pote de 1/4 kg");
}

else{
    alert("perdona Roberto, pedazo de pelotudo, pobre del culo, no podes comprar nada...inmundo de mierda");
}


/* Pedro */


if(dineroPedro >= 0.6 && dineroPedro < 1.6) {
    alert("Pedro comprate el helado de crema");
}

else if (dineroPedro >= 1 && dineroPedro < 1.7) {
    alert("Pedro comprate el helado de marca Heladix");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.8) {
    alert("Pedro comprate el helado de marca Heladovich");
}

else if (dineroPedro >= 1.7 && dineroPedro < 2.9) {
    alert("Pedro comprate el helado de marca Helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro comprate el helado con confites o el pote de 1/4 kg");
}

else{
    alert("perdona Pedro, pedazo de pelotudo, pobre del culo, no podes comprar nada...inmundo de mierda");
}