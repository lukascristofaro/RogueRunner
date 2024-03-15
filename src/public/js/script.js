import { createPoliceCar } from './texture/policeCar.js';
import { createMap } from './texture/map.js';
import { map1 } from './map/map1.js';

let player;

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    antialias: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }
    }
}

let game = new Phaser.Game(config);

function preload() {
    this.load.image('policeCar1', 'assets/policeCar1.png');
    this.load.image('policeCar2', 'assets/policeCar2.png');

    this.load.image('roadX', 'assets/roadX.png');
    this.load.image('roadY', 'assets/roadY.png');
    this.load.image('wall', 'assets/wall.png');
}

function create() {
    const { wallLayer } = createMap(this, map1);
    player = createPoliceCar(this, 80, 80);
    this.physics.add.collider(player, wallLayer);
}

function update() {
    const speed = 300;
  
    const cursors = this.input.keyboard.createCursorKeys();
    
    if (cursors.left.isDown) {
      player.setVelocityX(-speed);
      player.setAngle(90);
    } else if (cursors.right.isDown) {
      player.setVelocityX(speed);
        player.setAngle(270);
    }
  
    if (cursors.up.isDown) {
      player.setVelocityY(-speed);
      player.setAngle(180);
    } else if (cursors.down.isDown) {
      player.setVelocityY(speed);
      player.setAngle(0);
    }
}
