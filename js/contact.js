var countdown;
var loop;

var clicks = 0;
var loops = 1;

function onPhotoClick() {
    clicks++;
    if (clicks == 2) {
        showEasterEggElement();
    }
    if (clicks == 3) {
        alert("Easter Egg!")
        loop = setInterval(changeAdress, 1000);
        countdown = setTimeout(alertFromCountdown, 5000);
    }
}

function onAddressClick() {
    if (countdown) {
        stopCountdown();
    }
}

function changeAdress() {
    loops++;
    var addressText = document.getElementById("addressTxt");
    addressText.innerText = 'Strada Rezonantei, nr. ' + loops;
    if (loops === 4)
        clearInterval(loop);
}

function alertFromCountdown() {
    alert("Hello from a countdown");
}

function stopCountdown() {
    clearTimeout(countdown);
    alert("You stopped the countdown!")
}

function showEasterEggElement() {
    var paragraph = document.createElement("p");
    paragraph.innerText = "Surprise! If you click me, I will dissapear";
    paragraph.id = "supriseElement"
    paragraph.addEventListener("click", function() {
        var element = document.getElementById("supriseElement");
        document.body.removeChild(element);
    });
    document.body.appendChild(paragraph);
}