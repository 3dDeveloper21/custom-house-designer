import { Color, GridHelper } from "three";

const createGrid = () =>
{
    const grid = new GridHelper(9, 9);
    grid.rotateX(Math.PI/10);

    return grid;
}

export default createGrid;