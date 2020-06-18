document.addEventListener('DOMContentLoaded', (event) => {
    let text = "";
    for (let counter = 1; counter <= 100; counter++) {
        text = counter + " ";
        if (text % 3 == 0 && text % 7 == 0) {
            text += "FizzBuzz"
        }
        else if (text % 7 == 0) {
            text += "Buzz"
        }
        else if (text % 3 == 0) {
            text += "Fizz"
        }
        else {
            text += counter;
        }
        document.getElementById("numbers").innerText += text + "\r\n";
    }
})
