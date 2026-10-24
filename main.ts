let number_1 = 0
let number_3 = 0
let number_2 = 0
input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showString("" + (number_1))
})
input.onButtonPressed(Button.AB, function () {
    number_3 = number_1 + number_2
    basic.showString("" + (number_3))
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showString("" + (number_2))
})
input.onGesture(Gesture.Shake, function () {
    number_3 = number_1 - number_2
    basic.showString("" + (number_3))
})
