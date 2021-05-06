scene.setBackgroundColor(1)
let zix = sprites.create(assets.image`Zix`, SpriteKind.Player)
animation.runImageAnimation(
zix,
assets.animation`myAnim`,
200,
true
)
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
let brave = sprites.create(assets.image`brave`, SpriteKind.Player)
