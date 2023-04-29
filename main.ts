input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # . . .
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.pause(2000)
    basic.clearScreen()
    music.playMelody("C5 D A F F A D C5 ", 480)
    basic.showString("Adeu")
})
