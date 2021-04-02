input.onButtonPressed(Button.A, function () {
    lleno += 1
    if (lleno > 2) {
        lleno = 2
    }
    basic.showNumber(lleno)
})
input.onButtonPressed(Button.B, function () {
    lleno += -1
    if (lleno < 0) {
        lleno = 0
    }
    basic.showNumber(lleno)
})
let lleno = 0
lleno = 0
basic.forever(function () {
    if (lleno == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
