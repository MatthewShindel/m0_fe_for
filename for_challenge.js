// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var i = 0; i < words.length; i++){
    if(words[i].length === 3){
        console.log(words[i]);
    }
}