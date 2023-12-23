import Player from '@/actors/player'
import { Scene } from 'excalibur'

export default class Level1 extends Scene {
  onInitialize() {
    const player = new Player(250, 250)
    this.add(player)
  }
}
