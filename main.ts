scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 . . . . . . 2 . . . . . 
    . . 2 . 1 . . . 1 . . 2 . . . . 
    . . 2 . . . . . . . . 2 . . . . 
    . . 2 . . . 1 . . . . 2 . . . . 
    . . 2 . . . . . . . . 2 . . . . 
    . . 2 2 2 . . . . . 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . 2 2 2 . . 2 . . . . 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . 2 2 2 . 2 . . . . . . . . 
    . . . 2 . . . . 2 2 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
game.onUpdate(function () {
	
})
