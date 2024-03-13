export function createPoliceCar(scene, x, y) {
    var sprite = scene.add.sprite(x, y, 'policeCar1');
    scene.anims.create({
        key: 'policeCar',
        frames: [
            { key: 'policeCar1' },
            { key: 'policeCar2' },
        ],
        frameRate: 2,
        repeat: -1,
    });
    sprite.scaleX = 2;
    sprite.scaleY = 2;
    sprite.play('policeCar');
}