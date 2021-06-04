export default class Player {
    initiation = 0.0;
    name = '';

    constructor(name, initiation) {
        this.SetInitiation(initiation);
        this.SetName(name);
    }

    Equals(comparePlayer) {
        return (comparePlayer instanceof Player) ? comparePlayer.GetName() === this.name : false;
    }

    GetInitiation() {
        return this.initiation;
    }

    GetName() {
        return this.name;
    }

    SetInitiation(init) {
        this.initiation = isNaN(parseFloat(init)) ? 0 : parseFloat(init);
    }

    SetName(name) {
        this.name = String(name);
    }
}