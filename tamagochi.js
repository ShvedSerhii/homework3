class Tamagochi {
  constructor(name) {
    this.name = name
    this.foodLevel = 100
    this.sleepLevel = 100
    this.playLevel = 100
  }

  //These are the drain amounts

  hungerDrain() {
    setInterval(() => {
      this.foodLevel -= 5
    }, 2000)
  }

  sleepDrain() {
    setInterval(() => {
      this.sleepLevel -= 2
    }, 2000)
  }

  playDrain() {
    setInterval(() => {
      this.playLevel -= 3
    }, 2000)
  }

  //These are the functions to feed/sleep/play with the Tamagochi

  food() {
    this.foodLevel += 20
  }

  sleep() {
    this.sleepLevel += 10
  }

  play() {
    this.playLevel += 10
  }
}

class Draсo extends Tamagochi {
  constructor(name) {
    super(name)
    this.fireLevel = 100
    this.flyLevel = 100
  }

  //These are the drain amounts

  fireDrain() {
    setInterval(() => {
      this.fireLevel -= 2
    }, 2000)
  }

  flyDrain() {
    setInterval(() => {
      this.flyLevel -= 1
    }, 2000)
  }

  //These are the functions to fire/fly with the Draсo

  fire() {
    this.fireLevel += 30
  }

  fly() {
    this.flyLevel += 20
  }

  didDracoDie() {
    if (
      this.foodLevel < 0 ||
      this.sleepLevel < 0 ||
      this.playLevel < 0 ||
      this.fireLevel < 0 ||
      this.flyLevel < 0
    ) {
      return true
    } else return false
  }
}

let nameDraco = prompt("Enter name for draco", "Spike")
let draco = new Draсo(nameDraco)
draco.hungerDrain()
draco.sleepDrain()
draco.playDrain()
draco.fireDrain()
draco.flyDrain()

let nameTamagochi = document.getElementById("nameTamagochi")
nameTamagochi.innerHTML =
  "<h3>The dragon's name - <b>" + nameDraco + "</b></h3>"

let foodLevel = document.getElementById("foodLevel")
let sleepLevel = document.getElementById("sleepLevel")
let playLevel = document.getElementById("playLevel")
let fireLevel = document.getElementById("fireLevel")
let flyLevel = document.getElementById("flyLevel")

function updateLevels() {
  setInterval(() => {
    foodLevel.innerHTML = draco.foodLevel
    sleepLevel.innerHTML = draco.sleepLevel
    playLevel.innerHTML = draco.playLevel
    fireLevel.innerHTML = draco.fireLevel
    flyLevel.innerHTML = draco.flyLevel
  }, 1000)
}

let timerId = updateLevels()

setInterval(() => {
  foodLevel.innerHTML = draco.foodLevel
  sleepLevel.innerHTML = draco.sleepLevel
  playLevel.innerHTML = draco.playLevel
  fireLevel.innerHTML = draco.fireLevel
  flyLevel.innerHTML = draco.flyLevel
  if (draco.didDracoDie()) {
    levels.style.display = "none"
    c_footer.innerHTML = ""
    document.getElementById("dracoImg").src = "img/die.png"
    nameTamagochi.innerHTML = "<h3>" + nameDraco + " died :(</h3>"
  }
}, 1000)

let tId

function updateImage(imgUrl) {
  clearInterval(timerId)
  updateLevels()
  clearTimeout(tId)
  document.getElementById("dracoImg").src = imgUrl
  tId = setTimeout(() => {
    document.getElementById("dracoImg").src = "img/draco.png"
  }, 3000)
}

food.onclick = () => {
  draco.food()
  updateImage("img/food.png")
}

sleep.onclick = () => {
  draco.sleep()
  updateImage("img/sleep.png")
}

play.onclick = () => {
  draco.play()
  updateImage("img/play.jpg")
}

fire.onclick = () => {
  draco.fire()
  updateImage("img/fire.jpg")
}

fly.onclick = () => {
  draco.fly()
  updateImage("img/fly.png")
}
