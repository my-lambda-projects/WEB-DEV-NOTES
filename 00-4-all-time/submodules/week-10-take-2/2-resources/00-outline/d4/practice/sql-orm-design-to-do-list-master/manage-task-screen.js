// TODO: Import your models, here

class ManageTasksScreen {
  constructor(rl) {
    this.rl = rl;
    this.index = 0;
  }

  async printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEMS                   (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: query your to do items, tasks and notes, here, only ones that are
    //       NOT completed TODO: print out items here

    console.log();
    console.log("A. Add a new item");
    console.log("X. Return to main menu");
    console.log("C. Continue");
    console.log();
  }

  async show() {
    await this.printUi();
    this.rl.question("> ", answer => {
      const index = Number.parseInt(answer);
      let screen = this;
      if (answer === "A") {
        screen = new AddItemScreen(this.rl);
      } else if (answer === "X") {
        screen = new MainScreen(this.rl);
      } else if (!isNaN(index)) {
        screen = new ItemDetailScreen(this.rl, index);
      }
      screen.show();
    });
  }
}

exports.ManageTasksScreen = ManageTasksScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { AddItemScreen } = require('./add-item-screen');
const { MainScreen } = require('./main-screen');
const { ItemDetailScreen } = require('./item-detail-screen');
