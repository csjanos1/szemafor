pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
let no_of_LEDs = 15
let maxlit = 10
let strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)
/*strip.setPixelColor(3, neopixel.rgb(randint(0, maxlit), randint(0, maxlit), randint(0, maxlit)))
strip.show()
basic.pause(500)*/

function szabad(n: any) {
    let i = 0
    for (i=0; i<n; i++) {
        mutat(0, 0, 7, 500)
        mutat(0, 0, 0, 500)
    }
}

function tilos(n: any) {
    let i = 0
    for (i = 0; i<n; i++) {
        mutat(1, 0, 0, 500)
        mutat(0, 1, 0, 500)
    }
    strip.setPixelColor(12, neopixel.rgb(0, 0, 0))
    strip.show()
}

function mutat(bal: any, jobb: any, also: any, ido: any) {
    strip.setPixelColor(12, neopixel.rgb((bal & 1) * maxlit, (bal & 2) * maxlit, (bal & 4) * maxlit));
    strip.setPixelColor(10, neopixel.rgb((jobb & 1) * maxlit, (jobb & 2) * maxlit, (jobb & 4) * maxlit));
    strip.setPixelColor(1, neopixel.rgb((also & 1) * maxlit, (also & 2) * maxlit, (also & 4) * maxlit));
    strip.show()
    basic.pause(ido)
}

function jelzo(n: any) {
    let i = 0
    for (i = 0; i < n; i++) {
        szabad(10)
        tilos(5)
    }
}


function nezpislog(n: any) {
    let i = 0
    for (i = 0; i < n; i++) {
        mutat(0, 0, 0, 100)
        mutat(4, 4, 0, 1500)
    }
}

function kacsint(n: any) {
    let i = 0
    for (i = 0; i < n; i++) {
        mutat(4, 0, 0, 400)
        mutat(4, 4, 0, 1000)
    }
}

basic.forever(function on_forever() {
    let index = 0
    /*while (index <= no_of_LEDs - 1) {
        strip.setPixelColor(index, neopixel.rgb(randint(0, maxlit), randint(0, maxlit), randint(0, maxlit)))
        strip.show()
        basic.pause(50)
        index += 1
    }*/
    jelzo(3)
    nezpislog(5)
    kacsint(2)
    mutat(4, 4, 1, 2000)
    //nezpislog(1)
    mutat(4, 4, 0, 500)
    mutat(0, 0, 0, 5000)
})
