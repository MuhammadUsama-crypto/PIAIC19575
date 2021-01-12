var names = ["Usama", "Tahawer", "Tabish"];
var score = ["450", "300", "455"];
var total = 500;
var  percentage;
for (var i = 0; i< names.length; i++) {
     percentage = score[i]/total * 100;
    document.write("Score of " + names[i] + " is " + score[i] +"." + "Percentage : " + percentage + "%" + "<br>");
}