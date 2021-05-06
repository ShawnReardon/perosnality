sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    brave.setBounceOnWall(true)
    otherSprite.setVelocity(sprite.vx * -2, sprite.vy * -2)
})
let brave: Sprite = null
scene.setBackgroundColor(1)
let zix = sprites.create(assets.image`Zix`, SpriteKind.Player)
animation.runImageAnimation(
zix,
assets.animation`myAnim`,
200,
true
)
brave = sprites.create(assets.image`brave`, SpriteKind.Player)
controller.moveSprite(zix)
brave.follow(zix)
game.onUpdate(function () {
	
})
