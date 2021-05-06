namespace SpriteKind {
    export const brave = SpriteKind.create()
    export const laser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function introDia () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        ...7777............7777..
        ...77777777777777777777..
        aaa77777777777777777777aa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        77aaaaaaaaaaaaaaaaaaaaaa7
        7aaaaaaaaaaaaaaaaaaaaaaaa
        77aaaaaaaaaaaaaaaaaaaaaa7
        77a77777777777777777777a7
        aaa77777777777777777777aa
        ...7777............7777..
        `)
    game.showLongText("AHHHHHHHHHHHHHHH", DialogLayout.Full)
    game.showLongText("Who are WE?", DialogLayout.Bottom)
    game.showLongText("WE are ZIX", DialogLayout.Top)
    game.showLongText("I want to DESTROY", DialogLayout.Top)
    game.showLongText("Can't we just...idk...not?", DialogLayout.Bottom)
    game.showLongText("How can WE be the same person?", DialogLayout.Top)
    game.showLongText("I kind of like it. We have balance. ", DialogLayout.Bottom)
    game.showLongText("I suppose you would be weak without me.", DialogLayout.Top)
    game.showLongText("Not...what I meant. But sure. Something like that.", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.brave, function (sprite, otherSprite) {
    brave.setBounceOnWall(true)
    otherSprite.setVelocity(sprite.vx * -5, sprite.vy * -5)
    brave.setFlag(SpriteFlag.ShowPhysics, false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.brave, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
})
function spawnDeBlubs (num: number) {
    for (let index = 0; index <= num; index++) {
        deBlub = sprites.create(assets.image`deBlub`, SpriteKind.Enemy)
        deBlub.setPosition(randint(10, 300), randint(10, 300))
        if (randint(0, 1) == 0) {
            if (randint(0, 1) == 0) {
                deBlub.setVelocity(randint(15, 5) * 10, 0)
            } else {
                deBlub.setVelocity(randint(15, 5) * -10, 0)
            }
        } else {
            if (randint(0, 1) == 0) {
                deBlub.setVelocity(0, randint(15, 5) * 10)
            } else {
                deBlub.setVelocity(0, randint(15, 5) * -10)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
})
let laser: Sprite = null
let deBlub: Sprite = null
let brave: Sprite = null
scene.setBackgroundColor(5)
let zix = sprites.create(assets.image`Zix`, SpriteKind.Player)
animation.runImageAnimation(
zix,
assets.animation`myAnim`,
200,
true
)
brave = sprites.create(assets.image`brave`, SpriteKind.brave)
controller.moveSprite(zix)
brave.follow(zix)
info.setScore(1)
game.onUpdate(function () {
	
})
game.onUpdateInterval(2000, function () {
    if (info.score() == 0) {
        game.over(false)
    }
    spawnDeBlubs(4)
})
forever(function () {
    if (brave.y < 35) {
        for (let index = 0; index <= 1; index++) {
            laser = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.laser)
            laser.setFlag(SpriteFlag.AutoDestroy, true)
            laser.setPosition(brave.x + index * 10, brave.y)
            laser.setVelocity(100, 0)
            laser = sprites.create(assets.image`otherlaswr`, SpriteKind.laser)
            laser.setPosition(brave.x + index * -10, brave.y)
            laser.setFlag(SpriteFlag.AutoDestroy, true)
            laser.setVelocity(-100, 0)
        }
    }
})
