''' t1 = input.running_time_micros()
for r in range(100):
    for i in range(25):
        plotNumberBrightness(i,255-i*10+5)
    basic.clear_screen()
    for i in range(25):
        plotNumberBrightness(i,i*10+5)
    basic.clear_screen()
t2 = input.running_time_micros()
print("\n\n\n"+str((t2-t1)/1000)+"\n\n\n") '''

for i in range(26):
    showNumberWithLeds(25-i)
    basic.pause(1000)

# light or dim leds to display a new number
def showNumberWithLeds(newNum):
    for i in range(newNum):
        plotNumber(i)
    for i in range(newNum,25):
        unplotNumber(i)


def plotNumber(num):
    l = num // 5
    c = num % 5
    led.plot(c,l)

def plotNumberBrightness(num, br):
    l = num // 5
    c = num % 5
    led.plot_brightness(c, l, br)

def unplotNumber(num):
    l = num // 5
    c = num % 5
    led.unplot(c,l)

def toggleNumber(num):
    l = num // 5
    c = num % 5
    led.toggle(c,l)

def pointNumber(num):
    l = num // 5
    c = num % 5
    return led.point(c,l)

def pointNumberBrightness(num):
    l = num // 5
    c = num % 5
    return led.point_brightness(c, l)

