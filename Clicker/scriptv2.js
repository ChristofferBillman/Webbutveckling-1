var increasePer = 50;
var amount = 0;
// Heartbeat
window.setInterval(function () {
    perSecond();
}, 20);

//Eventlistener clicker-button
var button = document.getElementById("clickerbutton")
button.addEventListener("click", function () {
    click();
});

//clickerbutton
function click() {
    var y = document.getElementById("firsttext");
    if (amount > 0) {
        y.style.color = "rgba(0,0,0,0)";
    } else {
        welcomeModal();
    };
    var x = document.getElementById("counter").innerHTML = Math.round(++amount) + "c";
}

//Rate of change
var amountDelta = 0;

//Updates every 50ms.
function perSecond() {
    amountDelta = u1count * u1Delta + u2count * u2Delta;
    amount += amountDelta / increasePer;
    document.getElementById("counter").innerHTML = Math.round(amount) + "c";
    document.querySelector("#delta").innerHTML = amountDelta + "c/s";
    document.querySelector("#u1deltaCurrent").innerHTML = "Currently mining " + u1Delta + "c/s with " + u1count + " Nokias.";
    document.querySelector("#u2deltaCurrent").innerHTML = "Currently mining " + u2count * u2Delta + "c/s with " + u2count + " Old Laptops.";
}

//upgrade1
var message = document.getElementById("message");
var u1cost = 100;
var u1count = 0;
const u1Delta = 1;

function upgrade1() {
    if (amount >= u1cost) {
        amount -= u1cost;
        u1cost = u1cost + 20;
        u1count++;

        message.innerHTML = "You bought an upgrade!"
        message.style.color = "white";
        setTimeout(function () {
            message.style.color = "rgba(0,0,0,0)"
        }, 2000);
        document.getElementById("u1cost").innerHTML = "Cost: " + u1cost + " c";
    } else {
        noMoney();
    }
}

var z = document.getElementById("u1button")
z.addEventListener("click", function () {
    upgrade1();
});

//upgrade 2
var u2cost = 1000;
var u2count = 0;
const u2Delta = 5;

function u2() {
    if (amount >= u2cost) {
        amount -= u2cost;
        u2cost = u2cost + 100;
        u2count++;

        document.getElementById("u2").style.borderColor = "#070030";
        message.innerHTML = "You bought an upgrade!"
        message.style.color = "white";
        setTimeout(function () {
            message.style.color = "rgba(0,0,0,0)"
        }, 2000);
        document.getElementById("u2cost").innerHTML = "Cost: " + u2cost + " c"
    } else {
        noMoney();
    }
}
var q = document.getElementById("u2button")
q.addEventListener("click", function () {
    console.log("hej");
    u2();
})

//error
function noMoney() {
    message.innerHTML = "You do not have enough currency for this upgrade."
    message.style.color = "red";
    setTimeout(function () {
        message.style.color = "rgba(0,0,0,0)"
    }, 2000);
}

//menu
var open = false;

function menu() {
    var btn = document.querySelector("#sideMenu").style;
    var arrow = document.getElementById("Layer_1").style;
    if (open) {
        btn.right = "-400px";
        open = false;
        arrow.transform = "rotate(180deg)"
    } else {
        btn.right = "0px";
        open = true;
        arrow.transform = "rotate(0deg)"
    }
}
var menuButton = document.querySelector("#menuButton")
menuButton.addEventListener("click", function () {
    //console.log(open);
    menu();
})

//disclaimer on first click
var modal = document.querySelector("#welcomeModal");

function welcomeModal() {
    modal.style.top = "20px";
}

function closeWelcomeModal() {
    modal.style.top = "-100%";
}
var close = document.getElementById("gotit")
close.addEventListener("click", function () {
    closeWelcomeModal();
});
