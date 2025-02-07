//% weight=100 color=#cc1280 icon="F" block="WhaleySans Font"
namespace whaleysans {
    let FONT = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 1
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1], // 2
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1], // 3
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], // 4
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1], // 5
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1], // 6
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 7
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]  // 9
    ]
    
    let img: Image = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
    `)

    /**
     * show a number
     * @param dat is number will be show, eg: 10
     */
    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
    export function showNumber(dat: number): void {
        img.clear()

        // กรณีตัวเลขเกินช่วงที่กำหนด (-9 ถึง 99)
        if (dat < -9 || dat > 99) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . # . #
                # . . . .
                # . . . .
            `, 10)
            return
        }

        if (dat >= 10 && dat <= 99) {
            // แสดงเลข 2 หลัก
            let a = FONT[Math.idiv(dat, 10) % 10];
            let b = FONT[dat % 10];

            for (let i = 0; i < 5; i++) {
                img.setPixel(0, i, a[i * 2] == 1)
                img.setPixel(1, i, a[i * 2 + 1] == 1)
                img.setPixel(3, i, b[i * 2] == 1)
                img.setPixel(4, i, b[i * 2 + 1] == 1)
            }
        } else {
            // แสดงเลขหลักเดียวที่คอลัมน์ขวา
            let isNegative = dat < 0;
            let num = Math.abs(dat) % 10;
            let n = FONT[num];

            for (let i = 0; i < 5; i++) {
                img.setPixel(3, i, n[i * 2] == 1)
                img.setPixel(4, i, n[i * 2 + 1] == 1)
            }

            if (isNegative) {
                // ใส่เครื่องหมายลบที่คอลัมน์แรก (ตำแหน่งแนวนอน: 0, แถวกลาง)
                img.setPixel(0, 2, true)
            }
        }

        img.showImage(0, 10);
    }
}
