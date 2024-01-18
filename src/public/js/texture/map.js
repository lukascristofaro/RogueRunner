export function createMap(scene, mapData) {
    const TILE_SIZE = 30; // Remplacez par la taille réelle de vos tuiles

    for (let i = 0; i < mapData.length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            let tile = mapData[i][j];
            //si le tile est 0 et que le tile a gauche est 0 aussi on rajoute un route X sinon on rajoute un route Y
            if (tile === 0 && mapData[i][j - 1] === 0) {
                scene.add.image(j * TILE_SIZE, i * TILE_SIZE, 'roadX').setOrigin(0, 0);
            }
            else if (tile === 0 && mapData[i][j - 1] !== 0) {
                scene.add.image(j * TILE_SIZE, i * TILE_SIZE, 'roadY').setOrigin(0, 0);
            }
        }
    }
}