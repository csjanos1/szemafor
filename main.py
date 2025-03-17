pins.set_pull(DigitalPin.P1, PinPullMode.PULL_NONE)
no_of_LEDs = 5
maxlit = 10
strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB_RGB)
strip.set_pixel_color(3,
    neopixel.rgb(randint(0, maxlit), randint(0, maxlit), randint(0, maxlit)))
strip.show()
basic.pause(500)

def szabad():
   a = 0
   
def on_forever():
    index = 0
    while index <= no_of_LEDs - 1:
        strip.set_pixel_color(index,
            neopixel.rgb(randint(0, maxlit), randint(0, maxlit), randint(0, maxlit)))
        strip.show()
        basic.pause(50)
        index += 1

basic.forever(on_forever)
