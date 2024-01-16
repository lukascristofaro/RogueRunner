const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    antialias: false,
    scene: {
        preload : preload,
        create : create,
        update: update
    }
}

let game = new Phaser.Game(config);

function preload() {
    this.load.image('policeCar1', 'assets/policeCar1.png');
    this.load.image('policeCar2', 'assets/policeCar2.png');
}

function create() {
    var sprite = this.add.sprite(100, 300, 'policeCar1');
    this.anims.create({
        key : 'policeCar',
        frames : [
            {key : 'policeCar1'},
            {key : 'policeCar2'},
        ],
        frameRate : 2,
        repeat: -1,
    })
    sprite.scaleX = 2;
    sprite.scaleY = 2;
    sprite.play('policeCar');
}

function update() {

}