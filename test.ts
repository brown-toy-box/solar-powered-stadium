controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        solarPanelSprite = sprites.create(solar_assets.smallPanel, SpriteKind.SolarPanel)
        solarPanelSprite.setPosition(shadowSprite.x, shadowSprite.y)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Sunlight, SpriteKind.SolarPanel, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
let sunlightSprite: Sprite = null
let solarPanelSprite: Sprite = null
let shadowSprite: Sprite = null
scene.setBackgroundColor(9)
let sunSprite = sprites.create(solar_assets.sun, SpriteKind.Scenery)
let lawnSprite = sprites.create(solar_assets.field, SpriteKind.Scenery)
lawnSprite.setPosition(80, 90)
let heroSprite = sprites.create(solar_assets.player1, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
shadowSprite = sprites.create(solar_assets.smallPlacer, SpriteKind.Player)
solar.attachShadowToPlayer(shadowSprite, heroSprite)
solar.setInitialCredits(5)
solar.setupDay(1)
solar.startDay()
game.onUpdateInterval(100, function () {
    solar.moveSun(sunSprite)
    if (solar.isSunlightMade()) {
        sunlightSprite = sprites.createProjectileFromSprite(solar_assets.sunlight, sunSprite, 0, 100)
        sunlightSprite.setKind(SpriteKind.Sunlight)
        sunlightSprite.x += 8 - randint(0, 16)
    }
})
