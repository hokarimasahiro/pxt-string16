// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    let text = "Aaあアｱ"
    for (let i = 0; i < 5; i++) {
        basic.showNumber(i)
        basic.showNumber(text.charCodeAt(i))
        basic.showNumber(i)
        basic.showNumber(char16.charCodeAt16(text, i))
    }
})
