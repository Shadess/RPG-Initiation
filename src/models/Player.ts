export default class Player {
  initiation = 0.0;

  name = '';

  constructor(name: string, initiation: number) {
    this.SetInitiation(initiation);
    this.SetName(name);
  }

  Equals(comparePlayer: Player) {
    return comparePlayer instanceof Player
      ? comparePlayer.GetName() === this.name
      : false;
  }

  GetInitiation() {
    return this.initiation;
  }

  GetName() {
    return this.name;
  }

  SetInitiation(init: number) {
    this.initiation = Number.isNaN(init) ? 0 : init;
  }

  SetName(name: string) {
    this.name = String(name);
  }
}
