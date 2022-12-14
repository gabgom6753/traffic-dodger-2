info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(10, 115)
    pause(1000)
})
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    pause(2100)
})
