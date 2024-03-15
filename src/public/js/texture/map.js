export function createMap(scene, mapData) {
    const TILE_SIZE = 50;
    const wallLayer = scene.physics.add.group({ immovable: true });

    for (let i = 0; i < mapData.length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            let tile = mapData[i][j];
            let posX = j * TILE_SIZE;
            let posY = i * TILE_SIZE;

            if (tile === 1) {
                let wall = scene.physics.add.image(posX + TILE_SIZE / 2, posY + TILE_SIZE / 2, 'wall').setOrigin(0.5, 0.5);
                wall.setScale(TILE_SIZE / wall.width);
                wall.body.setImmovable(true);
                wallLayer.add(wall);
            } else if (tile === 0 && mapData[i][j - 1] === 0) {
                let roadX = scene.add.image(posX, posY, 'roadX').setOrigin(0, 0);
                roadX.setScale(TILE_SIZE / roadX.width);
            } else if (tile === 0 && mapData[i][j - 1] !== 0) {
                let roadY = scene.add.image(posX, posY, 'roadY').setOrigin(0, 0);
                roadY.setScale(TILE_SIZE / roadY.width);
            }
        }
    }

    return { wallLayer };
}