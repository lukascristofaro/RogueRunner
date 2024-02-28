export function createMap(scene, mapData) {
    const TILE_SIZE = 120; // Remplacez par la taille réelle de vos tuiles

    for (let i = 0; i < mapData.length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            let tile = mapData[i][j];
            let posX = j * TILE_SIZE;
            let posY = i * TILE_SIZE;

            //si le tile est 0 et que le tile a gauche est 0 aussi on rajoute un route X sinon on rajoute un route Y
            if (tile === 0 && mapData[i][j - 1] === 0) {
                let roadX = scene.add.image(posX, posY, 'roadX').setOrigin(0, 0);
                roadX.setScale(TILE_SIZE / roadX.width);
            }
            else if (tile === 0 && mapData[i][j - 1] !== 0) {
                let roadY = scene.add.image(posX, posY, 'roadY').setOrigin(0, 0);
                roadY.setScale(TILE_SIZE / roadY.width);
            }
        }
    }
}