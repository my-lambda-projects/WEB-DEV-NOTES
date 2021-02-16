// TODO: Import your models, here

class SearchScreen {
  constructor(rl) {
    this.rl = rl;
  }

  async printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH ITEMS                  (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Please type your search term and hit Enter.");
    console.log();
  }

  async printResultsUi(term) {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH RESULTS                (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Your search matches");
    console.log();

    // TODO: Search the notes and to-do items
    // TODO: Print them out

    console.log();
  }

  async show() {
    await this.printUi();
    this.rl.question("> ", async term => {
      await this.printResultsUi(term);
      this.rl.question("Enter to return to the main screen. ", () => {
        const screen = new MainScreen(this.rl);
        screen.show();
      });
    });
  }
}

exports.SearchScreen = SearchScreen;

const { MainScreen } = require('./main-screen');
