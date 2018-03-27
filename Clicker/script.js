var increasePer = 50;

// Heartbeat
window.setInterval(function() {
    perSecond();
}, 20);

//Eventlistener clicker-button
var button = document.getElementById("clickerbutton")
button.addEventListener("click", function () {
    click()
});

var amount = 0;

function click() {
    console.log("boi");
    var x = document.getElementById("counter").innerHTML = "Amount: " + Math.round(++amount) + "c";

    var y = document.getElementById("firsttext")
    if (amount > 0) {
        y.style.color = "rgba(0,0,0,0)"
    }
}

//Rate of change
var amountDelta = 0;

function perSecond() {
    amount += amountDelta / increasePer;
    document.getElementById("counter").innerHTML = "Amount: " + Math.round(amount) + "c";
}

//u1
var message = document.getElementById("message");
var u1cost = 100;
function upgrade1() {
    if (amount >= u1cost) {
        amountDelta++;
        amount -= u1cost;
         u1cost = u1cost + 20;
        
        document.getElementById("upgrade1").style.borderColor = "#070030";
        message.innerHTML = "You bought an upgrade!"
        message.style.color = "white";
        setTimeout(function() {
        message.style.color = "rgba(0,0,0,0)"}, 2000);
        document.getElementById("u1cost").innerHTML = "Cost: " + u1cost + " c";
        
    } else {
        message.innerHTML = "You do not have enough currency for this upgrade."
        message.style.color = "red";
        setTimeout(function() { 
        message.style.color = "rgba(0,0,0,0)"}, 2000); } 
    }
var z = document.getElementById("upgrade1")
z.addEventListener("click", function () {
    upgrade1();
});

//u1+1
var u2cost = 1000;
function u2() {
    if (amount >= u2cost) {
        amountDelta = amountDelta + 5;
        amount -= u2cost;
        u2cost = u2cost + 100;
        
        document.getElementById("u2").style.borderColor = "#070030";
        message.innerHTML = "You bought an upgrade!"
        message.style.color = "white";
        setTimeout(function() {
        message.style.color = "rgba(0,0,0,0)"}, 2000);
        document.getElementById("u2cost").innerHTML = "Cost: " + u2cost + " c"
    } else {
       message.innerHTML = "You do not have enough currency for this upgrade."
        message.style.color = "red";
        setTimeout(function() { 
        message.style.color = "rgba(0,0,0,0)"}, 2000); } 
}
var q = document.getElementById("u2")
q.addEventListener("click", function() {
    console.log("hej");
    u2();
})

// Meny
var open = false;
function menu() {
    var btn = document.querySelector("#sideMenu").style;
    if (open) {
        btn.right = "-400px";
        open = false;
    } else {
        btn.right = "0px";
        open = true;
    }
}
var menuButton= document.querySelector("#menuButton")
menuButton.addEventListener("click", function() {
    console.log(open);
    menu();
})


