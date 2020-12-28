// TODO: import your models, here

class ItemDetailScreen {
  constructor(rl, detailId) {
    this.rl = rl;
    this.detailId = detailId;
  }

  async printNoteUi(item) {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEM (NOTE)             (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Display the item, here

    console.log();
  }

  async  printTaskUi(item) {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEM (TASK)             (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Display the item, here

    console.log();
  }

  async show() {
    // TODO: Get the item from the database, task or note

    if (item) {
      if (item.type === 'Note') {
        await this.printNoteUi(item);
      } else {
        await this.printTaskUi(item);
      }
      console.log("Type \"C\" and hit \"Enter\" to complete this");
      console.log("task and return to the list screen. Just");
      console.log("hit \"Enter\" to return to the list screen.");
      this.rl.question("> ", answer => {
        if (answer === "C") {

          // TODO: Update the item so that its complete
          // TODO: Save the item

        }
        const screen = new ManageTasksScreen(this.rl);
        screen.show();
      });
    } else {
      const screen = new ManageTasksScreen(this.rl);
      screen.show();
    }
  }
}

exports.ItemDetailScreen = ItemDetailScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { ManageTasksScreen } = require('./manage-task-screen');
