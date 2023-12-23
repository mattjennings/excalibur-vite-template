import './style.css'
import { resources } from 'vite-plugin-excalibur-resources/runtime'
import hot from 'vite-plugin-excalibur-hmr/hot'

const INITIAL_SCENE = 'level1'

const game = new ex.Engine({
  width: 800,
  height: 600,
  displayMode: ex.DisplayMode.FitScreen,
})

if (import.meta.env.DEV) {
  hot(game)
}

// load all scenes from ./scenes directory
const scenes = import.meta.glob('./scenes/**/*.ts', { eager: true }) as Record<
  string,
  { default: typeof ex.Scene }
>

for (const [key, scene] of Object.entries(scenes)) {
  const name = key.split('/scenes/')[1].split('.ts')[0]
  game.addScene(name, new scene.default())
}

// load resources
const loader = new ex.Loader(resources)

game.start(loader).then(() => {
  game.goToScene(INITIAL_SCENE)
})
