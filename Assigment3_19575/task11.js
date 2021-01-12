var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery.What do you want to order sir/mam");
var found = false;
for (var i = 0; i <= items.length; i++){ 
if (items[i] === search.toLowerCase()) {
    document.write(search + " is Available in at  index " + i + " in our bakery");
    found = true; 
    break;
}
}
if(!found){
    document.write(search + " is not  Available in at in our bakery")
    };
