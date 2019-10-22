class Tamagochi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.sleepLevel = 100;
    this.playLevel = 100;
  }

  //These are the drain amounts

  hungerDrain() {
    setInterval(() => {
      this.foodLevel -= 5;
    }, 1000);
  }

  sleepDrain() {
    setInterval(() => {
      this.sleepLevel -= 2;
    }, 1000);
  }

  playDrain() {
    setInterval(() => {
      this.playLevel -= 3;
    }, 1000);
  }

  //These are the functions to feed/sleep/play with the Tamagatchi

  feed() {
    this.foodLevel += 20;
  }

  sleep() {
    this.sleepLevel += 10;
  }

  play() {
    this.playLevel += 10;
  }

  didTamagatchiDie() {
    if (this.foodLevel === 0 || this.sleepLevel === 0 || this.playLevel === 0) {
      return true;
    } else return false;
  }
}

class Draсo extends Tamagochi {
  constructor(name) {
    super(name);
    this.fireLevel = 100;
    this.flyLevel = 100;
  }

  //These are the drain amounts

  fireDrain() {
    setInterval(() => {
      this.sleepLevel -= 2;
    }, 1000);
  }

  flyDrain() {
    setInterval(() => {
      this.playLevel -= 1;
    }, 1000);
  }

  //These are the functions to fire/fly with the Draсo

  fire() {
    this.foodLevel += 30;
  }

  fly() {
    this.sleepLevel += 20;
  }

  didDracoRanAway() {
    if (this.fireLevel === 0 || this.flyLevel === 0) {
      return true;
    } else return false;
  }
}
