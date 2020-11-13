input.onButtonPressed(Button.A, function () {
    comment.comment("Generate new random numbers for the array")
    for (let index = 0; index <= 4; index++) {
        list[index] = randint(0, 4) + 1
    }
    displayArray()
})
input.onButtonPressed(Button.B, function () {
    comment.comment("Sort the array using Bubble Sort")
    counter = 1
    while (counter > 0) {
        counter = 0
        for (let index = 0; index <= 3; index++) {
            comment.comment("test order: small, then big?")
            if (list[index] > list[index + 1]) {
                comment.comment("order is reversed; flip positions!")
                temp = list[index]
                list[index] = list[index + 1]
                list[index + 1] = temp
                music.playTone(392, music.beat(BeatFraction.Quarter))
                counter += 1
            } else {
                comment.comment("order is correct!")
                music.playTone(262, music.beat(BeatFraction.Quarter))
            }
            displayArray()
            basic.pause(100)
        }
    }
    music.playMelody("C D E F G A B C5 ", 500)
})
function displayArray () {
    basic.clearScreen()
    for (let column = 0; column <= 4; column++) {
        row = 0
        while (row < list[column]) {
            led.plot(column, 4 - row)
            row += 1
        }
    }
}
let row = 0
let temp = 0
let counter = 0
let list: number[] = []
comment.comment("https://makecode.microbit.org/82555-58488-10353-21972")
list = [4, 2, 5, 1, 3]
displayArray()
