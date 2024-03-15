export function createPoliceCar(scene, x, y) {
    var sprite = scene.physics.add.sprite(x, y, 'policeCar1');
    scene.anims.create({
        key: 'policeCar',
        frames: [
            { key: 'policeCar1' },
            { key: 'policeCar2' },
        ],
        frameRate: 2,
        repeat: -1,
    });
    sprite.scaleX = 1;
    sprite.scaleY = 1;
    sprite.play('policeCar');

    return sprite;
}