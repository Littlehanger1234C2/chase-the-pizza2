controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(10, 160), randint(10, 120))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 1000)
    scene.cameraShake(4, 1000)
    Loze.setPosition(randint(10, 160), randint(10, 120))
    mySprite.say("OW!", 1000)
})
let Loze: Sprite = null
let pizza: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 1 1 1 2 2 2 2 2 1 1 1 2 2 . 
    2 2 1 f 1 2 2 2 2 2 1 f 1 2 2 2 
    4 4 1 1 1 4 4 4 4 4 1 1 1 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 f f f f f f f f f f f 4 4 4 
    4 4 4 f 1 2 1 2 1 2 1 f 4 4 4 4 
    4 4 4 f 2 2 2 2 2 2 2 f 4 4 4 4 
    5 5 5 f 2 2 2 2 2 2 2 f 5 5 5 5 
    5 5 5 f 2 1 2 1 2 1 2 f 5 5 5 5 
    . 5 5 f f f f f f f f f 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    `)
game.splash("Chase the pizza")
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 1 1 1 5 5 5 5 5 1 1 1 5 5 . 
    5 5 1 f 1 5 5 5 5 5 1 f 1 5 5 5 
    5 5 1 1 1 5 5 5 5 5 1 1 1 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 f f f 5 5 5 5 5 f f f 5 5 5 
    5 5 5 f 5 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 f 5 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 f 5 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 f 5 5 5 5 5 5 5 f 5 5 5 5 
    . 5 5 f f f f f f f f f 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
Loze = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e a a b . . 
    . . . . . . b b e 3 2 e a a . . 
    . . . . b b a a e 2 2 e a a a . 
    . . b b a a a a a e e a a a a . 
    b b a a a a a a a a a a a a a a 
    b a a a d d d d a a a a a d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Enemy)
forever(function () {
    info.setLife(3)
})
