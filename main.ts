namespace SpriteKind {
    export const brave = SpriteKind.create()
}
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
    brave.setFlag(SpriteFlag.ShowPhysics, true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.brave, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
})
function spawnDeBlubs (num: number) {
    for (let index = 0; index <= num; index++) {
        deBlub = sprites.create(assets.image`deBlub`, SpriteKind.Enemy)
        deBlub.setPosition(15, 10)
        if (randint(0, 1) == 0) {
            deBlub.setVelocity(randint(-150, 150), 0)
        } else {
            deBlub.setVelocity(0, randint(-150, 150))
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
})
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
brave.setFlag(SpriteFlag.GhostThroughSprites, false)
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
