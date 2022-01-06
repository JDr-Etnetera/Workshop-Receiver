input.onButtonPressed(Button.A, function () {
    radio.sendValue("A", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("B", 1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("S", 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "C") {
        serial.writeValue("C", value)
    } else if (name == "D") {
        serial.writeValue("D", value)
    }
})
radio.setGroup(61)
