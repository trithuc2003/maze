// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000102020c0c1801020c0202180c0202030a0f0b0b0b0b090b0b0b0b0b0b0b0f17130b0b0b0b0b090b0b0b0b0f0b0b0b0d090b0b010c0c1b0f0b1a0707100b0b0d0a0b0b090b0b0b0b0b0d0f0b090b0b04090f0b0a0b0b0f0b0b0d0b0b0a0b0b04120b0b0a0b0b090f0b0d0b0f090f0b170a0b0b08100f090b0b0d0f0b120b0b0d090b0f0b0806090b0b0d0b0b0a0b0b040a0b0b0b0f0b090f0b0d0b0b090f0b0d0a0b0b0b0b0b090b0b0d0b0b090b0b04090b0b0c0c0c1b0b0f0b0b0f090b0b04120b0b0b0b0b0f0b0b0b0b0b090b0b170a0b0b0b0b0b090b0b0b0b0b0a0b1c04090f0b0b0b0f090b0b0f0b0b090f0b0408070719070608060719060608060705`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.dungeon.stairLarge,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
