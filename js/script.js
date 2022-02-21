const kmCost = 0.21;
let passengerAge = prompt("Your age:");
let kilometers = prompt("Km for your destination:");
kilometers = parseFloat(kilometers).toFixed(2);

document.getElementById("age").innerHTML = passengerAge;
document.getElementById("km").innerHTML = kilometers;

let normalTicket = kmCost * kilometers;

let saleTicket;

if (passengerAge < 18) {
    saleTicket = normalTicket - (normalTicket * 20 / 100);
}
else if (passengerAge > 65) {
    saleTicket = normalTicket - (normalTicket * 40 / 100);
}
else {
    saleTicket = normalTicket;
};

saleTicket = saleTicket.toFixed(2);
document.getElementById("ticket").innerHTML = saleTicket;
