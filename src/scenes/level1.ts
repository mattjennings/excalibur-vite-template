import Player from '@/actors/player'

export default class Level1 extends ex.Scene {
  onActivate() {
    const player = new Player(350, 250)
    this.add(player)
  }
}
