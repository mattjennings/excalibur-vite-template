import Player from '@/actors/player'

export default class Level1 extends ex.Scene {
  onActivate() {
    const player = new Player(250, 250)
    this.add(player)
  }
}
