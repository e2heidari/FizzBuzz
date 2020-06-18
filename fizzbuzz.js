document.addEventListener('DOMContentLoaded', (event) => {
    let text = ""
    let counter;
    for (let counter = 1; counter <= 100; counter++) {
        text += counter + " ";
        if (text % 3 == 0) {
            text = "Fizz"
        }
        else if (text % 7 == 0) {
            text = "Buzz"
        }
        document.getElementById("numbers").innerText = text;
    }
})
