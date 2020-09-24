let temperature = 0
input.onButtonPressed(Button.A, function () {
    if (temperature == 10) {
        basic.showNumber(temperature)
        basic.showString("Ski time!")
    } else if (temperature == 20) {
        basic.showNumber(temperature)
        basic.showString("Picnic time!")
    } else if (temperature == 30) {
        basic.showNumber(temperature)
        basic.showString("Beach time!")
    } else if (temperature == 40) {
        basic.showNumber(temperature)
        basic.showString("It is better idea to stay home")
    } else {
        basic.showNumber(temperature)
    }
})
basic.forever(function () {
    temperature = input.temperature()
})
