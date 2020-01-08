var apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1'
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var responseObject = JSON.parse(this.responseText);
        console.log("Response from jsonplaceholder API");
        console.log(responseObject);
    }
};
xhttp.open("GET", apiEndpoint, true);
xhttp.send();


var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Fruits Array:", fruits);
console.log("Pushing...");
fruits.push("Apricot");
console.log("New Fruits Array:", fruits);
console.log("Shifting...");
fruits.shift();
console.log("New Fruits Array:", fruits);
console.log("Poping...");
fruits.pop();
console.log("New Fruits Array:", fruits);
console.log("Unshifting...")
fruits.unshift("Melon");
console.log("New Fruits Array:", fruits);
console.log("Slicing...");
var fruits_first = fruits.slice(0, 2);
var fruits_last = fruits.slice(2);
console.log("First New Fruits Array:", fruits_first);
console.log("Second New Fruits Array:", fruits_last);
console.log("Concating...");
fruits = fruits_last.concat(fruits_first)
console.log("Prettified New Fruits Array:", fruits.join(" * "));