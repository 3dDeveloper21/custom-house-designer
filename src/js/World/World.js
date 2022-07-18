import { createCamera } from './components/camera'
import { createCube, cubeTick } from './components/cube'
import { createScene } from './components/scene'
import { createLights } from './components/lights.js'

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'
// import createOutline from './components/house/createFloor'
import house from './components/house';

// These variables are module-scoped: we can not access them
// from outside the module
let camera, renderer, scene, loop

class World {
  constructor(container, sizes) {
    camera = createCamera(sizes)
    scene = createScene()
    renderer = createRenderer(container, sizes)

    const controls = createControls(camera, renderer.domElement)

    const light = createLights()

    // const roomOutline = createOutline()
    // roomOutline()

    loop = new Loop(camera, scene, renderer)

    loop.updatables.push(cubeTick)

    // Add childern/scene objects to the scene
    scene.add(light.ambientLight, light.mainLight)

    // Add house component(s)
    house(scene);

    const resizer = new Resizer(camera, renderer, sizes)
  }

  render() {
    // Draw a single frame
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
