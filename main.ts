basic.forever(function () {
    if (1 == pins.digitalReadPin(DigitalPin.P0)) {
        wuKong.setAllMotor(-100, -100)
    } else if (30 > Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P15)) {
        wuKong.setAllMotor(1000, 1000)
    } else {
        wuKong.setAllMotor(100, -100)
    }
})
