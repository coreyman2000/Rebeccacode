input.onButtonPressed(Button.B, function () {
    khj = randint(0, 2)
    if (khj == 0) {
        basic.showIcon(IconNames.Surprised)
    } else if (khj == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.showIcon(IconNames.Chessboard)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Confused)
        basic.showIcon(IconNames.Confused)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
    }
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Happy)
})
let khj = 0
khj = -1
basic.showString("Hi!")
basic.clearScreen()
basic.forever(function () {
	
})
