export function createMap(scene, mapData) {
    const TILE_SIZE = 50;
    const wallLayer = scene.physics.add.group({ immovable: true });
    const mapWidth = mapData[0].length * TILE_SIZE;
    const mapHeight = mapData.length * TILE_SIZE;

    const offsetX = (scene.cameras.main.width - mapWidth) / 2;
    const offsetY = (scene.cameras.main.height - mapHeight) / 2;

    for (let i = 0; i < mapData.length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            let tile = mapData[i][j];
            let posX = j * TILE_SIZE + offsetX;
            let posY = i * TILE_SIZE + offsetY;

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
