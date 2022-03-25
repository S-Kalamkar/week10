function askName() {
    var name = prompt("What is your name?")
    return name
}

function askTemp() {
    var temp = prompt("What is the temprature?")
    return temp
}

function convertCTF(cels) {
    var ctf = ((cels * 9)/5)+32
    return ctf
}

function convertFTC(fahr) {
    var ftc = ((fahr - 32 )*5)/9
    return ftc
}

function askType(x) {
    var type = prompt("Would you like to convert to celsius or fahrenheit? Type 'C' to convert to celsius and type 'F' to convert to fahrenheit.")
    if (type == "F") {
        alert(`${x} degrees celsius is ${convertCTF(x)} degrees fahrenheit`)
    
    } else {
        alert(`${x} degrees fahrenheit is ${convertFTC(x)} degrees celsius`)
    
    }   
}

alert(`Hello ${askName()}!`)

var temp = askTemp()
askType(temp)

