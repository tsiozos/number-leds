let i: number;
/**  t1 = input.running_time_micros()
for r in range(100):
    for i in range(25):
        plotNumberBrightness(i,255-i*10+5)
    basic.clear_screen()
    for i in range(25):
        plotNumberBrightness(i,i*10+5)
    basic.clear_screen()
t2 = input.running_time_micros()
print("


"+str((t2-t1)/1000)+"


") 
 */
for (i = 0; i < 26; i++) {
    showNumberWithLeds(25 - i)
    basic.pause(1000)
}
//  light or dim leds to display a new number
function showNumberWithLeds(newNum: number) {
    let i: number;
    for (i = 0; i < newNum; i++) {
        plotNumber(i)
    }
    for (i = newNum; i < 25; i++) {
        unplotNumber(i)
    }
}

function plotNumber(num: number) {
    let l = Math.idiv(num, 5)
    let c = num % 5
    led.plot(c, l)
}

function plotNumberBrightness(num: number, br: number) {
    let l = Math.idiv(num, 5)
    let c = num % 5
    led.plotBrightness(c, l, br)
}

function unplotNumber(num: number) {
    let l = Math.idiv(num, 5)
    let c = num % 5
    led.unplot(c, l)
}

function toggleNumber(num: number) {
    let l = Math.idiv(num, 5)
    let c = num % 5
    led.toggle(c, l)
}

function pointNumber(num: number): boolean {
    let l = Math.idiv(num, 5)
    let c = num % 5
    return led.point(c, l)
}

function pointNumberBrightness(num: number): number {
    let l = Math.idiv(num, 5)
    let c = num % 5
    return led.pointBrightness(c, l)
}

