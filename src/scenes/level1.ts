import Player from '@/actors/player'

export default class Level1 extends ex.Scene {
  onInitialize() {
    const player = new Player(250, 250)
    this.add(player)
  }
}
