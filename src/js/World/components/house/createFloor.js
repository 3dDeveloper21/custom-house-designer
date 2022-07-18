import { Group, Shape, Vector2 } from 'three';

const createOutline = () => {
  const joint = new Group()

  let shape = new Shape()
  shape.moveTo()

  let roomNodeList = [
    new Vector2(0, 0),
    new Vector2(0, 7),
    new Vector2(-3, 7),
    new Vector2(-3, 6),
    new Vector2(-5, 6),
    new Vector2(-5, 7),
    new Vector2(-8, 7),
    new Vector2(-8, 5.5),
    new Vector2(-9.5, 5.5),
    new Vector2(-9.5, 3),
    new Vector2(-4.5, 3),
    new Vector2(-4.5, 0),
    new Vector2(0, 0),
  ]

  shape.moveTo(roomNodeList[0].x, roomNodeList[0].y)

  for (let i = 0; i < roomNodeList.length; i++) {
    let x = roomNodeList[i].x,
      y = roomNodeList[i].y

    shape.lineTo(x, y)
  }
}

export default createOutline
