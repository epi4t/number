//% weight=100 color=#cc1280 icon="F" block="WhaleySans Font"
namespace whaleysans {
    let FONT = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  // 0
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],  // 1
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],  // 2
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1],  // 3
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],  // 4
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],  // 5
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],  // 6
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1],  // 7
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],  // 8
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]   // 9
    ]

    let img: Image = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    /**
     * Show a number
     * @param dat is number to be shown, eg: 10
     */
    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
    //% dat.min=-99 dat.max=99
    export function showNumber(dat: number): void {
        if (dat < -99 || dat > 99) {
            dat = 0; // แสดง 00 ถ้าเกินช่วง
        }

        img.clear()

        if (dat >= 10) {
            // แสดงเลข 10-99 ปกติ
            let a = FONT[Math.idiv(dat, 10) % 10];
            let b = FONT[dat % 10];

            for (let i = 0; i < 5; i++) {
                img.setPixel(0, i, 1 == a[i * 2])
                img.setPixel(1, i, 1 == a[i * 2 + 1])
                img.setPixel(3, i, 1 == b[i * 2])
                img.setPixel(4, i, 1 == b[i * 2 + 1])
            }
        } else if (dat >= 0) {
            // แสดงเลข 0-9 (หลักเดียว)
            let b = FONT[dat];

            for (let i = 0; i < 5; i++) {
                img.setPixel(3, i, 1 == b[i * 2])
                img.setPixel(4, i, 1 == b[i * 2 + 1])
            }
        } else if (dat >= -9) {
            // แสดงเลข -1 ถึง -9 (ลบ 2 ช่อง)
            let b = FONT[-dat];

            for (let i = 0; i < 5; i++) {
                img.setPixel(0, i, 1) // เครื่องหมายลบ (ยาว 2 ช่อง)
                img.setPixel(1, i, 1)
                img.setPixel(3, i, 1 == b[i * 2])
                img.setPixel(4, i, 1 == b[i * 2 + 1])
            }
        } else {
            // แสดงเลข -10 ถึง -99 (ลบ 1 ช่อง + ตัวเลขติดกัน)
            let a = FONT[Math.idiv(-dat, 10) % 10];
            let b = FONT[-dat % 10];

            for (let i = 0; i < 5; i++) {
                img.setPixel(0, i, 1) // เครื่องหมายลบ (1 ช่อง)
                img.setPixel(2, i, 1 == a[i * 2])
                img.setPixel(3, i, 1 == a[i * 2 + 1])
                img.setPixel(4, i, 1 == b[i * 2])
            }
        }

        img.showImage(0, 10);
    }
}
