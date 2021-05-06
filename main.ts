scene.setBackgroundColor(1)
let mySprite = sprites.create(assets.image`Zix`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
