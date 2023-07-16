let texxtbox = document.getElementById("textbox");

texxtbox.addEventListener('input', function() {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char; // Update the "let" span with the letter count
text=text.trim();
let words=text.split(" ");
document.getElementById("wor").innerHTML=words.length;
});
