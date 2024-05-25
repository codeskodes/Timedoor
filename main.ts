let distance = 0
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 50 && distance > 5) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
