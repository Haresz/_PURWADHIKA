class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    let randomNUm = Math.round(Math.random() * 10);
    let result = {};
    randomNUm % 2 == 0
      ? (result = { health: 10, power: 0 })
      : (result = { health: 0, power: 10 });
    return result;
  }

  start() {
    //   SHOW STATUS
    console.log("\n# # # # # # # # # # # # # # # # # # # #\n");
    this.player1.showStatus(), this.player2.showStatus();
    console.log("\n======================================\n");
    // GET RANDOM ITEMS
    let randomp1 = this.getRandomItem();
    this.player1.health += randomp1.health;
    this.player1.power += randomp1.power;
    console.log(
      `ADD ITEM ${this.player1.name} =>helath ++${randomp1.health} power ++${randomp1.power}`
    );
    let randomp2 = this.getRandomItem();
    this.player2.health += randomp2.health;
    this.player2.power += randomp2.power;
    console.log(
      `ADD ITEM ${this.player2.name} =>helath ++${randomp2.health} power ++${randomp2.power}`
    );
    console.log("\n======================================\n");
    //   SHOT PLAYER
    this.player2.health =
      this.player2.health - this.player1.hit(this.player1.power);
    this.player1.health =
      this.player1.health - this.player2.hit(this.player2.power);
    console.log("\n======================================\n");

    //   SHOW STATUS
    this.player1.showStatus(), this.player2.showStatus();
    if (this.player1.health <= 0 && this.player2.health <= 0) {
      this.player1.health > this.player2.health
        ? console.log(
            `\n********************\n* PLAYER1 ${this.player1.name} WIN *\n********************\n`
          )
        : console.log(
            `********************\n* PLAYER2 ${this.player2.name} WIN *\n********************\n`
          );
    } else if (this.player1.health <= 0) {
      console.log(
        `********************\n* PLAYER2 ${this.player2.name} WIN *\n********************\n`
      );
    } else if (this.player2.health <= 0) {
      console.log(
        `\n********************\n* PLAYER1 ${this.player1.name} WIN *\n********************\n`
      );
    } else {
      this.start();
    }
  }
}

class Player {
  constructor(name, health, power) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    console.log(`hit ${this.name} => power => ${power}`);
    return power;
  }

  useItem(item) {
    return console.log(`use ${item.getRandomItem()}`);
  }

  showStatus() {
    return console.log(
      `Player ${this.name} (health => ${this.health}, power => ${this.power})`
    );
  }
}

let haris = new Player("haris");
let haresz = new Player("haresz");
// haris.showStatus();
// haresz.showStatus();

let shot = new ShootingGame(haris, haresz);
shot.start();
