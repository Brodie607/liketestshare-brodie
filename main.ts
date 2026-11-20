namespace SpriteKind {
    export const alien = SpriteKind.create()
    export const UFO = SpriteKind.create()
}
function spawnAlien (shieldlevel: boolean, alientype: boolean) {
    if (scrawny_alien == true) {
        scrawny_alien = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . 7 . . . . . . . . 7 . . . 
            . . . 7 7 . f . . . f . 7 . . . 
            . . . . 7 . 7 7 7 7 7 . 7 . . . 
            . . . . 7 . 7 7 7 7 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else {
        Mothership = sprites.create(img`
            ..........cccccccccccc..........
            .......cccbbbbbbbbbbbbccc.......
            .....ccbbbbbbbbbbbbbbbbbbcc.....
            ....cbbbbbbbbbbbbbbbbbbbbbbc....
            ...cbbbbbbbbbbbbbbbbbbbbbbbbc...
            .ccbbbbbbbbbbbbbbbbbbbbbbbbbbcc.
            ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .cbbbbbbbbbbbbbbbbbbbbbbbbbbbbc.
            .ccbbbbbbbbbbbbbbbbbbbbbbbbbbcc.
            ...cccbbbbbbbbbbbbbbbbbbbbccc...
            ......cccccccccccccccccccc......
            ............77777777............
            ...........7555555557...........
            ..........775555555577..........
            `, SpriteKind.UFO)
    }
}
let Mothership: Sprite = null
let scrawny_alien = false
let invasionActive = false
let baseDestroyed = false
let turretReady = false
let alienDetected = false
scrawny_alien = false
