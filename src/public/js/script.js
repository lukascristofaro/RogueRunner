import { createPoliceCar } from './texture/policeCar.js';
import {createMap} from './texture/map.js';
import {map1} from './map/map1.js';

let player;

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

    this.load.image('roadX', 'assets/roadX.png');
    this.load.image('roadY', 'assets/roadY.png');

}

function create() {
    player = createPoliceCar(this, 100, 100);
    createMap(this, map1);
}

function update() {
    var cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        player.x -= 5;
    } else if (cursors.right.isDown) {
        player.x += 5;
    }

    if (cursors.up.isDown) {
        player.y -= 5;
    } else if (cursors.down.isDown) {
        player.y += 5;
    }
}