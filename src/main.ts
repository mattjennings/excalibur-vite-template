import './style.css'
import { resources } from 'vite-plugin-excalibur-resources/runtime'
import { DevLoader } from './loaders/dev'

const INITIAL_SCENE = 'level1'

// load all scenes from ./scenes directory, using filename as scene name
const scenes = import.meta.glob('./scenes/**/*.ts', { eager: true }) as Record<
  string,
  { default: typeof ex.Scene }
>

const loader = import.meta.env.DEV
  ? new DevLoader(resources)
  : new ex.Loader(resources)

const game = new ex.Engine<string>({
  width: 800,
  height: 600,
  displayMode: ex.DisplayMode.FitScreen,
  pixelArt: true,
  scenes: Object.entries(scenes).reduce((acc, [key, scene]) => {
    const name = key.split('/scenes/')[1].split('.ts')[0]

    return {
      ...acc,
      [name]: {
        scene: scene.default,
        loader,
      },
    }
  }, {}),
})

game.start(INITIAL_SCENE, {
  loader,
  inTransition: new ex.FadeInOut({
    duration: 200,
    direction: 'in',
    color: ex.Color.ExcaliburBlue,
  }),
})
