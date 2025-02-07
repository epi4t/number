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
    ];
    
    let img: Image = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
    `);

    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
    //% dat.min=-99 dat.max=99
    export function showNumber(dat: number): void {
        if (dat < -99 || dat > 99) {
            dat = 0; // นอกเหนือขอบเขตให้แสดง 00
        }

        img.clear();

        if (dat < 0) {
            dat = Math.abs(dat); // ทำให้เป็นค่าบวกชั่วคราว

            if (dat < 10) {
                // เลขติดลบหลักเดียว -> เครื่องหมายลบ 2 ช่อง
                for (let i = 1; i < 4; i++) {
                    img.setPixel(i, 2, true);
                }
                let b = FONT[dat];
                for (let i = 0; i < 5; i++) {
                    img.setPixel(3, i, 1 == b[i * 2]);
                    img.setPixel(4, i, 1 == b[i * 2 + 1]);
                }
            } else {
                // เลขติดลบ 2 หลัก -> เครื่องหมายลบ 1 ช่อง + ตัวเลขชิดกัน
                for (let i = 0; i < 5; i++) {
                    img.setPixel(0, 2, true); // เครื่องหมายลบ
                }
                let a = FONT[Math.idiv(dat, 10) % 10];
                let b = FONT[dat % 10];
                for (let i = 0; i < 5; i++) {
                    img.setPixel(1, i, 1 == a[i * 2]);
                    img.setPixel(2, i, 1 == a[i * 2 + 1]);
                    img.setPixel(3, i, 1 == b[i * 2]);
                    img.setPixel(4, i, 1 == b[i * 2 + 1]);
                }
            }
        } else {
            // เลขปกติ (0-99)
            if (dat < 10) {
                // หลักเดียว
                let b = FONT[dat];
                for (let i = 0; i < 5; i++) {
                    img.setPixel(3, i, 1 == b[i * 2]);
                    img.setPixel(4, i, 1 == b[i * 2 + 1]);
                }
            } else {
                // สองหลัก
                let a = FONT[Math.idiv(dat, 10) % 10];
                let b = FONT[dat % 10];
                for (let i = 0; i < 5; i++) {
                    img.setPixel(0, i, 1 == a[i * 2]);
                    img.setPixel(1, i, 1 == a[i * 2 + 1]);
                    img.setPixel(3, i, 1 == b[i * 2]);
                    img.setPixel(4, i, 1 == b[i * 2 + 1]);
                }
            }
        }

        img.showImage(0, 10);
    }
}
