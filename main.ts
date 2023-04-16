input.onGesture(Gesture.EightG, function () {
    Crashed += 1
    serial.writeLine("Times crashed (8g) " + Crashed)
    basic.showIcon(IconNames.No)
    music.playMelody("C5 - C5 - C5 - C5 - ", 1400)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Safety score:%" + Safety_score)
})
input.onGesture(Gesture.FreeFall, function () {
    Droped += 1
    serial.writeLine("Times dropped " + Droped)
    basic.showIcon(IconNames.No)
    music.playMelody("C5 - C5 - C5 - C5 - ", 1400)
    basic.clearScreen()
})
input.onGesture(Gesture.SixG, function () {
    Crashed += 1
    serial.writeLine("Times crashed (6g) " + Crashed)
    basic.showIcon(IconNames.No)
    music.playMelody("C5 - C5 - C5 - C5 - ", 1400)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showString("Unmuted")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showString("muted")
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Testing...")
})
input.onGesture(Gesture.ThreeG, function () {
    Crashed += 1
    serial.writeLine("Times crashed (3g) " + Crashed)
    basic.showIcon(IconNames.No)
    music.playMelody("C5 - C5 - C5 - C5 - ", 1400)
    basic.clearScreen()
})
let All_value = 0
let Safety_score = 0
let Droped = 0
let Crashed = 0
Crashed = 0
Droped = 0
basic.forever(function () {
    All_value = Crashed + Droped
    Safety_score = 100 - All_value
    if (Safety_score < 1) {
        Safety_score = 0
    }
})
