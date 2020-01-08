function onRegister() {
    var form = document.getElementsByTagName('input');
    var username = form[0].value;
    var email = form[1].value;
    var password = form[2].value;
    var male = form[3].checked;
    var female = form[4].checked;
    var subscribe = form[5].checked;
    var notSubscribe = form[6].checked;

    if (username === "" || email === "" || password === "" ||
        (!male && !female) || (!subscribe && !notSubscribe)) {
        alert("Please select all necesarry values!");
        return;
    }

    var data = {
        username,
        email,
        password,
        male,
        female,
        subscribe,
        notSubscribe
    };

    console.log();
    alert(JSON.stringify(data));

    document.location.href = 'home.html';
}

function onGenderSelect() {
    var maleGenderSelection = document.getElementById('maleSelectionCheckBox');
    var femaleGenderSelection = document.getElementById('femaleSelectionCheckBox');

    if (maleGenderSelection.checked && femaleGenderSelection.checked ||
        !maleGenderSelection.checked && !femaleGenderSelection.checked) {
        maleGenderSelection.checked = false
        femaleGenderSelection.checked = false
        alert('You cannot be both or neither genders. Reseting. Please select one!');
    }
}