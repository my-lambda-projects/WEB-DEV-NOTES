// TODO: import your models here

class AddItemScreen {
  constructor(rl) {
    this.rl = rl;
  }

  async printChoiceUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE AN ITEM                (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("What kind of to-do item do you want to");
    console.log("create?");
    console.log();
    console.log("1. Note");
    console.log("2. Task");
    console.log();
    console.log("Type the number and hit \"Enter\".");
    console.log();
  }

  async printNoteUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A NOTE                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("(Type your text and hit \"Enter\" to return to");
    console.log("the to-do list screen, 300 characters max.)");
    console.log();
    console.log("What is the note?");
    console.log();
  }

  async printTaskUi1() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("What is the title?");
    console.log();
  }

  async printTaskUi2(title) {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`TITLE: ${title}`);
    console.log();
    console.log("What is the category?");
    console.log();

    // TODO: Get categories, here
    // TODO: Print categories, here, with ids so users can select them

    console.log();
  }

  async printTaskUi3(title, categoryId) {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`TITLE: ${title}`);

    // TODO: Get the category by its id
    // TODO: Print it here

    console.log();
    console.log("(Type your text and hit \"Enter\" to return to");
    console.log("the to-do list screen, 300 characters max.)");
    console.log();
    console.log("What is the description?");
    console.log();
  }

  async show() {
    await this.printChoiceUi();
    this.rl.question("> ", async answer => {
      if (answer === "1") {
        await this.printNoteUi();
        this.rl.question("> ", async answer => {

          // TODO: Save a Note, here

          const screen = new ManageTasksScreen(this.rl);
          screen.show();
        });
      } else if (answer === "2") {
        await this.printTaskUi1();
        this.rl.question("> ", async title => {
          await this.printTaskUi2(title);
          this.rl.question("> ", async categoryId => {
            categoryId = Number.parseInt(categoryId) - 1;
            await this.printTaskUi3(title, categoryId);
            this.rl.question("> ", async description => {

              // TODO: Save a task, here with title, categoryId, and description

              const screen = new ManageTasksScreen(this.rl);
              screen.show();
            });
          });
        })
      } else {
        this.show();
      }
    })
  }
}

exports.AddItemScreen = AddItemScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { ManageTasksScreen } = require('./manage-task-screen');
