/* desafio 4.3 y 4.4 */
var color;
var divkey = document.querySelector('#key')
var divkey2 = document.querySelector('#key2')

document.addEventListener("keydown", function (event) {
    if (event.key == "a" || event.key == "A") {
        color = "pink";
        divkey.style.backgroundColor = color;
    } else if (event.key == "s" || event.key == "S") {
        color = "orange";
        divkey.style.backgroundColor = color;
    } else if (event.key == "d" || event.key == "D") {
        color = "lightblue";
        divkey.style.backgroundColor = color;
    } else if (event.key == "q" || event.key == "Q") {
        color = "violet";
        divkey2.style.backgroundColor = color;
    } else if (event.key == "w" || event.key == "W") {
        color = "grey";
        divkey2.style.backgroundColor = color;
    } else if (event.key == "e" || event.key == "E") {
        color = "brown";
        divkey2.style.backgroundColor = color;
    }
})

