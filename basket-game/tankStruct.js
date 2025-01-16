function Tank(name, position, offense, armorPower) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.armorPower = armorPower;

  this.printStats = function () {
    console.log(`
            name: ${this.name}, position: ${this.position}, offense: ${this.offense}, armor power: ${this.defense}
        `);
  };

  this.goodGame = function () {
    if (Math.floor(Math.random() * 2) === 1) {
      this.offense++;
    } else {
      this.armorPower++;
    }
  };

  this.badGame = function () {
    if (Math.floor(Math.random() * 2) === 1) {
      this.offense--;
    } else {
      this.armorPower--;
    }
  };
}

module.exports = Tank;
