let i: number;
for (let r = 0; r < 100; r++) {
    for (i = 0; i < 25; i++) {
        plotNumberBrightness(i, 255 - i * 10 + 5)
    }
    basic.clearScreen()
    for (i = 0; i < 25; i++) {
        plotNumberBrightness(i, i * 10 + 5)
    }
    basic.clearScreen()
}
//  light or dim leds to display a new number
function showNumberWithLeds(prevNum: any, newNum: any) {
    
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

