input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.B, function () {
    go = 0
})
let Contact = 0
let go = 0
go = 0
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    if (go == 1) {
        Contact = pins.digitalReadPin(DigitalPin.P2)
        if (Contact == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            pins.analogWritePin(AnalogPin.P0, 100)
            pins.analogWritePin(AnalogPin.P1, 10)
            basic.pause(500)
            pins.analogWritePin(AnalogPin.P0, 10)
            pins.analogWritePin(AnalogPin.P1, 10)
            basic.pause(500)
        } else {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            pins.analogWritePin(AnalogPin.P0, 10)
            pins.analogWritePin(AnalogPin.P1, 100)
            basic.pause(50)
        }
    }
})
basic.forever(function () {
    if (go != 1) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
