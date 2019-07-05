//% weight=70 color=#1eb0f0 icon="\u3041" block="char16"
namespace char16 {

    //% shim=char16::getNumber16At
    function getNumber16At(s: string, n: number): number {
        return 0;
    }
    /**
      * charcode at by utf16 code
      * @param s original string, eg: "abcdefg"
      * @param n data position, eg: 3
      */
    //% blockId=char_code_at16 block="char code at %n in %s by utf16"
    export function charCodeAt16(s: string, n: number): number {
        return (getNumber16At(s, n));
    }
}