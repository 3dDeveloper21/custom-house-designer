import createGrid from './house/grid';

const house = (scene) => {
    const grid = createGrid();

    scene.add(grid);
}

export default house;