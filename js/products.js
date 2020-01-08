var setEffects = false;

function onCategoryClick() {
    setEffects = !setEffects;
    if (setEffects) {
        setValuesOnElements("#FF0000", "2px solid #E8272C");
    } else {
        setValuesOnElements("#FFFF00", "none");
    }
}

function setValuesOnElements(textColor, photoBorder) {
    var photosOfProducts = document.getElementsByClassName("poz");
    var names = document.getElementsByTagName("p");
    for (var name of names) {
        name.style.color = textColor
    }
    for (var photo of photosOfProducts) {
        photo.style.border = photoBorder;
    }
}